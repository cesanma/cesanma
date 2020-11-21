    // la variable contador sirve para 
	// mantener la cuenta de la imagen que estamos mostrando.  
    // la inicializamos a 1
    var contador = 1; 

	function comprueba() { 
			//si el contador estÃ¡ por encima de 4 (la Ãºltima imagen)
	        // vuelve a la imÃ¡gen 1 (la primera imagen)
	        if(contador > 4){  		
		        contador = 1;
	        } else if(contador < 1){
		        contador = 4;
	        }
		};

    function incrementa() { 
			contador=contador+1;
			comprueba();	 	 			           			            
    };
	
	function decrementa() { 
			contador=contador-1;	  
           	comprueba();		 			            
    };

    function imgc() {
    	if (contador == 1) {
    		document.getElementById("carretera").style.display = "block"
    	}
    	else{
    		document.getElementById("carretera").style.display = "none"
    	}
    	if (contador == 2) {
    		document.getElementById("montana").style.display = "block"
    	}
    	else{
    		document.getElementById("montana").style.display = "none"
    	}
    	if (contador == 3) {
    		document.getElementById("urbana").style.display = "block"
    	}
    	else{
    		document.getElementById("urbana").style.display = "none"
    	}
    	if (contador == 4) {
    		document.getElementById("ciclocross").style.display = "block"
    	}
    	else{
    		document.getElementById("ciclocross").style.display = "none"
    	}
    }
   