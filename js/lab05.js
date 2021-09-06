(function(){
    window.onload = function(){

    let nombres = document.getElementById("nomAp");
    let fecha = document.getElementById("fechaNac");
    let btnextraer = document.getElementById("extraer");
    let paterno = document.getElementById("paterno");
    let materno = document.getElementById("materno");
    let mostrarnombres = document.getElementById("nombres");
    let longitud = document.getElementById("Longitud");
    let edad = document.getElementById("edad");
    let mes = document.getElementById("mes");
    let btncolorear = document.getElementById("colorear");
            
    function extraerPalabras(){
        let separar = nombres.value.split(' ');
        paterno.value = separar[0];
        materno.value = separar[1];
        mostrarnombres.value = separar[2] + " " + separar[3];
        longitud.value = paterno.value.length;

        let fechaActual= new Date();
        let anioActual = fechaActual.getFullYear();
        let separarFecha =fecha.value.split('-');
        edad.value = anioActual-separarFecha[0];
        let mesCumple = separarFecha[1];

        mes.value = convertirMes(mesCumple);     
        function  convertirMes( mesCumple ){
            meses = [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
              ];
           return meses[mesCumple-1];
        }

    }

    function colorear(){ 
        let azul= document.getElementsByClassName("col-sm-4");
        let rojo= document.getElementsByClassName("col-sm-5");
       for(let i=0;i<=azul.length-1; i++){
          azul[i].style.backgroundColor = (azul[i].style.backgroundColor==="rgb(186, 59, 20)")? "#426FF5":"#BA3B14";
          
       } 
       for(let i=0;i<=rojo.length-1; i++){
        rojo[i].style.backgroundColor = (rojo[i].style.backgroundColor==="rgb(66, 111, 245)")? "#BA3B14":"#426FF5"; 
     } 
    }
    btnextraer.onclick = extraerPalabras;
    btncolorear.onclick = colorear;
    
};
})();

