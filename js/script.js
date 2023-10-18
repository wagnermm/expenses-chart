var objectJson = [
    { "day": "mon",
      "amount": 17.45
    },
    { "day": "tue",
      "amount": 34.91
    },
    { "day": "wed",
      "amount": 52.36
    },
    { "day": "thu",
      "amount": 31.07
    },
    { "day": "fri",
      "amount": 23.39
    },
    { "day": "sat",
      "amount": 43.28
    },
    { "day": "sun",
      "amount": 25.48
    }
];

var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
var wed = document.getElementById('wedsday');
var thu = document.getElementById('thursday');
var fri = document.getElementById('friday');
var sat = document.getElementById('saturday');
var sun = document.getElementById('sunday');
var responseMon = document.getElementById('responseMon');
var responseTue = document.getElementById('responseTue');
var responseWed = document.getElementById('responseWed');
var responseThu = document.getElementById('responseThu');
var responseFri = document.getElementById('responseFri');
var responseSat = document.getElementById('responseSat');
var responseSun = document.getElementById('responseSun');

mon.addEventListener('mouseenter', function() {
    responseMon.innerHTML = "$" + objectJson[0]["amount"];
    mon.style.opacity="80%"
    responseMon.style.width="50px";
    responseMon.style.height="30px";
});

mon.addEventListener('mouseout', function() {
    responseMon.innerHTML = "";
    mon.style.opacity="100%"
    responseMon.style.width="0";
    responseMon.style.height="0";
});

tue.addEventListener('mouseenter', function() {
    responseTue.innerHTML = "$" + objectJson[1]["amount"];
    tue.style.opacity="80%";
    responseTue.style.width="50px";
    responseTue.style.height="30px";
});

tue.addEventListener('mouseout', function() {
    responseTue.innerHTML = "";
    tue.style.opacity="100%";
    responseTue.style.width="0";
    responseTue.style.height="0";
});

wed.addEventListener('mouseenter', function() {
    responseWed.innerHTML = "$" + objectJson[2]["amount"];
    wed.style.opacity="80%";
    responseWed.style.width="50px";
    responseWed.style.height="30px";
});

wed.addEventListener('mouseout', function() {
    responseWed.innerHTML = "";
    wed.style.opacity="100%";
    responseWed.style.width="0";
    responseWed.style.height="0";
});

thu.addEventListener('mouseenter', function() {
    responseThu.innerHTML = "$" + objectJson[3]["amount"];
    thu.style.opacity="80%";
    responseThu.style.width="50px";
    responseThu.style.height="30px";
});

thu.addEventListener('mouseout', function() {
  responseThu.innerHTML = "";
  thu.style.opacity="100%";
  responseThu.style.width="0";
  responseThu.style.height="0";
});

fri.addEventListener('mouseenter', function() {
  responseFri.innerHTML = "$" + objectJson[4]["amount"];
  fri.style.opacity="80%"
  responseFri.style.width="50px";
  responseFri.style.height="30px";
});

fri.addEventListener('mouseout', function() {
  responseFri.innerHTML = "";
  fri.style.opacity="100%";
  responseFri.style.width="0";
  responseFri.style.height="0";
});

sat.addEventListener('mouseenter', function() {
  responseSat.innerHTML = "$" + objectJson[5]["amount"];
  sat.style.opacity="80%"
  responseSat.style.width="50px";
  responseSat.style.height="30px";
});

sat.addEventListener('mouseout', function() {
  responseSat.innerHTML = "";
  sat.style.opacity="100%";
  responseSat.style.width="0";
  responseSat.style.height="0";
});

sun.addEventListener('mouseenter', function() {
  responseSun.innerHTML = "$" + objectJson[6]["amount"];
  sun.style.opacity="80%"
  responseSun.style.width="50px";
  responseSun.style.height="30px";
});

sun.addEventListener('mouseout', function() {
  responseSun.innerHTML = "";
  sun.style.opacity="100%";
  responseSun.style.width="0";
  responseSun.style.height="0";
});