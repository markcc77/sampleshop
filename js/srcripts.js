
var a = document.getElementById("welcome"),
  b = document.getElementsByClassName("continue")[0];

window.addEventListener("DOMContentLoaded", c()),
  (b.onclick = function () {
    (document.getElementsByClassName("content-1")[0].style.display = "none"),
      (document.getElementsByClassName("choices")[0].style.display = "block");
  });



function nextQuestion(a) {
  var nedgahio = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var ngetwday = weekday[nedgahio.getDay()];
  var b = document.getElementById("q"),
    c = document.getElementById("answers-1"),
    d = document.getElementById("answers-2"),
    e = document.getElementById("answers-3"),
    f = document.getElementById("answers-4"),
    g = document.getElementById("answers-5"),
    gnextg = document.getElementById("answers-6"),
    gnextg1 = document.getElementById("answers-7"),
    gnextg2 = document.getElementById("answers-8"),
    h = document.getElementById("message-page-modalhead");
    bm = document.getElementById("message-page-modalbody-complete");
    j = document.getElementById("message-page-modalbody-load");
    k = document.getElementById("btn-footer-hide");
    pv = document.getElementById("product-review");
    pvn = document.getElementById("product-review-none");
  document.getElementsByClassName("loading"), new Date();
  switch (a) {
    case 2:
      (b.innerHTML = "<span>Question 2 out of 8:</span><br/><br/> <b>Overall, how satisfied are you with your shopping experiences with us?</b>"), (c.style.display = "none"), (d.style.display = "block");
      break;
    case 3:
      (b.innerHTML = "<span>Question 3 out of 8:</span><br/><br/> <b>How likely are you to recommend us to a friend or family member?</b>"), (d.style.display = "none"), (e.style.display = "block");
      break;
    case 4:
      (b.innerHTML = "<span>Question 4 out of 8:</span><br/><br/> <b>How satisfied are you with our pick-up/checkout service?</b>"), (e.style.display = "none"), (f.style.display = "block");
      break;
    case 5:
      (b.innerHTML = "<span>Question 5 out of 8:</span><br/><br/> <b>On your most recent shopping trip to our store, was everything you were looking for available and in stock?</b>"), (f.style.display = "none"), (g.style.display = "block");
      break;
    case 6:
      (b.innerHTML = "<span>Question 6 out of 8:</span><br/><br/> <b>How helpful would you rate our store associates?</b>"), (g.style.display = "none"), (gnextg.style.display = "block");
      break;
    case 7:
      (b.innerHTML = "<span>Question 7 out of 8:</span><br/><br/> <b>Have you ever participated in our survey rewards program?</b>"), (gnextg.style.display = "none"), (gnextg1.style.display = "block");
      break;
    case 8:
      (b.innerHTML = "<span>Question 8 out of 8:</span><br/><br/> <b>Would you like to receive notifications about sales and discounts?</b>"), (gnextg1.style.display = "none"), (gnextg2.style.display = "block");
      break;
    case 9:
      (document.getElementsByClassName("question")[0].style.display = "none"),
        (document.getElementsByClassName("choices")[0].style.display = "none"),
        (document.getElementsByClassName("hr-page")[0].style.display = "none"),
        (document.getElementsByClassName("comment-page")[0].style.display = "none"),
        (document.getElementsByClassName("footer")[0].style.display = "none"),
        (h.className += " load"),
        (pv.className += " hidden"),
        (pvn.className += " ext-padd"),
        (h.innerHTML = "<center>Please wait while we process your answers...</center>"),
        $('#staticBackdropLoading').modal('show');
      var o = document.querySelector(".validate");
      (o.className = "validate"),
        (document.querySelector("#load_img1").style.display = "inline"),
        (document.querySelector("#load_text1").style.display = "inline"),
        (document.querySelector("#load_text2").style.display = "none"),
        (document.querySelector("#load_text3").style.display = "none"),
        (document.querySelector("#load_text4").style.display = "none"),
        startLoad(),
        setTimeout(function () {
          (document.querySelector("#load_img1").style.display = "none"),
            (document.querySelector("#load_text1").style.display = "none"),
            (document.querySelector("#load_check1").style.display = "inline"),
            (document.querySelector("#load_done1").style.display = "inline"),
            (document.querySelector("#load_img2").style.display = "inline"),
            (document.querySelector("#load_text2").style.display = "inline");
        }, 2000),
        setTimeout(function () {
          (document.querySelector("#load_img2").style.display = "none"),
            (document.querySelector("#load_text2").style.display = "none"),
            (document.querySelector("#load_check2").style.display = "inline"),
            (document.querySelector("#load_done2").style.display = "inline"),
            (document.querySelector("#load_img3").style.display = "inline"),
            (document.querySelector("#load_text3").style.display = "inline");
        }, 4500),
        setTimeout(function () {
          (document.querySelector("#load_img3").style.display = "none"),
            (document.querySelector("#load_text3").style.display = "none"),
            (document.querySelector("#load_check3").style.display = "inline"),
            (document.querySelector("#load_done3").style.display = "inline"),
            (document.querySelector("#load_text4").style.display = "inline");
        }, 6500),
        setTimeout(function () {
            (j.className = "hidden"),
            (h.innerHTML="Thank you for completing the survey!"),
            (k.innerHTML="<button type='button' class='btn btn-primary' data-dismiss='modal'>Proceed</button>"),
            (bm.innerHTML="<p style='color:black; font-size:16px;'>Because you helped provide extremely valuable consumer data, you may now choose some of the following exclusive rewards.<br/><br/>Please note that if you leave this page without claiming your reward, we have no choice but to give another visitor a chance to participate in our rewards program.</p>"),
            (document.getElementsByClassName("reward-page")[0].style.display = "block"),
            (document.getElementsByClassName("hr-page")[0].style.display = "none"),
            (document.getElementsByClassName("comment-page")[0].style.display = "block"),
            (document.getElementsByClassName("footer")[0].style.display = "block");
        }, 7e3);
  }
}



