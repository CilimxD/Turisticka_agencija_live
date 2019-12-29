<%-- 
    Document   : mesta
    Created on : Jul 26, 2019, 9:15:27 PM
    Author     : PC
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>

<div><c:import url="header.jsp"/></div>

<c:choose>
    <c:when test="${empty param.drzavaID}">
        <div class='container naslov'>
            <h2 class="naslov" style="font-weight: 900; color: red" >Neispravni parametri</h2>
        </div>
        <%
            response.setHeader("Refresh", "2;url=../index.jsp");
        %>
    </c:when>
    <c:otherwise>
        <div class="container">
            <c:set value="${param.drzavaID}" var="drzavaID" />.
            <sql:query scope="application" dataSource="${db}" var="rez1"> 
                SELECT drzava.drz_naziv FROM drzava WHERE drzava.drz_id=${drzavaID}
            </sql:query>
            <c:forEach items="${rez1.rows}" var="drzava">
                <c:set value="${drzava.drz_naziv}" var="naziv"/>
                <h1 class="naslov">Ponuda ${naziv}</h1>
            </c:forEach>     
            <sql:query scope="application" dataSource="${db}" var="mesta">
                SELECT drzava.drz_naziv,mesta.drz_id,mesta.mes_id,mesta.mes_lokacija,mesta.mes_opis,mesta.mes_slika FROM drzava
                INNER JOIN mesta ON mesta.drz_id = drzava.drz_id where mesta.drz_id=${drzavaID} 
            </sql:query>
            <c:forEach items="${mesta.rows}" var="rez">
                <c:set value="${rez.drz_naziv}" var="nazivDrz"/> 
                <c:set value="${rez.mes_id}" var="mestoID"/>
                <c:set value="${rez.mes_lokacija}" var="lokacija"/>
                <c:set value="${rez.mes_opis}" var="opis"/>
                <c:set value="${rez.mes_slika}" var="slika"/>
                <div class="row" style="border: 3px solid black;box-shadow: 10px 10px 5px grey;position:relative;margin-top: 50px;background-color: #f0ead6" >
                    <div class="col-sm-4" style="padding: 5px ;">
                        <img src="../img/${slika}.jpg" width="100%"> 
                    </div>
                    <div class="col-sm-8">
                        <p class="meni_desni_text">${lokacija} </p>
                        <p class="opis" style="padding-bottom: 30px ">${opis}</p>    
                    </div>
                    <p><a href="arazmani.jsp?idDrzave=${drzavaID}&idMesta=${mestoID}" style="position: absolute;bottom:10px;right:10px;"
                          class="btn btn-primary" role="button">Izaberi ${lokacija}</a></p>

                </div>
            </c:forEach>  
        </div>
    </c:otherwise>
</c:choose>

<div class="raw foot"><c:import url="footer.jsp"/></div>