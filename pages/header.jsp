<%-- 
    Document   : header
    Created on : May 28, 2019, 7:43:50 PM
    Author     : PC
--%>


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>MilicTurs</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="http://localhost:8080/TuristickaAgencija/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="http://localhost:8080/TuristickaAgencija/bootstrap/bootstrap-theme.min.css " rel="stylesheet"
        type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://localhost:8080/TuristickaAgencija/bootstrap/bootstrap.min.js"></script>
    <link href="http://localhost:8080/TuristickaAgencija/main.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Berkshire+Swash' rel='stylesheet' type='text/css'>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    <script type="text/javascript" src="http://localhost:8080/TuristickaAgencija/javaScript.js"></script>
</head>

<body>
    <div class="container">
        <img src=http://localhost:8080/TuristickaAgencija/img/top5.jpg class="top">
    </div>
    <div class="container">
        <nav class="navbar navbar-inverse bs-dark">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="http://localhost:8080/TuristickaAgencija/index.jsp">Milicturs</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="" id="index"><a href="http://localhost:8080/TuristickaAgencija/index.jsp">Pocetna</a>
                    </li>
                    <li class="" id="onama"><a href="http://localhost:8080/TuristickaAgencija/pages/onama.jsp">O
                            nama</a></li>

                    <li class="dropdown" id="drzava">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">Destinacije <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="http://localhost:8080/TuristickaAgencija/pages/mesta.jsp?drzavaID=1">Srbija</a></li>
                            <li><a href="http://localhost:8080/TuristickaAgencija/pages/mesta.jsp?drzavaID=2">Grcka</a></li>
                            <li><a href="http://localhost:8080/TuristickaAgencija/pages/mesta.jsp?drzavaID=3">Turska</a></li>
                            <!-- <li role="separator" class="divider" hidden=""></li>
                            <li hidden=""><a href="#">Gallery</a></li>
                            <li role="separator" class="divider" hidden=""></li>
                            <li hidden=""><a href="#">Videos</a></li> -->
                        </ul>
                    </li>
                    <li class="" id="kontakt"><a
                            href="http://localhost:8080/TuristickaAgencija/pages/kontakt.jsp">Kontakt</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <c:if test="${sessionScope.username == null}">
                        <li id="registracija"><a
                                href="http://localhost:8080/TuristickaAgencija/pages/registracija.jsp">Registracija</a>
                        </li>
                        <li id="login"><a href="http://localhost:8080/TuristickaAgencija/pages/login.jsp">Log in</a>
                        </li>
                    </c:if>
                    <c:if test="${sessionScope.username != null}">
                        <li id="rezervacije"><a
                                href="http://localhost:8080/TuristickaAgencija/pages/pregled.jsp">Pregled
                                rezervacija</a></li>
                        <li id="logout"><a
                                href="http://localhost:8080/TuristickaAgencija/pages/logout.jsp">${sessionScope.username}(LogOut)</a>
                        </li>
                    </c:if>
                </ul>
            </div>
        </nav>
    </div>