var posicion=0; // valida la posicion de cada array
var turno = 1; // servira para validar los turnos durante el juego - BULEANO
var j1 = "X"; //Declaro la variable del jugador 1
var j2 = "O"; //Declaro la variable del jugador 2
var contador = 0; // Hago un contador que va a ir alternando los turnos
var columna = [[],[],[]];
var k=1;
var puedeSeguir = true;//Esto va a ver si se puede seguir jugando o no, ya que si hay una combinación ganadora no va a permitir que se siga jugando.
var todasOcupadas = true;//


//Esto es para hacer que se muestere la tabla por JavaScript
function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];
  
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i <= 2; i++) {
  // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
    hilera.setAttribute("class","homie")
  
    for (var j = 0; j < 3; j++) {
  // Crea un elemento <td> y un nodo de texto, haz que el nodo de texto sea el contenido de <td>, ubica el elemento <td> al final de la hilera de la tabla
      var celda = document.createElement("td");  
      celda.setAttribute("onclick","turnos('zelda"+k+"')");
      celda.setAttribute("id","zelda"+k);
      k++; 
      hilera.appendChild(celda);
  }
  
  // agrega la hilera al final de la tabla (al final del elemento tblbody)
   tblBody.appendChild(hilera);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
  tabla.setAttribute("align","center")
}

// Funcion que alterna los turnos y muestra las X e O
function turnos (a) {
  if(puedeSeguir == true){
    if(document.getElementById(a).innerHTML == ""){
      positions(a);//Se lo llama fuera de los otros if, porque pregunta si hay un lugar vacío para seguir jugando. Si lo hay va a llamar a la otra función sin importar de quién sea el turno. Ya se tiene el valor con la variable turno y qué se va a poner en el casillero que se haga click.
      if (turno === 1) {
        document.getElementById(a).innerHTML= j1;
        document.getElementById("datos").innerHTML = "Turno del Jugador 1";
        verificarGanador();
        turno = 0;
      }
      else {
        document.getElementById(a).innerHTML= j2;
        document.getElementById("datos").innerHTML = "Turno del jugador 2";
        verificarGanador();
        turno = 1;
      }
    }
  }
}

function positions(a) {//El parametro a tiene los Id de las celdas. Osea que si a es = al Id de la celda que se está clickeando, la "X" o la "O" que se va a poner en ese lugar también la va a tener la matriz. Al tener este dato la matriz después va a poder verificar quién ganó.
  if(a == "zelda1"){
    columna[0][0] = turno;
  } else if (a == "zelda2") {
    columna[0][1] = turno;
  } else if (a == "zelda3") {
    columna[0][2] = turno;
  } else if (a == "zelda4") {
    columna[1][0] = turno;
  } else if (a == "zelda5") {
    columna[1][1] = turno;
  } else if (a == "zelda6") {
    columna[1][2] = turno;
  } else if (a == "zelda7") {
    columna[2][0] = turno;
  } else if (a == "zelda8") {
    columna[2][1] = turno;
  } else if (a == "zelda9") {
    columna[2][2] = turno;
  }
}

//Funcion que verifica si alguien gano.
function verificarGanador(){
//Cada if verifica todas las posiciones existentes en el juego.
   if (columna[0][0] == turno && columna [0][1] == turno && columna [0][2] == turno){
     
     document.getElementById("zelda1").style.color = "red";
     document.getElementById("zelda2").style.color = "red";
     document.getElementById("zelda3").style.color = "red";
     puedeSeguir = false;

    } else if (columna[1][0] === turno && columna[1][1] === turno && columna[1][2] === turno){
      
     document.getElementById("zelda4").style.color = "red";
     document.getElementById("zelda5").style.color = "red";
     document.getElementById("zelda6").style.color = "red";
     puedeSeguir = false;

    } else if (columna[2][0] === turno && columna[2][1] === turno && columna[2][2] === turno){
      
     document.getElementById("zelda7").style.color = "red";
     document.getElementById("zelda8").style.color = "red";
     document.getElementById("zelda9").style.color = "red";
     puedeSeguir = false;

    } else if (columna[0][0] === turno && columna[1][0] === turno && columna[2][0] === turno){

     document.getElementById("zelda1").style.color = "red";
     document.getElementById("zelda4").style.color = "red";
     document.getElementById("zelda7").style.color = "red";
     puedeSeguir = false;

    } else if (columna[0][1] === turno && columna[1][1] === turno && columna[2][1] === turno){

     document.getElementById("zelda2").style.color = "red";
     document.getElementById("zelda5").style.color = "red";
     document.getElementById("zelda8").style.color = "red";
     puedeSeguir = false;

    } else if (columna[0][2] === turno && columna[1][2] === turno && columna[2][2] === turno){

     document.getElementById("zelda3").style.color = "red";
     document.getElementById("zelda6").style.color = "red";
     document.getElementById("zelda9").style.color = "red";
     puedeSeguir = false;

    } else if (columna[0][0] === turno && columna[1][1] === turno && columna[2][2] === turno){

     document.getElementById("zelda1").style.color = "red";
     document.getElementById("zelda5").style.color = "red";
     document.getElementById("zelda9").style.color = "red";
     puedeSeguir = false;

    } else if (columna[0][2] === turno && columna[1][1] === turno && columna[2][0] === turno){

     document.getElementById("zelda3").style.color = "red";
     document.getElementById("zelda5").style.color = "red";
     document.getElementById("zelda7").style.color = "red";
     puedeSeguir = false;

  }
  else{
    for (var i=1; i<=9; i++) {
      if (document.getElementById("zelda" + i).innerHTML==""){
        todasOcupadas=false;
      }
    }
    if (todasOcupadas==true){
      alert("Empataron, gg. Altos tontos xd");
    }
  }
}

function victoria() {
//va a determinar cual jugador gano dependiendo el turno. 
//poner un gif encima del tablero.  
}