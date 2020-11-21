function inisesi() { //función que se ejecutará al pulsar el botón de iniciar sesión. Se representará el grid2, que tiene display grid.
		document.getElementsByClassName("grid1")[0].style.display = "none";
		document.getElementsByClassName("grid2")[0].style.display = "grid";
		document.getElementsByClassName("grid3")[0].style.display = "none";

}

function cesesi(){ //función que se ejecutará al pulsar el botón de cerrar sesión. Se representará el grid1, que tiene display grid./
	//se ejecutan las tres a modo de aclaración, pero con dos es suficiente
	document.getElementsByClassName("grid1")[0].style.display = "grid";
	document.getElementsByClassName("grid2")[0].style.display = "none";
	document.getElementsByClassName("grid3")[0].style.display = "none";
}
	

function popup1(){// popup para el producto 1
	var popup = document.getElementById("popup1");// llamamos a span y le asignamos variable
  popup.classList.toggle("show"); // enseñamos la funcion toggle del css
}

function popup2(){// popup para el producto 2
	var popup = document.getElementById("popup2");
  popup.classList.toggle("show");
}

function popup3(){// popup para el producto 2
	var popup = document.getElementById("popup3");
  popup.classList.toggle("show");
}
function popup4(){// popup para el producto 4
	var popup = document.getElementById("popup4");
	 popup.classList.toggle("show");
}

function validarformulario(){// valida el formulario si todo correcto redirige.
//valido el nombre
nombrev = document.getElementById("name").value ;
emailv = document.getElementById("email").value;
passv = document.getElementById("pass").value;
pass2v = document.getElementById("pass2").value;
   if (nombrev.length==0){//sino se rellena el nombre
      alert("Tiene que escribir su nombre");//crea un cuadro de alerta
      nombrev.focus();}// focus hace que cuando se rellene el campo se quede con un tono azulado, no es realmente necesario pero es bonito. Puede dar error en consola.
	else if (emailv.length==0) {//si no se rellena el email
		alert("Tiene que escribir su email");
		emailv.focus();}
	else if (pass.length==0) {//si no se rellena la contraseña
		alert("Tiene que escribir su contraseña");
		passv.focus();}
	else if (pass2v.length==0) {//si no se rellena la confirmación de contraseña
		alert("Tiene que confirmar su contraseña");
		pass2v.focus();}
	else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(emailv)) {// si el email no tiene un formato correcto.
		alert("Debe de escribir un correo válido");
	}
	else if (passv != pass2v) {// si las dos contraseñas no coinciden
		alert("Las contraseñas no coinciden");
	}
else{// si todo está correcto cambiamos los grid, en ordenador, tablet y movil	
			document.getElementsByClassName("grid1")[0].style.display = "none";
			document.getElementsByClassName("grid2")[0].style.display = "none";
			document.getElementsByClassName("grid3")[0].style.display = "grid";
		}}

function locals(){
	if (document.getElementsByClassName("grid3")[0].style.display == "grid") {
	tipo = document.getElementById("pass");
	tipo2 = document.getElementById("pass2");
	tipo.type = "text";//pasamos la contraseña a texto para que se pueda leer en el localStorage
    tipo2.type = "text";// también para activar la posibilidad de ver la contraseña al usuario y revisar si la escribió bien.
		}
	//obtener tu form desde el HTML
	var form = document.getElementById("formu").elements;
	for(var i = 0; i<= form.length - 1; i++){
	    //aquí puedes agregar mas validaciones que ocupes
	    //para efectos de prueba, yo solo permite que se obtuvieran los input de text.
	    if(form[i].type == "text"){
	        //imprimir en consola el valor
	        console.log(form[i].value);
	        //la key sera el ID de tu elemento y despues se asigna el valor
	        localStorage.setItem(form[i].id, JSON.stringify(form[i].value));
	    }
	}
	//para probar que se guardaron bien los elementos, probamos en consola.
	console.log(localStorage);

}

function cdatos(){// función para dar personalización en panel de usuario, nombre y día de registro.
	var stripname = localStorage.getItem("name");// por el uso de JSON, eliminamos comillas sobrantes del nombre
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var f=new Date();// llamamos a la función de librería Date()
	document.getElementById("nusuario").innerHTML = "Hola " + stripname.replace(/['"]+/g, '');
	document.getElementById("ausuario").innerHTML = "Cliente desde " + (f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}