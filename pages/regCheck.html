<%-- 
    Document   : regCheck
    Created on : Jun 19, 2019, 9:47:36 PM
    Author     : PC
--%>

<%@page import="turistickaagencija.Connect"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>  


<div><c:import url="header.jsp"/></div>

<c:set value="${param.username}" var="username"/>
<sql:query scope="application" dataSource="${db}" var="rez"> 
    SELECT * from logovanje WHERE log_username="${username}";
</sql:query>
<c:choose>
    <c:when test="${rez.rowCount != 0}">
        <div class='container naslov'>
            <h2 style ='color: red;'>
                Korisnicko ime ${username} vec postoji molim Vas unesite neko drugo!!
            </h2>
        </div>
        <%
            response.setHeader("Refresh", "2;url=registracija.jsp");
        %>
    </c:when>
    <c:otherwise>
        <c:set value="${param.name}" var="name"/>
        <c:set value="${param.lastname}" var="lastname"/>
        <c:set value="${param.jmbg}" var="jmbg"/>
        <c:set value="${param.phone_number}" var="phone_number"/>
        <c:set value="${param.adresse}" var="adresse"/>
        <c:set value="${param.city}" var="city"/>
        <c:set value="${param.password}" var="password"/>
        <c:set value="0" var="brUsulga"/>
        <c:set value="${param.radio}" var="userStatus"/>

        <sql:transaction dataSource="${applicationScope.db}">
            <!--Upisivanje u tabelu logovanje-->
            <sql:update>
                INSERT INTO logovanje(log_username,log_password)VALUES("${username}","${password}") 
            </sql:update>
            <!--Uzimanje id iz logovanje tabele-->
            <sql:query var="log">
                SELECT * FROM logovanje WHERE log_username = "${username}" AND log_password = "${password}"
            </sql:query>
            <c:forEach items="${log.rows}" var="rez">
                <c:set value="${rez.log_id}" var="id"/>
            </c:forEach>
            <!--Upisivanje u korisnici tabeli ostali podaci-->
            <sql:update>
                INSERT INTO korisnici(kor_ime,kor_prezime,kor_jmbg,kor_brTelefona,kor_br_usluga,kor_grad,korisnici.log_id,kor_adresa,kor_admin)
                VALUES(?,?,?,?,?,?,?,?,?);
                <sql:param value="${name}" />
                <sql:param value="${lastname}" />
                <sql:param value="${jmbg}" />
                <sql:param value="${phone_number}" />
                <sql:param value="${brUsulga}" />
                <sql:param value="${city}" />
                <sql:param value="${id}" />
                <sql:param value="${adresse}" />
                <sql:param value="${userStatus}" />
            </sql:update>
            <div class='container naslov'>
                <h2 style ='color: green;'>
                    Uspesno ste se registrovali
                </h2>
            </div>  
            <meta http-equiv="refresh" content="2;url=../index.jsp" />
        </sql:transaction>
        <sql:query scope="application" dataSource="${db}" var="korisnici">
            SELECT * FROM korisnici WHERE kor_ime = "${name}" AND kor_prezime = "${lastname}" AND kor_jmbg = "${jmbg}"
        </sql:query>
        <c:if test="${korisnici.rowCount == 0}">
            <div class='container naslov'>
                <h2 style ='color: red;'>
                    Doslo je do greske molim Vas pokusajte ponovo!!!
                </h2>
            </div> 
             <meta http-equiv="refresh" content="2;url=registracija.jsp" />
        </c:if>
    </c:otherwise>
</c:choose>

<%
//    String users = request.getParameter("username");
//    Connection con = null;
//    Statement stmt = null;
//    ResultSet rs = null;
//
//    try {
//        con = Connect.getConnection();
//
//        stmt = con.createStatement();
//        rs = stmt.executeQuery("SELECT * from logovanje WHERE log_username = '" + users + "'");
//        while (rs.next()) {
//            out.print("<div class='container naslov'>");
//
//            out.print("<h2 style ='color: red;'>");
//            out.print("Korisnicko ime " + users + " vec postoji molim Vas unesite neko drugo!!");
//            out.print("</h2>");
//            out.print("</div>");
//
//            response.setHeader("Refresh", "5;url=registracija.jsp");
//        }
//    } catch (Exception e) {
//        e.printStackTrace();
//    }
//    String name = request.getParameter("name");
//    String lastname = request.getParameter("lastname");
//    String phone_number = request.getParameter("phone_number");
//    String adresa = request.getParameter("adresse");
//    String city = request.getParameter("city");
//    String password = request.getParameter("password");
//    String conpassword = request.getParameter("confirm_password");
//    String jmbg = "";
//    int brUsluga = 0;
//    int id = 0;
//    if (!(password.equals(conpassword))) {
//        out.print("<div class='container naslov'>");
//
//        out.print("<h2 style ='color: red;'>");
//        out.print("Sifre su razlicite molim vas pokusajte ponovo");
//        out.print("</h2>");
//        out.print("</div>");
//        response.setHeader("Refresh", "5;url=registracija.jsp");
//    }
//
////Upisivanje u tabelu logovanje
//    int up = stmt.executeUpdate("insert into logovanje(log_username,log_password)values('" + users + "','" + password + "')");
//
////Uzimanje id iz logovanje za novog korisnika
//    rs = stmt.executeQuery("SELECT * from logovanje WHERE log_username = '" + users
//            + "' AND log_password = '" + password + "'");
//    while (rs.next()) {
//
//        id = rs.getInt(1);
//        out.print(id);
//    }
////nesto nema u bazi pa treba da upisem da bi ovo radilo 
//    up = stmt.executeUpdate("insert into korisnici(kor_ime,kor_prezime,kor_jmbg,kor_brTelefona,kor_br_usluga,kor_grad,log_id,kor_adresa)values('" + name + "','" + lastname + "','" + jmbg + "','"
//            + phone_number + "','" + brUsluga + "','" + city + "','" + id + "','" + adresa + "')");
//    out.print("<div class='container naslov'>");
//    out.print("<h2 style ='color: green;'>");
//    out.print("Uspesno ste se registrovali");
//    out.print("</h2>");
//    out.print("</div>");
//    response.setHeader("Refresh", "5;url=../index.jsp");
//    id = 0;

%>

<div class="raw foot"><c:import url="footer.jsp"/></div>