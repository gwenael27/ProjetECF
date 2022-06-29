function moove(){
    document.getElementById('zeub').style.display = 'none';
    document.getElementById('comm').style.display = 'flex';
}

function video(){
    document.getElementById('image1').style.display = 'none'; 
    document.getElementById('videohide').style.display = 'block';
}

var nombreClics = 5;

function comptage() {
    nombreClics++;
    document.getElementById("nombreClics").textContent = nombreClics;
  }
  
var ale1 = 94450;
var ale2 = 11000;
var ale3 = 1500;
  function aleratoire(){
    ale1 = Math.floor(Math.random() * 99999)
    ale2 = Math.floor(Math.random() * 99999)
    ale3 = Math.floor(Math.random() * 9999)
    document.getElementById("al1").textContent = ale1;
    document.getElementById("al2").textContent = ale2;
    document.getElementById("al3").textContent = ale3;
  }

  var mail = document.getElementById("mail").value

  function envoi(){
    console.log(mail);
    if(mail == ''){
        console.log(mail);
    }else if (!mail ==''){
        document.getElementById('hidemail').style.display = 'none'; 
    }

  }