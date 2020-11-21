	if (typeof(Storage) !== "undefined") {
  	// Aquí ponemos todo el código que se ejecutará si se puede usar localStorage/sessionStorage.

  		//al cargar la página busca en local storage si existe la variable contadorClicks; 
		//si no existe créala, e imprime su número en pantalla
		if (!localStorage.contadorClicks) {    //usamos ! para negar. Esto significa: si no existe contador Clicks
  			localStorage.contadorClicks = 0;   //entonces crea la variable y ponla a 0
		}
		document.getElementById("contadorlikes").innerHTML = localStorage.contadorClicks;  //imprime en pantalla

		//esta función se llama al hacer click en la imagen: incrementa el contador y actualiza el número en pantalla
		function likes() { 
			localStorage.contadorClicks = Number(localStorage.contadorClicks)+1; //con Number transformamos el string en un numero entero para poder sumar 1
			document.getElementById("contadorlikes").innerHTML = localStorage.contadorClicks;
		};
	} 

	function likeon(){
		document.getElementById("megusta").src="Imagenes/likeon.png"
	}