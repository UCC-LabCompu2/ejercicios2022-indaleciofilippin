/**
 * Conversion de Unidades de metros, pies, yardas y pulgadas
 * @method conversionUnidades
 * @param {String} id - ID de los inputs del formulario
 * @param {Number} valor - Valor de los inputs del formulario
 */

function conversionUnidades(id, valor) {
    let metro, pie, pulgada, yarda;

    if (valor.includes(',')) {
        valor = valor.replace(',', '.');
    }

    if (isNaN(valor)) {
        alert("Ingrese un numero");
        metro = "";
        pie = "";
        pulgada = "";
        yarda = "";

    } else if (id === "metro") {
        metro = valor;
        pulgada = valor * 39.3701;
        yarda = valor * 1.09361;
        pie = valor * 3.28084;

    } else if (id === "pulgada") {
        pulgada = valor;
        metro = valor * 0.0254;
        yarda = valor * 0.0277778;
        pie = valor * 0.0833333;

    } else if (id === "yarda") {
        yarda = valor;
        metro = valor * 0.9144;
        pulgada = valor * 36;
        pie = valor * 3;

    } else if (id === "pie") {
        pie = valor;
        yarda = valor * 0.333333;
        metro = valor * 0.3048;
        pulgada = valor * 12;

    }

    document.conversorUnidades.unid_metro.value = Math.round(metro * 100) / 100;
    document.conversorUnidades.unid_pulgada.value = Math.round(pulgada * 100) / 100;
    document.conversorUnidades.unid_yarda.value = Math.round(yarda * 100) / 100;
    document.conversorUnidades.unid_pie.value = Math.round(pie * 100) / 100;
}

/**
 * Conversion de Unidades de angulos en grados o radianes
 * @method conversionAngulos
 * @param {String} id - ID de los inputs del formulario
 */

function conversionAngulos(id) /*Verificar Funcionalidad*/ {
    let grados, rad;

    if (id == "grados") {
        grados = document.getElementById("grados").value;
        rad = (grados * Math.PI / 180);

    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        grados = (rad * 180 / Math.PI);
    }

    document.getElementById("grados").value = grados;
    document.getElementById("radianes").value = rad;

}

/**
 * Segun el boton seleccionado, muestra u oculta el div en cuestion
 * @method mostrarOcultar
 * @param {string} valor - Valor de los botones del formulario
 */

function mostrarOcultar(valor) {
    if (valor === "val_mostrar") {
        document.getElementById("div1").style.display = "block";
    } else if (valor === "val_ocultar") {
        document.getElementById("div1").style.display = "none";
    }
}

/**
 * Suma dos valores ingresados por el usuario
 * @method fnSuma
 */

function fnSuma() {
    let num1, num2;

    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;

    document.getElementById("totalS").value = Number(num1) + Number(num2);
}

/**
 * Resta dos valores ingresados por el usuario
 * @method fnResta
 */

function fnResta() {
    let num1, num2;

    num1 = document.getElementById("numr1").value;
    num2 = document.getElementById("numr2").value;

    document.getElementById("totalR").value = Number(num1) - Number(num2);
}

/**
 * Multiplica dos valores ingresados por el usuario
 * @method fnProducto
 */

function fnProducto() {
    let num1, num2;

    num1 = document.getElementById("numm1").value;
    num2 = document.getElementById("numm2").value;

    document.getElementById("totalM").value = Number(num1) * Number(num2);
}

/**
 * Divide dos valores ingresados por el usuario
 * @method fnDivision
 */

function fnDivision() {
    let num1, num2;

    num1 = document.getElementById("numd1").value;
    num2 = document.getElementById("numd2").value;

    document.getElementById("totalD").value = Number(num1) / Number(num2);
}

/**
 * Abre la segunda web cuando se apreta el boton
 * @method cargarWeb
 */

function cargarWeb() {
    let cantidad, unidad, URL;

    cantidad = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    URL = "segundaWeb.html#" + cantidad + "#" + unidad;
    window.open(URL);
}

/**
 * Carga los resultados de la primera web en la segunda cuando esta se carga
 * @method cargarResultado
 */

function cargarResultado() {
    let cantidad, unidad, URL;

    URL = window.location.href;
    URL = URL.split("#");
    console.log(URL);

    cantidad = URL[1];
    unidad = URL[2];

    document.getElementById("dist").value = cantidad + ' ' + unidad;
}

/**
 * Al cargar la pagina, dibuja un cuadrado y un circulo
 * @method dibujarCirculoCuadrado
 */

function dibujarCirculoCuadrado() {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    let canvasHeight = canvas.height;
    let canvasWidth = canvas.width;
    let squareSize = 50;
    let margin = 15;

    context.fillRect(margin, canvasHeight - margin - squareSize, squareSize, squareSize);

    context.arc(canvasWidth / 2, canvasHeight / 2, 100, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "#00FF00";
    context.fill();
}

/**
 * Al hacer click, dibuja sobre el canvas
 * @method cargarListener
 */

function cargarListener() {

    document.getElementById("canvasPaint").addEventListener("mousemove", function (event) {
        let canvas = document.getElementById("canvasPaint");
        let context = canvas.getContext("2d");

        let posX = event.clientX;
        let posY = event.clientY;

        canvas.onmousedown = function () {
            bandera = true
        };
        canvas.onmouseup = function () {
            bandera = false
        };

        console.log(posX, posY);

        if (bandera) {
            context.fillRect(posX - 10, posY - 10, 5, 5);
        }
    })
}

/**
 * Al hacer click sobre el boton, limpia el canvas
 * @method dibujarCirculoCuadrado
 */

function limpiarCanvas() {
    let canvas = document.getElementById("canvasPaint");
    let context = canvas.getContext("2d");

    canvas.width = canvas.width;

}

/**
 * Al hacer click sobre el boton, dibuja un cuadriculado sobre el canvas
 * @method dibujarCuadriculado
 */

function dibujarCuadriculado() {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    for (let i = 20; i < canvas.height; i += 20) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(canvas.width, i);
        context.lineWidth = 0.5;
        context.stroke();
        context.closePath();
    }

    for (let i = 20; i < canvas.width; i += 20) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, canvas.height);
        context.lineWidth = 0.5;
        context.strokeStyle = "#ff0000";
        context.stroke();
        context.closePath();
    }

    //Eje X
    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.stroke();
    context.closePath();

    //Eje Y
    context.beginPath();
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.stroke();
    context.closePath();
}

/**
 * Al hacer click sobre el boton, dibuja un auto en las coordenadas ingresadas
 * @method dibujarAuto
 * @param {number} posX - Coordenada X
 * @param {number} posY - Coordenada Y
 */

function dibujarAuto(posX , posY) {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function () {
        context.drawImage(img , posX , posY);
    }

}

var x = 0;
var dx = 95;
function animarAuto() {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function () {
        context.drawImage(img , x , canvas.height/2);
    }

    x += dx;

    if(x > canvas.width)
    {
        x = 0;
    }
}