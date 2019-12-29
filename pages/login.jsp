<%-- 
    Document   : login
    Created on : May 28, 2019, 8:54:17 PM
    Author     : PC
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div><c:import url="header.jsp"/></div>
<div class="container">
    <h1 class="naslov">Login</h1>
</div>

<div class = "container" style="margin-top: 30px;">
    <div class = "col-sm-2"></div>
    <div class = "col-sm-8">
        <form action="http://localhost:8080/TuristickaAgencija/pages/validation.jsp" method="post">

            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" class="form-control" required>

                <span class="help-block"></span>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" class="form-control" required>
                <span class="help-block"></span>
            </div>

            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Login">
            </div>

            <div class="form-group" style = "margin-top: 30px;">
                <p>Nemate nalog? Registrujte se <a href="http://localhost:8080/TuristickaAgencija/pages/registracija.jsp">OVDE</a>.</p>
            </div>
        </form>
    </div>
    <div class = "col-sm-2"></div>
</div>
<div class="raw foot"><c:import url="footer.jsp"/></div>


