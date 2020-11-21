function cambiarimagen() { //Se crea la función cambiarimagen() que permitirá cambiar la imegen del perfil.
    var file = document.getElementById("file-input").files;
     //Se añade la variable file, que accederá al archivo desde el input.
    if (file.length > 0) { //Se comprueba que el usuario haya selecionado una imagen
        var fileReader = new FileReader(); 
        //Se crea la variable en FileReader para que Javascript pueda leer el archivo.

        fileReader.onload = function (event) {
            document.getElementById("fotoperfil").setAttribute("src", event.target.result);
        };//Se crea la función con la que se cambiará el src de la imagen.

        fileReader.readAsDataURL(file[0]);
    }
}