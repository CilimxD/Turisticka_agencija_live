
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
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
    };
    //    setovanje aktivne klase za slider da radi

    if (window.location.href === "https://cilimxd.github.io/Turisticka_agencija_liveindex.html"
        || window.location.href === "https://cilimxd.github.io/Turisticka_agencija_live" ||
        window.location.href === "https://cilimxd.github.io/Turisticka_agencija_live/index.html#" ||
        window.location.href === "https://cilimxd.github.io/Turisticka_agencija_live/#") {
        var div = document.getElementById("grcka");
        div.classList.add("active");
    }
    var dugaciUrl = window.location.href;
    var upitnik = dugaciUrl.lastIndexOf("?");
    var URL = dugaciUrl.substring(0, upitnik);
    if (URL === "https://cilimxd.github.io/Turisticka_agencija_live/pages/mesta.html") {
        var nazivDrzave = dugaciUrl.lastIndexOf("=") + 1;
        var txt = "";
        var drzava = dugaciUrl.substring(nazivDrzave);
        var mesta = { Srbija: ["Kopaonik", "Ribarska banja", "Stara Planina", "Zdrelo banja"], Grcka: ["Krf", "Tasos", "Lefkada", "Zakintos"], Turska: ["Marmaris", "Antalija", "Bodrum", "Instambul"] };
        var slika = { Srbija: ["kopaonik1", "ribarska", "stara_planina1", "zdrelo_banja"], Grcka: ["krf", "tasos", "lefkada", "zakintos"], Turska: ["marmaris", "antalija", "bodrum", "instabul"] };
        var opis = { Srbija: ["Kopaonik (poznat i kao Srebrna planina) je najveći planinski masiv u Srbiji koji se pruža od severozapada ka jugoistoku dužinom od oko 75 km, dosežući u srednjem delu širinu od oko 40 km. Jedan njegov deo je zaštićena zona pod imenom nacionalni park Kopaonik u okviru koga postoji veći broj zaštićenih prirodnih celina, a na njemu se nalazi i najveći skijaški centar u Srbiji. Njegov najviši vrh je Pančićev vrh sa 2017 m nmv. na kome se nalazi mauzolej čuvenog srpskog prirodnjaka po kome je dobio ime, oko koga se nalazi baza vojske Srbije", "Ribarska Banja je naseljeno mesto grada Kruševca u Rasinskom okrugu. Prema popisu iz 2011. godine bilo je 189 stanovnika a 2002. bilo je 277 stanovnika (prema popisu iz 1991. bilo je 245 stanovnika).", "Stara planina, ili Balkan planina ili Ćiprovački Balkan ili po Turcima Kodža Balkan ili samo Balkan, pripada sistemu Balkanskih planina koje se pružaju od Crnog mora na istoku, pa sve do Vrške čuke na zapadu. Dužina ovog planinskog sistema iznosi 530 km. Najviša tačka Stare planine je vrh Botev (2376 m).Ova planina predstavlja deo prostranog planinskog venca koji se naziva Karpatsko – balkanski planinski luk. U Srbiji se nalazi samo njegov manji zapadni deo. Celu teritoriju Stare planine i njeno podgorje sastavlja Torlak a istočna polovina se naziva Visok (pre Visočki srez).", "Ždrelo je naselje u Srbiji u opštini Petrovac na Mlavi u Braničevskom okrugu. Prema popisu iz 2011. bilo je 618 stanovnika. Nedaleko od sela se nalaze ostaci tvrđave po kojoj je nazvano."], Grcka: ["Krf (grč. Κέρκυρα [Kérkyra] — Kerkira, antgrč. Κόρκυρα [Kórkyra] — Korkira), drugo po veličini, od sedam većih Jonskih ostrva, a ujedno i jedno od najlepših grčkih ostrva. Krf leži u Jonskom moru, koje je deo Sredozemnog mora, a sjeverno se spaja sa Jadranskim. Takvim položajem obezbjeđuje sebi mjesto najsjevernijeg značajnijeg ostrva Grčke.", "Tasos (grč. Θάσος [Thásos]) je grčko ostrvo koje se nalazi u sjevernim Egejima, tj. sjeveroistočnom dijelu Grčke. Ostrvo čini istoimeni okrug sastavljen od jedne opštine u okviru periferije Istočna Makedonija i Trakija. Glavno mesto na ostrvu i upravo središte okruga Tasos je gradić Limenas (Tasos)", "Lefkada (grč. Λευκάδα [Lefkáda]; antgrč. Λευκάς [Leukás — Leukas, moderno Lefkás — Lefkas]), je grčko ostrvo koje pripada grupi Jonskih ostrva. U upravnoj podeli grčke Lefkada je zajedno sa nekoliko manjih okolnih ostrva čini okrug Lefkadu. Najvažnije i najveće mesto je istoimeni grad Lefkada.", "Zakintos ili Zante (grč. Ζάκυνθος, eng. Zante, ital. Zacinto ), treće po veličini, od sedam većih jonskih ostrva, a ujedno i jedno od najlepših grčkih ostrva. Zakintos leži u južnom delu Jonskog mora, koje je deo Sredozemnog mora. Ostrvo sa nekoliko susednih malih ostrva čini prefekturu Zakintos, a glavno naselje na ostrvu, istoimeni grad Zakintos, je njeno upravno središte."], Turska: ["U Marmarisu vlada sredozemna klima, koju odlikuju topla i vlažna leta i hladne i kišne zime. Padavine su retke između maja i oktobra. Leta su topla i vlažna, a temperature može da dostigne preko 40 °C nekad u toku jula i avgusta. Oktobar je još uvek topao i svetao, mada sa kratkotrajnim pojavama kiše. Mnogi turisti žele da posete Marmaris početkom jeseni, naročito u septembru, jer temperature tada nisu visoke.", "Antalija (tur. Antalya, grč. Αττάλεια) je grad u Turskoj u vilajetu Antalija. Nalazi se na mediteranskoj obali. To je glavni grad plodne primorske ravnice na jugozapadu Male Azije. Danas je ovo područje zbog bogate i organizovane turističke ponude poznato kao „Turska rivijera“. Prema proceni iz 2010. u gradu je živelo 1.001.318 stanovnika.", "Bodrum (tur. Bodrum) je popularno tursko letovalište na obali Egejskog mora i luka u provinciji Mugla. U antičkoj Grčkoj je bio poznat kao Halikarnas (antgrč. Αλικαρνασσός), a u srednjem veku kao Petronium. Nalazi se na poluostrvu Bodrum, u blizini severozapadnog ulaza u zaliv Gekova, nasuprot grčkog ostrva Kos. Danas je poznati turistički i jahting centar. Nekadašnji Halikarnas je bio poznat po mauzoleju kralja Mauzola.", "Istanbul (tur. İstanbul [isˈtɑnbuɫ]), kroz istoriju poznat kao Vizantion, Konstantinopolj i Carigrad, najnaseljeniji je grad u Turskoj Republici i privredno, kulturno i istorijsko središte zemlje. Istanbul je transkontinentalni grad u Evroaziji, smješten na Bosforskom moreuzu (koji razdvaja Evropu i Aziju) između Mramornog i Crnog mora. Privredno i istorijsko središte leži u evropskom dijelu, dok na azijskoj strani živi oko trećine stanovništva grada."] };
        var duzina = mesta[drzava].length;
        txt1 = "<h1 class='naslov'>Ponuda" + " " + drzava + "</h1>"
        for (var i=0; duzina > i; i++) {
            txt += "<div class='row'" +
                "style='border: 3px solid black;box-shadow: 10px 10px 5px grey;position:relative;margin-top: 50px;background-color: #f0ead6'>" +
                "<div class='col-sm-4' style='padding: 5px ;'>" +
                "<img src='../img/" + slika[drzava][i] + ".jpg' width='100%' height='auto'>" +
                "</div>" +
                "<div class='col-sm-8'>" +
                "<p class='meni_desni_text'>" + mesta[drzava][i] + "</p>" +
                "<p class='opis' style='padding-bottom: 30px '>" + opis[drzava][i] + "</p>" +
                "</div>" +
                "<p><a href='arazmani.html?idDrzave=" + drzava + "&idMesta=" + mesta[drzava][i] + "' style='position: absolute;bottom:10px;right:10px;'" +
                "class='btn btn-primary' role='button'>Izaberi" + " " + mesta[drzava][i] + "</a></p></div>";
        }
        $("#proba").html(txt1 + txt);
    }
    if (URL === "https://cilimxd.github.io/Turisticka_agencija_live/pages/arazmani.html") {
        var txt = "";
        var nazivDrzave = dugaciUrl.indexOf("=");
        var and = dugaciUrl.indexOf("&");
        var drzava = dugaciUrl.substring(nazivDrzave + 1, and);
        var space;
        var drzavaMesto;
        var mestoNaziv;
        var x;
        if (dugaciUrl.indexOf("%") != -1) {
            var nazivMesta = dugaciUrl.lastIndexOf("=");
            space = dugaciUrl.indexOf("%");
            var mesto = dugaciUrl.substring(nazivMesta + 1, space);
            var mesto1 = dugaciUrl.substring(space + 3);
            drzavaMesto = drzava + mesto + mesto1;
            mestoNaziv = mesto + " " + mesto1;
            console.log("da");

        } else if (dugaciUrl.indexOf("%") == -1) {
            var nazivMesta = dugaciUrl.lastIndexOf("=");
            space = dugaciUrl.indexOf("%");
            var mesto = dugaciUrl.substring(nazivMesta + 1);
            drzavaMesto = drzava + mesto;
            mestoNaziv = mesto;
            console.log("ne");
        }
        console.log(drzavaMesto);
        console.log(mestoNaziv);
        var slika = { SrbijaKopaonik: ["putnik", "foka_spa"], SrbijaRibarskabanja: ["janus", "di_lusso"], Staraplanina: ["hotel_stara_planina", "hotel_ana_lux"], SrbijaZdrelobanja: ["mlavske_terme", "novapark"], GrckaKrf: ["perama", "platania"], GrckaTasos: ["koula", "dukas"], GrckaLefkada: ["vasilis", "cosmos"], GrckaZakintos: ["socrates", "mari"], TurskaMarmaris: ["amos", "sesin"], TurskaAntalija: ["galaxy", "miracle_resort"], TurskaBodrum: ["mandarin_resort", "royal_asarlik"], TurskaInstambul: ["sahinler"] };
        var smestaj = { SrbijaKopaonik: ["Putnik", "Foka Spa"], SrbijaRibarskabanja: ["Janus", "Di Lusso"], Staraplanina: ["Hotel Stara Planina", "Hotel Ana Lux"], SrbijaZdrelobanja: ["Mlavske Terme Ždrelo", "Novapark"], GrckaKrf: ["Perama", "Platania"], GrckaTasos: ["Vila Koula", "Vila Dukas"], GrckaLefkada: ["Vila Vasilis", "Vila Cosmos"], GrckaZakintos: ["Socrates vila", "Mari vila"], TurskaMarmaris: ["Amos Hotel", "Sesin Hotel"], TurskaAntalija: ["Galaxy Beach hotel", "Miracle Resort"], TurskaBodrum: ["Mandarin Resort", " Royal Asarlik Beach Hotel"], TurskaInstambul: ["Hotel Sahinler"] };
        var tipSmestaja = { SrbijaKopaonik: ["Hotel", "Apartman"], SrbijaRibarskabanja: ["Apartman", "Hotel"], Staraplanina: ["Hotel", "Hotel"], SrbijaZdrelobanja: ["Hotel", "Apartman"], GrckaKrf: ["Hotel", "Apartman"], GrckaTasos: ["Apartman", "Apartman"], GrckaLefkada: ["Apartman", "Apartman"], GrckaZakintos: ["Apartman", "Apartman"], TurskaMarmaris: ["Hotel", "Hotel"], TurskaAntalija: ["Hotel", "Hotel"], TurskaBodrum: ["Hotel", "Hotel"], TurskaInstambul: ["Hotel"] };
        var opis = { SrbijaKopaonik: ["Hotel Putnik je smešten na 1.650 metara nadmorske visine u Nacionalnom parku Kopaonik, na 15 minuta hoda od centra zimovališta i ski liftova. Nudi školu skijanja, uslugu iznajmljivanja ski opreme i ostavu za ski opremu.Sobe hotela Putnik Kopaonik imaju velike prozore sa panoramskim pogledom na Sunčanu dolinu. Sadrže TV sa satelitskim kanalima, sef za laptop i radni sto. U sobama je obezbeđen besplatan bežični internet.", "Jedan od najtraženijih objekata na destinaciji Kopaonik."], SrbijaRibarskabanja: ["Vila Janus se nalazi na svega 450 m od specijalne bolnice Ribarska Banja. Ovo je novoizgrađeni objekat sa restoranom otvorenog tipa.", "Vila Di Lusso je smeštaj hotelskog tipa na samo 300 metara od Specijane bolnice u Rbarskoj Banji."], Staraplanina: ["Hotel i spa Stara Planina nalazi se pored samog ski lifta, što omogućava direktan prilaz ski stazama. Otvoren je 2012. godine i raspolaže impresivnim velnes sadržajima, kao što su hidromasažne kade, teretana i bazen.", "Jedan od najtraženijih objekata na destinaciji Pirot."], SrbijaZdrelobanja: ["Hotel Mlavske Terme Ždrelo nalazi se u Ždrelu, a u ponudi ima raznovrsne sadržaje za sportove na vodi. Ovaj hotel sa 3 zvezdice poseduje besplatan bežični internet, kazino i besplatne bicikle.", "Objekat Novapark nalazi se u mestu Šetonje, a u ponudi ima smeštajne jedinice sa besplatnim WiFi internetom."], GrckaKrf: ["Hotel Perama nalazi se u mestu Perama, na samoj plaži. Udaljen je 7 km od centra grada Krfa, 6 km od aerodroma i 4 km od malog ribarskog mesta Benitses.", "Nalazi se na oko 5-7 minuta hoda od plaže i oko 600 metara od centra Dasije."], GrckaTasos: ["Vila Koula se nalazi u centru letovališta Potos, na oko 150 metara udaljenosti od plaže.Vila Koula je odlično pozicionirana u mirnijem delu centra mesta.", "Nalazi se na oko 300 metara od mora i na oko 200 metara od centra Potosa.Vila Dukas se nalazi u mirnom delu Potosa, okružena zelenilom i smeštena u prostranom dvorištu sa privatnim parkingom i prostorom za igru dece."], GrckaLefkada: ["Vila Vasilis se nalazi na oko 300m od centra, na oko 70m od mora, i na oko 300m od plaže.", "Vila Cosmos se nalazi u centru Nidrija i na oko 100m od plaže."], GrckaZakintos: ["Vila Socrates se nalazi u mirnom delu Laganasa, na oko 100m udaljenosti od duge peščane plaže i oko 350m od glavne ulice.", "Vila Mari se nalazi u mirnom delu Laganasa, na oko 50 metara udaljenosti od duge peščane plaže i oko 200m od glavne ulice."], TurskaMarmaris: ["Hotel Amos - od plaže ga deli šetalište, 3 km od centra grada, 100 km od aerodroma Dalaman.", "Od centra Marmarisa je udaljen 1 km dok je od privatne plaže daleko 100 m. Sagrađen je 1989. godine, renoviran 2014. godine i prostire se na površini od 2150 m2.Od centra Marmarisa je udaljen 1 km dok je od privatne plaže daleko 100 m. Sagrađen je 1989. godine, renoviran 2014. godine i prostire se na površini od 2150 m2."], TurskaAntalija: ["Galaxy Beach Hotel se nalazi u regiji Mahmutlar. Udaljen je cca. 14 km od centra Alanje i cca. 135 km od aerodroma u Antaliji.", "Miracle Resort Hotel se nalazi u regiji Lara. Udaljen je oko 11 km od centra Antalije i oko 12 km od od aerodroma Antalija."], TurskaBodrum: ["Udaljen je 200 m od plaže i Bodruma, a od aerodroma 35 km.", "Hotel se nalazi 200 m od centra mesta Gumbet, 3 km od centra grada Bodrum, 35 km od aerodroma."], TurskaInstambul: ["Hotel SahinlerHotel se nalazi u starom delu grada (oblast Laleli) i na oko 2-3 kim od svih većih znamenitosti. Hotel ima restoran i bar. Svaka soba poseduje kupatilo (tuš/WC), TV, telefon, klima uređaj, minibar."] };
        var brZvezdica = { SrbijaKopaonik: [3, 4], SrbijaRibarskabanja: [0, 2], Staraplanina: [4, 4], SrbijaZdrelobanja: [3, 0], GrckaKrf: [3, 0], GrckaTasos: [0, 0], GrckaLefkada: [0, 0], GrckaZakintos: [0, 0], TurskaMarmaris: [3, 4], TurskaAntalija: [4, 5], TurskaBodrum: [5, 5], TurskaInstambul: [0] };
        var bazen = { SrbijaKopaonik: ["da", "da"], SrbijaRibarskabanja: ["ne", "ne"], Staraplanina: ["da", "da"], SrbijaZdrelobanja: ["da", "ne"], GrckaKrf: ["da", "ne"], GrckaTasos: ["ne", "ne"], GrckaLefkada: ["ne", "ne"], GrckaZakintos: ["ne", "ne"], TurskaMarmaris: ["da", "da"], TurskaAntalija: ["da", "da"], TurskaBodrum: ["da", "da"], TurskaInstambul: ["da"] };
        var tipSobe = { SrbijaKopaonik: ["soba", "duplex apartman"], SrbijaRibarskabanja: ["apartman", "soba"], Staraplanina: ["soba", "soba"], SrbijaZdrelobanja: ["soba", "apartman"], GrckaKrf: ["soba", "apartman"], GrckaTasos: ["apartman", "duplex apartman"], GrckaLefkada: ["apartman", "apartman"], GrckaZakintos: ["apartman", "apartman"], TurskaMarmaris: ["soba", "soba"], TurskaAntalija: ["soba", "soba"], TurskaBodrum: ["soba", "soba"], TurskaInstambul: ["soba"] };
        var brSobe = { SrbijaKopaonik: [2, 2], SrbijaRibarskabanja: [2, 2], Staraplanina: [2, 2], SrbijaZdrelobanja: [2, 2], GrckaKrf: [2, 2], GrckaTasos: [2, 2], GrckaLefkada: [2, 2], GrckaZakintos: [2, 2], TurskaMarmaris: [2, 2], TurskaAntalija: [2, 2], TurskaBodrum: [2, 2], TurskaInstambul: [2] };
        var redniBrojSobe = { SrbijaKopaonik: [1, 2], SrbijaRibarskabanja: [1, 2], Staraplanina: [1, 2], SrbijaZdrelobanja: [1, 2], GrckaKrf: [1, 2], GrckaTasos: [1, 2], GrckaLefkada: [1, 2], GrckaZakintos: [1, 2], TurskaMarmaris: [1, 2], TurskaAntalija: [1, 2], TurskaBodrum: [1, 2], TurskaInstambul: [1, 2] };
        var CenaSobebroj1 = { SrbijaKopaonik: [1350, 900], SrbijaRibarskabanja: [800, 850], Staraplanina: [1375, 1290], SrbijaZdrelobanja: [1390, 1450], GrckaKrf: [3000, 2850], GrckaTasos: [2500, 2600], GrckaLefkada: [2600, 2750], GrckaZakintos: [2780, 2660], TurskaMarmaris: [4000, 4250], TurskaAntalija: [4800, 4960], TurskaBodrum: [8000, 8560], TurskaInstambul: [5000, 5250] };
        var CenaSobebroj2 = { SrbijaKopaonik: [1250, 950], SrbijaRibarskabanja: [1400, 1450], Staraplanina: [1150, 1230], SrbijaZdrelobanja: [1230, 1290], GrckaKrf: [2000, 2120], GrckaTasos: [2990, 2800], GrckaLefkada: [2450, 2550], GrckaZakintos: [2780, 2650], TurskaMarmaris: [4500, 4680], TurskaAntalija: [7000, 7500], TurskaBodrum: [8800, 8600] };
        var duzina = tipSmestaja[drzavaMesto].length;
        var brojsobe = redniBrojSobe[drzavaMesto].length;
        var sobeObe = "";
        var zvezdice = "";
        console.log(smestaj[drzavaMesto][0])
        console.log(CenaSobebroj2[drzavaMesto][0]);
        function proveraDrugu(i) {
            if (typeof CenaSobebroj2[drzavaMesto] == 'undefined') {
                console.log("Undefined")
                x="";
            }
            if (typeof CenaSobebroj2[drzavaMesto] != 'undefined') {
                x = CenaSobebroj2[drzavaMesto][i];
            }
        }
        for (var j = 0; j < brojsobe; j++) {
            sobeObe += "<th>Soba broj " + redniBrojSobe[drzavaMesto][j] + "</th>" +
            "<th>Soba broj " + redniBrojSobe[drzavaMesto][j] + "</th>"
            console.log(sobeObe)
        }
        for (var i; duzina > i; i++) {
            for (var j = 0; j < brZvezdica[drzavaMesto][i]; j++) {
                zvezdice += "<span class='glyphicon glyphicon-star'></span>";
                console.log(zvezdice)
            }
            proveraDrugu(i);
            txt +=
                "<div class='container'>" +
                    "<h1 class='naslov' style='font-size: 80px'>" + mestoNaziv + " &#160" + tipSmestaja[drzavaMesto][i] + "</h1>" +
                    "<div class='row' style='border: 3px solid black;box-shadow: 10px 10px 5px grey;position:relative;margin-top: 50px;background-color: #f0ead6;'>" +
                        "<div class='col-sm-4' style='padding: 5px ;'>" +
                            "<img src='../img/" + slika[drzavaMesto][i] + ".jpg' width='100%'>" +
                        "</div>" +
                        "<div class='col-sm-8'>" +
                            "Ime smestaja: " + smestaj[drzavaMesto][i] + " <br />" +
                            zvezdice +
                            "<div>" +
                                opis[drzavaMesto][i] +
                            "</div>" +
                        "</div>" +
                        "<table style='width:100%; margin: 8px'>" +
                            "<tr>" +
                                "<th>Bazen</th>" +
                                "<th>Tip Sobe</th>" +
                                "<th>Broj sobe u smestaju</th>" +
                                 sobeObe +
                            "</tr>" +
                            "<tr>" +
                                "<td>" + bazen[drzavaMesto][i] + "</td>" +
                                "<td>" + tipSobe[drzavaMesto][i] + "</td>" +
                                "<td>" + brSobe[drzavaMesto][i] + "</td>" +
                                "<td>Cena po danu " + CenaSobebroj1[drzavaMesto][i] + " din</td>" +
                                "<td>Cena po danu " + x + " din</td>" + 
                            "</tr>" +
                        "</table>" +
                    "</div>" +
                "</div>"
            zvezdice = "";
            console.log(txt)
            console.log(x)
            
            console.log(zvezdice);
        }
        $("#minime").html(txt);
    }
});


