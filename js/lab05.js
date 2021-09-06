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
        
    function extraerPalabras(){
        let separar = nombres.value.split(' ');
        paterno.value = separar[0];
        materno.value = separar[1];
        mostrarnombres.value = separar[2] + " " + separar[3];
        longitud.value = paterno.value.length + 1;

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
    btnextraer.onclick =extraerPalabras;
};
})();

