
 function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length ; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };
$("document").ready(function () { 
    
//da se meni sastrane prilagodjava u zavisnosti od velicine windowsa
//i da se podera do neke vrednosti
    if ($(window).width() > 768) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 600) {
                $('.meni_desni').css("position", "fixed");
                $('.meni_desni').css("top", 5);

            } else {
                $('.meni_desni').css("position", "absolute");
            }
        });
    }
    ;
//    setovanje aktivne klase

    var putanja = window.location.pathname;
    var brojKose;
    var brojTacke;
    var idStr;

    brojKose = putanja.lastIndexOf("/") + 1;
    brojTacke = putanja.lastIndexOf(".");
    imeStr = putanja.substring(brojKose, brojTacke);
    idStr = $("li");
    for (var i = 0; i < idStr.length; i++) {
        if (idStr[i].getAttribute("id") === imeStr) {

            idStr[i].classList.add("active");

        } else if (imeStr === "mesta") {
            document.getElementById("drzava").classList.add("active");
        }
    }

//    setovanje aktivne klase za slider da radi

    if (window.location.href === "http://localhost:8080/TuristickaAgencija/index.jsp"
            || window.location.href === "http://localhost:8080/TuristickaAgencija/" ||
            window.location.href === "http://localhost:8080/TuristickaAgencija/index.jsp#" ||
            window.location.href === "http://localhost:8080/TuristickaAgencija/#") {
        var div = document.getElementById("grcka");
        div.classList.add("active");
    }
    if (window.location.href === "http://localhost:8080/TuristickaAgencija/pages/registracija.jsp") {

        $('#password, #confirm_password').on('keyup', function () {

            var pass = $("#password").val();
            var conPass = $("#confirm_password").val();


            if (pass === conPass && pass !== "" && conPass !== "") {

                $("#span1").empty();
                $('#span1').html('Match').css('color', 'green');
            }
            if (pass !== conPass) {
                $('#submit').attr("disabled", "disabled");
                $('#span1').html('Not Matching').css('color', 'red');
            }
            if (pass === "" || conPass === "") {
                $('#submit').attr("disabled", "disabled");
                $("#span1").empty();
                $('#span1').html('Empty').css('color', 'red');
            }

        });
        $("input[name='radio']").hover(function () {
            var radios = document.getElementsByName("radio");
            var found = 1;
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked && $("#span1").text() == "Match") {
                    found = 0;
                    $('#submit').removeAttr("disabled");
                    $("#radio").empty();
                    break;
                }
            }
            if (found == 1)
            {
                
                $('#submit').attr("disabled", "disabled");
                $("#radio").html("Molim Vas izaberete");
            }

        });

    }
    var dugaciUrl = window.location.href;
    var upitnik = dugaciUrl.lastIndexOf("?");
    var URL = dugaciUrl.substring(0, upitnik);
    if (URL === "http://localhost:8080/TuristickaAgencija/pages/arazmani.jsp") {
        var sesijskoIme = $("#sesName").val();
        if (sesijskoIme === "") {
            alert("Morate biti ulogovani da bi rezervisali");

        }
    }
    if (URL === "http://localhost:8080/TuristickaAgencija/pages/rezervacija.jsp") {
            
         
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //Januar je 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }

            today = yyyy + '-' + mm + '-' + dd;
            $("#datumOd").attr("min", today);

            $("#brojSobe").change(function () {
//                $("#ukupnaCena").html("");
//                $("#datumOd").val(""); 
//            promeniti sve vrednosti na 0 kad se predhotni element promenio
                var value = $(this).val();
                var brLjudi = parseInt($("#brojLjudi").val());
                if (value === "") {
                    $("#brKreveta").html("");
                    return;
                } else {
                    $.get("brojKreveta.jsp", {q: value}, function (data) {
                        $("#brKreveta").html(data);

                        var brojKreveta = $("#brKreveta").html();
                        var tacke = brojKreveta.lastIndexOf(":") + 1;
                        var broj = parseInt(brojKreveta.substring(tacke));
                        if (broj === null || broj === "") {
                            return;
                        } else {
                            if (brLjudi > broj) {

                                $("#greska").css("color", "red");
                                $("#greska").html("Broj kreveta je manji od broj osoba");

                            } else if (brLjudi <= broj) {
                                $("#greska").empty();

                            }

                        }
                    });
                }


                $("#brojDana").change(function () {
                    var date1 = $("#datumOd").val();
                    var days = parseInt($("#brojDana").val());

                    var result = new Date(date1);
                    result.setDate(result.getDate() + days);
                    var d = result.getDate();
                    var m = result.getMonth() + 1; //Month from 0 to 11
                    var y = result.getFullYear();
                    var formatedDate = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
                    var idSobe = $("#brojSobe").val();
                    $("#greskaDatum").html(idSobe);
                    $("#datum").html("Datum do " + formatedDate);
                    $.get("datumProvera.jsp", {a: date1, b: formatedDate, c: idSobe}, function (datumi) {
                        if (datumi !== "OK") {
                            $("#greskaDatum").css("color", "red");
                            $("#greskaDatum").html(datumi);
                        } else {
                            $("#greskaDatum").remove();
                        }
                    });
                    var value = parseInt($("#brojDana").val());
                    var brojSobe = parseInt($("#brojSobe").val());
                    $.get("brojKreveta.jsp", {q: brojSobe, b: value}, function (dat) {
                        $("#cena").html(dat);
                        $("#cenaDana").html(parseInt($("#cena").html()) * value + " dinara za " + value + " broj dana");
                    });
                    var jednako = dugaciUrl.lastIndexOf("&");
                    var mesta = dugaciUrl.lastIndexOf("M") + 6;
                    var idMesta = dugaciUrl.substring(mesta, jednako);

                    $.get("prevoz.jsp", {b: idMesta}, function (prevoz) {
                        $("#prevoz").empty();
                        $("#prevoz").append(prevoz);
                    });
                    $("#prevoz").change(function () {
                        var cenaTxt = $("#prevoz option:selected").text();
                        var cena = cenaTxt.indexOf("cena") + 4;
                        var dinara = cenaTxt.indexOf("dinara");
                        var cenaPrevoza = parseFloat(cenaTxt.substring(cena, dinara) + 0.0);
                        $("#cenaPrevoza").html(cenaPrevoza);
                        
                       

                        if ($("#cenaPrevoza").text() !== "") {
                            $("#ukupnaCena").html("Ukupno " + (parseInt($("#cena").text()) * parseInt($("#brojDana").val()) + parseInt($("#cenaPrevoza").text())) + " dinara");
                            
                        } else if ($("#cenaPrevoza").text() === "") {
                            $("#ukupnaCena").html("Ukupno " + (parseInt($("#cena").text()) * parseInt($("#brojDana").val())) + " dinara");
                            
                        }
                        if (parseInt($("#popust").text()) <= 0 ){
                            $("#popust2").html("Nemate popust");
                            var popust =parseInt($("#cena").text()) * parseInt($("#brojDana").val()) + parseInt($("#cenaPrevoza").text());
                            $("#cenaSaPopustom").html(parseInt(popust));
                            $("input[name='ukupnaCena']").val($("#cenaSaPopustom").text());
                            }
                        if (parseInt($("#popust").text()) > 0 && parseInt($("#popust").text()) <= 3 ){
                            $("#popust2").html("ostvariliste 10% popusta");
                            var cena = parseInt($("#cena").text()) * parseInt($("#brojDana").val())+ parseInt($("#cenaPrevoza").text());
                            var popust = cena - (cena * 0.1);
                            $("#cenaSaPopustom").html(parseInt(popust));
                            $("input[name='ukupnaCena']").val($("#cenaSaPopustom").text());
                            }
                        if (parseInt($("#popust").text()) > 3 && parseInt($("#popust").text()) <= 7 ){
                            $("#popust2").html("ostvariliste 20% popusta");
                            var cena = parseInt($("#cena").text()) * parseInt($("#brojDana").val())+ parseInt($("#cenaPrevoza").text());
                            var popust = cena - (cena * 0.2);
                            $("#cenaSaPopustom").html(parseInt(popust));
                            $("input[name='ukupnaCena']").val($("#cenaSaPopustom").text());
                            }
                        if (parseInt($("#popust").text()) > 7){
                            $("#popust2").html("ostvariliste 30% popusta");
                            var cena = parseInt($("#cena").text()) * parseInt($("#brojDana").val())+ parseInt($("#cenaPrevoza").text());
                            var popust = cena - (cena * 0.3);
                            $("#cenaSaPopustom").html(parseInt(popust));
                            $("input[name='ukupnaCena']").val($("#cenaSaPopustom").text());
                            }    


                        if ($("#brojLjudi").val() !== "" && $("#brojSobe").val() !== "" && $("#greska").text() === "" && $("#greskaDatum").text().trim() === "") {
                            $('#rezervisi').removeAttr("disabled");
                            $("input[name='datumDo']").val(formatedDate);

                        } else
                            $('#rezervisi').attr("disabled", "disabled");
                    });
                });

            });

        });

    }
    ;

});


