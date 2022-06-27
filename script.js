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
  