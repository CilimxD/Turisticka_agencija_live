<%-- 
    Document   : logoout
    Created on : Jun 18, 2019, 10:50:31 PM
    Author     : PC
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div><c:import url="header.jsp"/></div>
<div class="container naslov">
    <div style="color: green; font-weight: 900;">
        <h2>
            <c:set var="ime" scope="session" value="${username}" />
            <c:set var="id" scope="session" value="${userId}" />
            <c:remove scope="session" var="username" />
            <c:remove scope="session" var="userId" />


            <c:out value="Uspesno ste se izlogovali sa imena : ${ime}" />
        </h2>

    </div>
</div>
<meta http-equiv="refresh" content="2;url=../index.jsp" />
<div class="raw foot"><c:import url="footer.jsp"/></div>
