<%-- 
    Document   : rezervacija
    Created on : Aug 12, 2019, 8:48:41 PM
    Author     : PC
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>


<div><c:import url="header.jsp"/></div>
<c:choose>
    <c:when test="${empty param.idDrzave || empty param.idMesta || empty param.idSmestaja}">

        <div class='container naslov'>
            <h2 class="naslov" style="font-weight: 900; color: red" >Neispravni parametri </h2>
        </div>
        <%
            response.setHeader("Refresh", "2;url=../index.jsp");
        %>
    </c:when>
    <c:when test="${empty sessionScope.username || empty sessionScope.userId}">
        <div class='container naslov'>
            <h2 class="naslov" style="font-weight: 900; color: red" >Molim Vas ulogujte se </h2>
        </div>
        <%
            response.setHeader("Refresh", "2;url=login.jsp");
        %>
    </c:when>
    <c:otherwise>
        <sql:query scope="application" dataSource="${db}" var="pop">
            SELECT * FROM korisnici WHERE kor_id = "${sessionScope.userId}";
        </sql:query>
        <c:forEach items="${pop.rows}" var="popusti">
            <c:set value="${popusti.kor_br_usluga}" var="popust" />
            <c:out value="${popust}" />
        </c:forEach>   

        <div class="container opis" >
            <div class="naslov" >Rezervacija</div>
            <c:set value="${param.idDrzave}" var="idDrzave" />
            <c:set value="${param.idMesta}" var="idMesta" />
            <c:set value="${param.idSmestaja}" var="idSmestaja" />
            <sql:query scope="application" dataSource="${db}" var="sve">
                SELECT drzava.drz_naziv,mesta.drz_id,mesta.mes_id,mesta.mes_lokacija,
                smestaj.sme_id,smestaj.sme_naziv,sobe.*,prevoz.*
                FROM mesta
                INNER JOIN drzava ON drzava.drz_id = mesta.drz_id 
                INNER JOIN smestaj ON smestaj.mes_id = mesta.mes_id 
                INNER JOIN sobe ON sobe.sme_id = smestaj.sme_id
                INNER JOIN prevoz ON prevoz.mes_id = mesta.mes_id WHERE mesta.mes_id=${idMesta} && smestaj.sme_id=${idSmestaja}
            </sql:query>
            <c:forEach items="${sve.rows}" var="rez" varStatus="loop">
                <c:set value="${rez.drz_naziv}" var="drzavaIme"/>
                <c:set value="${rez.mes_lokacija}" var="mestoIme"/>
                <c:set value="${rez.sme_naziv}" var="smestajIme"/>
                <c:set value="${rez.sobe_cena}" var="cenaSmestaja"/>
                <c:set value="${rez.sobe_broj}" var="brojSobe"/>
                <c:if test="${loop.first}">
                    <c:set var="soba1" value="${rez.sobe_id}" />
                </c:if>     
                <c:if test="${loop.last}" >
                    <c:set value="${rez.sobe_id}" var="soba2"/>
                </c:if>

            </c:forEach>
            <div>
                Izabraliste ste drzavu ${drzavaIme},mesto ${mestoIme} i smestaj ${smestajIme}
            </div>
            <div>
                <form method="POST" action="rezervisi.jsp" name="form1" >
                    <input type="text" name="idDrzave" value="${idDrzave}" hidden="">
                    <input type="text" name="idMesta" value="${idMesta}" hidden="">
                    <input type="text" name="idSmestaja" value="${idSmestaja}" hidden="">

                    Broj ljudi: <select id="brojLjudi" name="brojLjudi" data-toggle="tooltip" data-placement="bottom" title="Molim vas izaberite ">
                        <option value="">Izaberite broj osobe</option>
                        <option value="1">Jedan</option>
                        <option value="2">Dva</option>
                        <option value="3">Tri</option>
                        <option value="4">Četiri</option>
                    </select> <br/>
                    Izaberi broj sobe: 
                    <select id="brojSobe" name="brojSobe" data-toggle="tooltip" data-placement="bottom" title="Molim vas izaberite " required="">
                        <option value="">Izaberite broj sobe koju zelite</option>
                        <option value="${soba1}">Soba broj 1</option>
                        <option value="${soba2}">Soba broj 2</option>
                    </select> 
                    <br />
                    <span id="brKreveta"></span><br/>
                    <span id="greska"></span>
                    <div style="margin-bottom: 10px; display: flex; align-items: center;">
                        <label for="party" style="display: inline-block;width: 100px;">Datum od:</label>
                        <input type="date" id="datumOd" name="datumOd" min="" pattern="yyyyMMdd" required="" data-toggle="tooltip" data-placement="bottom" title="Molim vas izaberite " > 
                        <span class="validity" style="content: '✖';padding-left: 5px;"></span>
                    </div>
                    Broj dana: <select required="" id="brojDana" name="brojDana" data-toggle="tooltip" data-placement="bottom" title="Molim vas izaberite ">
                        <option value="">Izaberite broj dana:</option>
                        <option value="5">5 Dana</option>
                        <option value="10">10 Dana</option>
                        <option value="15">15 Dana</option>
                    </select> <br/>
                    <span id="datum"></span> <br/>
                    <input type="text" name="datumDo" value="" hidden="">
                    <span id="greskaDatum"></span>
                    <span id="cena" hidden=""></span>
                    <span id="cenaDana"></span> <br/>
                    Izaberi tip prevoza: <select id="prevoz" required="" name="prevoz" data-toggle="tooltip" data-placement="bottom" title="Molim vas izaberite ">
                        <option value=""> Izaberite tip prevoza: </option>
                    </select> <br/>
                    <span id="cenaPrevoza" hidden=""></span>


                    <span id="popust" hidden="">${popust}</span>
                    <span id="popust2"></span> <br/>
                    <span id="ukupnaCena"></span> <br/>
                    <span id="cenaSaPopustom"></span><br/>
                    <input type="text" name="ukupnaCena" value="" hidden=""> 
                </form>
                <form>
                    <p><a href="arazmani.jsp?idDrzave=${idDrzave}&idMesta=${idMesta}"
                          class="btn btn-primary" role="button">Apartmani</a>
                        <a href="../index.jsp" class="btn btn-primary" role="button">Pocetna</a>
                        <input value="Rezervisi" id="rezervisi" class="btn btn-primary" type="button" onclick="document.form1.submit();" disabled=""/></p>
                </form>
            </div>
        </div>   
    </c:otherwise>
</c:choose>    
<div class="raw foot"><c:import url="footer.jsp"/></div>