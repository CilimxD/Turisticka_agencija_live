<%-- 
    Document   : pregled
    Created on : Sep 8, 2019, 9:00:00 PM
    Author     : PC
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<div><c:import url="header.jsp"/></div>

<div class="container">
    <h1 class="naslov" style="font-size: 80px">Pregled svih rezervacija</h1>
    <c:choose>
        <c:when test="${sessionScope.admin eq 'ne'}">
            <table style="border: 3px solid black;width: 100%;background-color: #f0ead6;box-shadow: 10px 10px 5px grey">    
                <sql:query scope="application" dataSource="${db}" var="rez">
                    SELECT * FROM arazman WHERE kor_id = "${sessionScope.userId}"
                </sql:query>
                <c:forEach items="${rez.rows}" var="rezervacija">
                    <c:set value="${rezervacija.araz_cena}" var="arazmanCena"/>
                    <c:set value="${rezervacija.araz_datum_do}" var="datumDo"/>
                    <c:set value="${rezervacija.araz_datum_od}" var="datumOd"/>
                    <c:set value="${rezervacija.sobe_id}" var="sobaId"/>
                    <c:set value="${rezervacija.kor_id}" var="korisnikId"/>
                    <c:set value="${rezervacija.sme_id}" var="smestajId"/>
                    <c:set value="${rezervacija.drz_id}" var="drzavaId"/>

                    <sql:query scope="application" dataSource="${db}" var="rez1">
                        SELECT drzava.drz_naziv,mesta.mes_lokacija,smestaj.sme_naziv,sobe.sobe_broj
                        FROM arazman
                        INNER JOIN sobe ON sobe.sobe_id = arazman.sobe_id 
                        INNER JOIN smestaj ON smestaj.sme_id = sobe.sme_id 
                        INNER JOIN mesta ON mesta.mes_id = smestaj.mes_id
                        INNER JOIN drzava ON drzava.drz_id = mesta.drz_id
                        WHERE arazman.sobe_id = "${sobaId}" AND arazman.kor_id = "${korisnikId}";
                    </sql:query>
                        
                    <c:forEach items="${rez1.rows}" var="sve">
                        <c:set value="${sve.drz_naziv}" var="drzavaNaziv" />
                        <c:set value="${sve.mes_lokacija}" var="mestoIme" />
                        <c:set value="${sve.sme_naziv}" var="smestajNaziv" />
                        <c:set value="${sve.sobe_broj}" var="sobaBroj" />
                        <tr>
                            <th>Drzava</th>
                            <th>Mesto</th>
                            <th>Apartman</th>
                            <th>Soba br</th>
                            <th>Datum od</th>
                            <th>Datum do</th>
                            <th>Cena</th>
                        </tr>
                        <tr style="border-bottom: 3px solid black">
                            <td>${drzavaNaziv}</td>
                            <td>${mestoIme}</td>
                            <td>${smestajNaziv}</td>
                            <td>${sobaBroj}</td>
                            <td>${datumOd}</td>
                            <td>${datumDo}</td>
                            <td>${arazmanCena} dinara</td>
                        </tr> 
                        
                    </c:forEach>   
                </c:forEach>    
            </table>
        </c:when>
        <c:otherwise>
            <table style="border: 3px solid black;width: 100%;background-color: #f0ead6;box-shadow: 10px 10px 5px grey">    
                <sql:query scope="application" dataSource="${db}" var="rez">
                    SELECT * FROM arazman 
                </sql:query>
                <c:forEach items="${rez.rows}" var="rezervacija">
                    <c:set value="${rezervacija.araz_cena}" var="arazmanCena"/>
                    <c:set value="${rezervacija.araz_datum_do}" var="datumDo"/>
                    <c:set value="${rezervacija.araz_datum_od}" var="datumOd"/>
                    <c:set value="${rezervacija.sobe_id}" var="sobaId"/>
                    <c:set value="${rezervacija.kor_id}" var="korisnikId"/>
                    <sql:query scope="application" dataSource="${db}" var="rez1">
                        SELECT drzava.drz_naziv,mesta.mes_lokacija,smestaj.sme_naziv,sobe.sobe_broj,logovanje.log_username
                        FROM arazman
                        INNER JOIN sobe ON sobe.sobe_id = arazman.sobe_id 
                        INNER JOIN smestaj ON smestaj.sme_id = sobe.sme_id 
                        INNER JOIN mesta ON mesta.mes_id = smestaj.mes_id
                        INNER JOIN drzava ON drzava.drz_id = mesta.drz_id
                        INNER JOIN korisnici ON korisnici.kor_id = arazman.kor_id
                        INNER JOIN logovanje ON logovanje.log_id = korisnici.log_id
                        WHERE  sobe.sobe_id = "${sobaId}" && arazman.kor_id = "${korisnikId}"
                    </sql:query>
                    <c:forEach items="${rez1.rows}" var="sve">
                        <c:set value="${sve.drz_naziv}" var="drzavaNaziv" />
                        <c:set value="${sve.mes_lokacija}" var="mestoIme" />
                        <c:set value="${sve.sme_naziv}" var="smestajNaziv" />
                        <c:set value="${sve.sobe_broj}" var="sobaBroj" />
                        <c:set value="${sve.log_username}" var="username" />
                        <tr>
                            <th>Username</th>
                            <th>Drzava</th>
                            <th>Mesto</th>
                            <th>Apartman</th>
                            <th>Soba br</th>
                            <th>Datum od</th>
                            <th>Datum do</th>
                            <th>Cena</th>
                        </tr>
                        <tr style="border-bottom: 3px solid black">
                            <td>${username}</td>
                            <td>${drzavaNaziv}</td>
                            <td>${mestoIme}</td>
                            <td>${smestajNaziv}</td>
                            <td>${sobaBroj}</td>
                            <td>${datumOd}</td>
                            <td>${datumDo}</td>
                            <td>${arazmanCena} dinara</td>
                        </tr> 
                    </c:forEach>   
                </c:forEach>    
            </table>
        </c:otherwise>
    </c:choose>    
</div>

<div class="raw foot"><c:import url="footer.jsp"/></div>
