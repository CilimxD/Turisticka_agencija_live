<%-- 
    Document   : rezervisi
    Created on : Sep 1, 2019, 12:22:59 AM
    Author     : PC
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<div><c:import url="header.jsp"/></div>
<c:choose>
    <c:when test="${empty sessionScope.username || empty sessionScope.userId}">
        <div class='container naslov'>
            <h2 class="naslov" style="font-weight: 900; color: red" >Molim Vas ulogujte se </h2>
        </div>
        <%
            response.setHeader("Refresh", "2;url=login.jsp");
        %>
    </c:when>
    <c:when test="${empty param.brojLjudi || empty param.brojSobe || empty param.datumOd || empty param.datumDo ||
                    empty param.prevoz || empty param.idDrzave || empty param.idMesta || empty param.idSmestaja}">
            <div class='container naslov'>
                <h2 class="naslov" style="font-weight: 900; color: red" >Neispravni parametri </h2>
            </div>
            <%
                response.setHeader("Refresh", "2;url=../index.jsp");
            %>
    </c:when>
    <c:otherwise>
        <c:set value="${param.brojLjudi}" var="brojLjudi" />
        <c:set value="${param.brojSobe}" var="idSobe" />
        <c:set value="${param.datumOd}" var="datumOd" />
        <c:set value="${param.datumDo}" var="datumDo" />
        <c:set value="${param.prevoz}" var="prevoz" />
        <c:set value="${param.idDrzave}" var="idDrzave" />
        <c:set value="${param.idMesta}" var="idMesta" />
        <c:set value="${param.brojSobe}" var="brojSobe" />
        <c:set value="${param.ukupnaCena}" var="ukupnaCena" />
        <c:set value="${param.idSmestaja}" var="SmestajId" />

        <fmt:parseDate value="${datumOd}" type="DATE" pattern="yyyy-MM-dd" var="formatedDate"/> 
        <fmt:formatDate value="${formatedDate}" pattern="EEE, MMM dd yyyy " type="DATE"/> 

        <sql:update scope="application" dataSource="${db}" var="sve">

            
            INSERT INTO arazman(pre_id,araz_cena,araz_datum_od,araz_datum_do,araz_br_osoba,sobe_id,kor_id) VALUES 
            (?,?,?,?,?,?,?);

            <sql:param value="${prevoz}" />
            <sql:param value="${ukupnaCena}" />
            <sql:param value="${formatedDate}"/> 
            <sql:param value="${datumDo}"/>
            <sql:param value="${brojLjudi}" />
            <sql:param value="${brojSobe}" />
            <sql:param value="${sessionScope.userId}" />
            
        </sql:update>
        <sql:query scope="application" dataSource="${db}" var="korisnici">
            SELECT kor_br_usluga FROM korisnici WHERE kor_id = "${sessionScope.userId}"
        </sql:query>
        <c:forEach items="${korisnici.rows}" var="rez">
            <c:set value="${rez.kor_br_usluga + 1}" var="brUsluga" />
        </c:forEach>
        <sql:update scope="application" dataSource="${db}" var="brUsluga">
            UPDATE korisnici SET kor_br_usluga = "${brUsluga}"
                WHERE kor_id = "${sessionScope.userId}";
        </sql:update>    
        
            <div class='container naslov'>
                <h2 class="naslov" style="font-weight: 900; color: green" >Uspesno ste rezervisali</h2>
            </div>
            <%
                response.setHeader("Refresh", "2;url=../index.jsp");
            %>
        
    </c:otherwise>
</c:choose>

<div class="raw foot"><c:import url="footer.jsp" /></div>


