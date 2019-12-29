<%-- 
    Document   : kontakt
    Created on : May 28, 2019, 8:46:58 PM
    Author     : PC
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div><c:import url="header.jsp"/></div>
<div class="container">
    <h1 class="naslov">Kontaktirajte nas</h1>
</div>

<div class="container" style="padding-top: 50px;">
    <div class="col-sm-6">
        <form method="post" action="mailto:Milic@tours.com?subject=ime&body=tekst">
            <fieldset>
                <legend>Posaljite nam poruku</legend>

                <label>Ime i prezime<br><input type="text" name="ime" size="20"/></label>
                <br><br>
                <label>e-mail<br><input type=email name="email" size="20"/></label>
                <br><br>
                <textarea cols="30" rows="10" placeholder="Napisite nam poruku" name="tekst"></textarea>
                <br><br>
                <button type="reset">Reset</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit">Posalji</button>
            </fieldset>     
        </form>


    </div>

    <div class="col-sm-6">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.41901497801!2d20.458241815097306!3d44.813027679098596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab209cff051%3A0x52504f6400d4b777!2z0KXQvtGC0LXQuyDQnNC-0YHQutCy0LA!5e0!3m2!1ssr!2srs!4v1558718452033!5m2!1ssr!2srs" 
                width="100%" height="400" frameborder="0" style="border:0" allowfullscreen>
        </iframe>
        <br><br>
        <p class="text4" style="color: black;">e-mail: Milic-tours@gmail.com</p>
        <p class="text4" style="color: black;">Adresa: Terazije 20, Beograd</p>
        <p class="text4" style="color: black;">tel: 011/555-555</p>
    </div>
</div>
<div class="raw foot"><c:import url="footer.jsp"/></div>
