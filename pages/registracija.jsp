<%-- 
    Document   : registracija
    Created on : May 28, 2019, 8:51:21 PM
    Author     : PC
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div><c:import url="header.jsp"/></div>
<div class="container">
    <h1 class="naslov">Registracija</h1>
    <p class = "naslov1 "> <br>Popunite obrazac da bi ste se registrovali:</p>
</div>
<div class = "container" style = "margin-top: 30px;">
    <div class = "col-sm-2"></div>
    <div class = "col-sm-8">
        <form action = "regCheck.jsp" method = "POST" >
            <div class = "form-group">
                <label>Ime: </label>
                <input type="text" name="name" class= "form-control" required="">
                <span class="help-block"></span>
            </div>

            <div class = "form-group">
                <label>Prezime: </label>
                <input type="text" name="lastname" class= "form-control" required="" >
                <span class="help-block"></span>
            </div>
            <div class = "form-group">
                <label>JMBG:</label>
                <input type="text" name="jmbg" class= "form-control" pattern="[0-9]{13}" title="Mora da sadrzi 13 cifara">
                <span class="help-block"></span>
            </div>
            <div class = "form-group">
                <label>Broj telefona:</label>
                <input type="text" name="phone_number" class= "form-control" pattern="[0-9]{10}" title="Unesite 10 cifara">
                <span class="help-block"></span>
            </div>
            <div class = "form-group">
                <label>Adresa:</label>
                <input type="text" name="adresse" class= "form-control" required="">
                <span class="help-block"></span>
            </div>
            <div class = "form-group">
                <label>Grad:</label>
                <input type="text" name="city" class= "form-control" required="">
                <span class="help-block"></span>
            </div>
            <div class = "form-group">
                <label>Username:</label>
                <input type="text" name="username" class= "form-control" required="">
                <span class="help-block"></span>
            </div>

            <div class = "form-group">
                <label>Password:</label>
                <input id="password" type="password" name="password" class= "form-control" >
                <span class="help-block"></span>
            </div>

            <div class = "form-group ">
                <label>Confirm password:</label>
                <input type="password" id="confirm_password" name="confirm_password" class= "form-control" >
                <span class="help-block" id="span1"></span>
            </div>
            <div class="form-group">
                <!--treba ovo srediti da ne moze dalje ako nesto nije selektovano-->
                <input type="radio" name="radio" value="da"> Admin <br>
                <input type="radio" name="radio" value="ne"> User 
                <span class="help-block" id="radio"></span>
            </div>
            <div class="form-group" >
                <input id="submit" type="submit" class="btn btn-primary" value="Submit" disabled=""> &nbsp; &nbsp; 
                <input type="reset" class="btn btn-default" value="Reset">
            </div>

            <p>Vec imate nalog? <a href="http://localhost:8080/TuristickaAgencija/pages/login.jsp">Login ovde</a>.</p>

        </form>
    </div>
    <div class = "col-sm-2"></div>
</div>
<div class="raw foot"><c:import url="footer.jsp"/></div>