function hidpopu() {
  document.getElementById("1557490412130").style.display = "none";
  document.getElementById("jquery-msgbox").style.display = "none";
  socle();
}


function exit5minslayer(urlg, txtg, feeg) {
  $('#staticBackdropClaim').modal('show');
  document.getElementById("innertxtg").innerHTML = "Congratulations! We have reserved <b>(1) " + txtg + "</b> exclusively for you.";
  document.getElementById("akelaproname").innerHTML = txtg;
  document.getElementById("shippg").innerHTML = feeg;
  document.getElementById("externalurlg").href = urlg;
}


function closeexitlayer() {
  document.getElementById("exitlayerg").style.display = "none";
  document.getElementById("exitlayerbox").style.display = "none";
}



function drawszlider(a, b) {
  var c = Math.round((100 * b) / a);
  (document.getElementById("szliderbar").style.width = c + "%"),
    (document.getElementById("szazalek").innerHTML = c + "%"),
    (holvanszlider = b),
    (t = setTimeout("drawszlider(100, slidewhere);slidewhere = holvanszlider + 1; if (slidewhere > 100) {slidewhere = 100;}", 62));
}

function startLoad() {
  setTimeout(function () {
    $("#progress_bar").css("width", "30%"), setTimeout(function () {
      $("#progress_bar").css("width", "65%"), setTimeout(function () {
        $("#progress_bar").css("width", "100%"), setTimeout(function () {
          // $(".loading-1").hide(), $(".verify-page").show().addClass('bounce animated');
        }, 500)
      }, 2000)
    }, 2500)
  }, 2000)
}

function selectReward(a, b, c) {
  window.open(a);
}


function c() {
  document.getElementsByClassName("choices")[0].style.display = "none";
}




for (var comments = document.querySelectorAll(".comment"), i = 1; i <= comments.length; i++)
  (mydate = new Date()),
    i >= 3 && i <= 4 ? (3 == i ? mydate.setDate(mydate.getDate() - i) : mydate.setDate(mydate.getDate() - (i - 1))) : i > 4 ? mydate.setDate(mydate.getDate() - i) : mydate.setDate(mydate.getDate() - (i - 1)),
    (year = mydate.getYear()),
    year < 1e3 && (year += 1900),
    (day = mydate.getDay()),
    (month = mydate.getMonth()),
    (daym = mydate.getDate()),
    daym < 10 && (daym = daym),
    (document.getElementsByClassName("f" + i + "-date")[0].innerHTML = months[month] + " " + daym + ", " + year + " at " + time[i - 1]);
var slidewhere = 0,
  holvanszlider = 0;




window.onload = function () {
  var fiveMinutes = 30 * 13,
    display = document.querySelector('#time');
  startTimer(fiveMinutes, display);

  var urlParams = new URLSearchParams(window.location.search);
  var encodedValue = urlParams.get('encoded_value');
  var sub1 = urlParams.get('sub1');
  var sub2 = urlParams.get('sub2');
  var sub3 = urlParams.get('sub3');
  var sub4 = urlParams.get('sub4');
  var sub5 = urlParams.get('sub5');
  document.getElementById('button1').href = "https://www.megatr4ffic.com/" + encodedValue + "/94GX8TZ/?sub1=" + sub1 + "&sub2=" + sub2 + "&sub3=" + sub3 + "&sub4=" + sub4 + "&sub5=" + sub5;
} 
