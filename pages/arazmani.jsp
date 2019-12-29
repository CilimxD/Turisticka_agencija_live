<%-- 
    Document   : arazmani
    Created on : Aug 4, 2019, 7:01:04 PM
    Author     : PC
--%>


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>


<div><c:import url="header.jsp"/></div>
<c:choose>
    <c:when test="${empty param.idDrzave || empty param.idMesta}">
        <div class='container naslov'>
            <h2 class="naslov" style="font-weight: 900; color: red" >Neispravni parametri </h2>
        </div>
        <%
            response.setHeader("Refresh", "2;url=../index.jsp");
        %>
    </c:when>
    
    <c:otherwise>
        <input type="text" value="${sessionScope.username}" id="sesName" hidden="">
        
        <c:set value="${param.idDrzave}" var="idDrzave" />
        <c:set value="${param.idMesta}" var="idMesta" />
        <sql:query scope="application" dataSource="${db}" var="mesta">
            SELECT drzava.drz_naziv,mesta.drz_id,mesta.mes_id,mesta.mes_lokacija,smestaj.*
            FROM mesta
            INNER JOIN drzava ON drzava.drz_id = mesta.drz_id 
            INNER JOIN smestaj ON smestaj.mes_id = mesta.mes_id WHERE mesta.mes_id=${idMesta} 
        </sql:query>
        <c:forEach items="${mesta.rows}" var="rez">
            <c:set value="${rez.mes_lokacija}" var="imeMesta" />
            <c:set value="${rez.sme_id}" var="idSmestaj" />
            <c:set value="${rez.sme_zvezdive}" var="brojZvezdice" />
            <c:set value="${rez.sme_naziv}" var="imeSmestaja" />
            <c:set value="${rez.sme_tip_sobe}" var="tipSobe" />
            <c:set value="${rez.sme_bazen}" var="bazen" />
            <c:set value="${rez.sme_broj}" var="brojSoba" />
            <c:set value="${rez.tip_sme_id}" var="smestajnaJedinica" />
            <c:set value="${rez.mes_id}" var="mestoID" />
            <c:set value="${rez.sme_opis}" var="opisSmestaja" />
            <c:set value="${rez.sme_slika}" var="slika" />
            <sql:query scope="application" dataSource="${db}" var="smeJed">
                SELECT * FROM tip_smestaja WHERE tip_sme_id = ${smestajnaJedinica}
            </sql:query>
            <c:forEach items="${smeJed.rows}" var="rez1">
                <c:set value="${rez1.tip_sme_tip}" var="vrstaSmestaja" />
                <div class="container">
                    
                    <h1 class="naslov" style="font-size: 80px">${imeMesta} &#160 ${vrstaSmestaja}</h1>
                    <div class="row" style="border: 3px solid black;box-shadow: 10px 10px 5px grey;position:relative;margin-top: 50px;background-color: #f0ead6;" >
                        <div class="col-sm-4" style="padding: 5px ;">
                            <img src="../img/${slika}.jpg" width="100%"> 
                        </div>
                        <div class="col-sm-8">
                            Ime smestaja: ${imeSmestaja} <br />
                            <c:forEach begin="1" end="${brojZvezdice}">
                                <span class="glyphicon glyphicon-star"></span>   
                            </c:forEach>
                            <div>
                                ${opisSmestaja}    
                            </div>
                        </div>
                        <table style="width:100%;">
                            <tr>
                                <th>Bazen</th>
                                <th>Tip Sobe</th> 
                                <th>Broj sobe u smestaju</th>
                                <sql:query scope="application" dataSource="${db}" var="sobe">
                                    SELECT * FROM sobe WHERE sme_id=${idSmestaj} 
                                </sql:query>
                                <c:forEach items="${sobe.rows}" var="sobaa" varStatus="jaa" >    
                                    <c:set value="${sobaa.sobe_broj}" var="brojSobe"/>
                                    <th>Soba broj ${brojSobe}</th>
                                </c:forEach> 
                            </tr>
                            <tr>
                                <td>${bazen}</td>
                                <td>${tipSobe}</td>
                                <td>${brojSoba}</td>
                                <sql:query scope="application" dataSource="${db}" var="sobe">
                                    SELECT * FROM sobe WHERE sme_id=${idSmestaj} 
                                </sql:query>
                                <c:forEach items="${sobe.rows}" var="sobaa" varStatus="jaa" >    
                                    <c:set value="${sobaa.sobe_cena}" var="cenaSobe"/>
                                    <td>Cena po danu ${cenaSobe} din</td>
                                </c:forEach> 
                        </table>
                        <br/>
                        <br/>
                        <p><a href="rezervacija.jsp?idDrzave=${idDrzave}&idMesta=${idMesta}&idSmestaja=${idSmestaj}" style="position: absolute;bottom:10px;right:10px;"
                              class="btn btn-primary" role="button">Izaberi</a></p>   
                    </div>

                </div>
            </c:forEach>    
        </c:forEach>

    </c:otherwise> 
</c:choose> 
<div class="raw foot"><c:import url="footer.jsp"/></div>