var posicion=0; // valida la posicion de cada array
var turno = 1; // servira para validar los turnos durante el juego - BULEANO
var j1 = "X"; //Declaro la variable del jugador 1
var j2 = "O"; //Declaro la variable del jugador 2
var contador = 0; // Hago un contador que va a ir alternando los turnos
var columna = [[1,2,3],[4,5,6],[7,8,9]];
var k=1;
var puedeSeguir = true;


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
  if(document.getElementById(a).innerHTML == ""){
    if (turno === 1) {
      turno = 0;
      document.getElementById(a).innerHTML= j1;
      verificarGanador();
      document.getElementById("datos").innerHTML = "Turno del Jugador 1";
    }
    else {
      turno = 1;
      document.getElementById(a).innerHTML= j2;
      verificarGanador();
      document.getElementById("datos").innerHTML = "Turno del jugador 2";
    }
  }
}

function empate(){
 /* document.getElementById("datos").innerHTML= "Nadie ganó";
 */
  
}

//Funcion que verifica si alguien gano
function verificarGanador(){
   turno == 1 ? "O":"X"//cada if verifica todas las posiciones existentes en el juego
   if (columna[0][0] === turno && columna [0][1] === turno && columna [0][2] === turno){
     
     pueseSeguir = false;
     document.getElementsById("zelda1").style.color = "red";
     document.getElementsById("zelda2").style.color = "red";
     document.getElementsById("zelda3").style.color = "red";
     return false;
    } else if (columna[1][0] === turno && columna[1][1] === turno && columna[1][2] === turno){
      

    } else if (columna[2][0] === turno && columna[2][1] === turno && columna[2][2] === turno){
      

    } else if (columna[0][0] === turno && columna[1][0] === turno && columna[2][0] === turno){
      

    } else if (columna[0][1] === turno && columna[1][1] === turno && columna[2][1] === turno){
      

    } else if (columna[0][2] === turno && columna[1][2] === turno && columna[2][2] === turno){
      

    } else if (columna[0][0] === turno && columna[1][1] === turno && columna[2][2] === turno){
      

    } else if (columna[0][2] === turno && columna[1][1] === turno && columna[2][0] === turno){
      
     
  }
  else{
    
      empate()}
}


function victoria() {
//va a pintar la hilera ganadora.
//va a determinar cual jugador gano dependiendo el turno. 
//poner un gif encima del tablero.  
}