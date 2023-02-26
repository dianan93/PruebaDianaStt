/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
console.log("Diana");

function visualizaPunto(opc) {
    //alert(opc);
    div = document.getElementById('punto_ejecucion' + opc);
    div.style.display = '';
}
function calcularAnio() {
    var anio_entrada = document.getElementById("anio_validar").value;
    if (((anio_entrada % 4 == 0) && (anio_entrada % 100 != 0)) || (anio_entrada % 400 == 0)) {
        document.getElementById('respuesta2').value = anio_entrada + ' Es bisiesto. ';
    } else {
        document.getElementById('respuesta2').value = anio_entrada + ' No es bisiesto ';
    }
}
function validarTabla() {
    var filas = document.getElementById("filas").value;
    var columnas = document.getElementById("columnas").value;
    var div3 = document.querySelector("#respuesta3");

    console.log(filas);
    console.log(columnas);
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < filas; i++) {
        // Crea un elemento <tr> 
        var hilera = document.createElement("tr");

        for (var j = 0; j < columnas; j++) {
            // Crea un elemento <td> dentro del <tr> anterior
            var celda = document.createElement("td");
            var textoCel = document.createTextNode(i + ", " + j);
            celda.appendChild(textoCel);
            hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    div3.appendChild(tabla);
    tabla.setAttribute("border", "2");
}

function crearArreglo(opc) {

    if (opc == 1) {
        numeros = Array.from({length: 20}, () => Math.floor(Math.random() * 100));
        document.getElementById('respuestatext4').value = numeros;
    } else {

        for (let i = 0; i < numeros.length - 1; i++) {

            for (let j = 0; j < numeros.length - i - 1; j++) {
                if (numeros[j] > numeros[j + 1]) {
                    [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
                }
            }
        }
        document.getElementById('respuestaTextOrg').value = numeros;
    }
}

function crearAleatorioLetras(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const charactersLength = characters.length;
        let result= [];
        for (let i = 0; i < 10; i++) {
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));            
        }
    return result;    
}

function crearArreglos(opc) {
    if (opc == 1) {
        var arreglo1 = crearAleatorioLetras();
        var arreglo2 = crearAleatorioLetras();
        document.getElementById('respuesta5_1').value = arreglo1;
        document.getElementById('respuesta5_2').value = arreglo2;
        
        let union = [arreglo1, arreglo2];
        let interseccion = arreglo1.filter(x => arreglo2.indexOf(x) !== -1);
        let diferencia = arreglo1.filter(x => !arreglo2.includes(x));
        let diferencia_simetrica = arreglo1.filter(x => !arreglo2.includes(x)).concat(arreglo2.filter(x => !arreglo1.includes(x)));
        
        document.getElementById('union').value = union;
        document.getElementById('interseccion').value = interseccion;
        document.getElementById('diferencia').value = diferencia;
        document.getElementById('diferencia_simetrica').value = diferencia_simetrica;        
    } 
}


