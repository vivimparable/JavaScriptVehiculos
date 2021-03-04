let car:Car;


function validar_matricula(matricula:any) {
	var regex = /^[A-Z]{3}\d{4}$/;
	return regex.test(matricula) ? true : false;

    
}

function createCar(){

    
    var acumErrores1 = 0;

        let PlateCapturar = (document.getElementById("plateInput") as HTMLFormElement).value;
        let BrandCapturar = (document.getElementById("brandInput") as HTMLFormElement).value;
        let ColorCapturar = (document.getElementById("colorInput") as HTMLFormElement).value;

            car=new Car(PlateCapturar,ColorCapturar,BrandCapturar);

//-----------Condicionales

if(PlateCapturar== "" || BrandCapturar =="" ||ColorCapturar ==""){
    alert("Rellena todos los campos nada.")
    acumErrores1++
}

if(!validar_matricula(PlateCapturar.value)){
alert("No cumples con los requisitos propios de la matricula: 3 letras y 4 numeros.")    
acumErrores1 ++;
}
  



if (acumErrores1 > 0){
    return false;
}else{
    return (<HTMLInputElement>document.getElementById("demo")).innerHTML="<b> Coche </b>" + "</br>"+ 
    "Matricula es: " + car.plate +"</br>"+ 
    " Color del coche es: " +car.color + "</br>"+ 
    " Marca del coche es: " + car.brand,
    (<HTMLInputElement>document.getElementById("FormularioCompletoCar")).style.display = "none"; 
}

 
     
 

//let contenido = document.getElementById('FormularioCompleto') as HTMLInputElement;

//contenido.value = "<b> Coche </b>" + "</br>"+ 
//"Matricula es: " + car.plate +"</br>"+ 
//" Color del coche es: " +car.color + "</br>"+ 
//" Marca del coche es: " + car.brand;


}



function createWheel(){


    var acumErrores1 = 0;

    let Diametro1 = (document.getElementById("InputDiameter1") as HTMLFormElement).value;
    let Marca1 = (document.getElementById("InputBrandWheel1") as HTMLFormElement).value;

    let Diametro2 = (document.getElementById("InputDiameter2") as HTMLFormElement).value;
    let Marca2 = (document.getElementById("InputBrandWheel2") as HTMLFormElement).value;

    let Diametro3 = (document.getElementById("InputDiameter3") as HTMLFormElement).value;
    let Marca3 = (document.getElementById("InputBrandWheel3") as HTMLFormElement).value;
 
    let Diametro4 = (document.getElementById("InputDiameter4") as HTMLFormElement).value;
    let Marca4 = (document.getElementById("InputBrandWheel4") as HTMLFormElement).value;
 
 

    let wheel1=new Wheel(Diametro1, Marca1);
    let wheel2=new Wheel(Diametro2, Marca2);
    let wheel3=new Wheel(Diametro3, Marca3);
    let wheel4=new Wheel(Diametro4, Marca4);


    //-----------------condicionales

if(Diametro1== "" || Diametro2 =="" || Diametro3=="" || Diametro4==""){
    alert("Tienes campos de Diametro sin rellenar.")
    acumErrores1++
}

if(Marca1==""|| Marca2==""|| Marca3==""|| Marca4==""){
    alert("Rellena todos los campos de Marca")
    acumErrores1 ++
}

if (!(Diametro1 >= 0.2 && Diametro1 <= 4) || 
    !(Diametro2 >= 0.2 && Diametro2 <= 4) ||
    !(Diametro3 >= 0.2 && Diametro3 <= 4) ||
    !(Diametro4 >= 0.2 && Diametro4 <= 4) ){

        alert("El diametro de las ruedas debe ser entre 0.2 y 4")
        acumErrores1 ++
}

if (acumErrores1 > 0){
    return false;
}else{
    return (<HTMLInputElement>document.getElementById("ResultadoWheel")).innerHTML="<b>Ruedas</b> </br> Rueda 1- Diametro: " + wheel1.diameter +" Marca de la rueda es: "+ wheel1.brand+ "</br>" +
    "Rueda 2- Diametro: " + wheel2.diameter +" Marca de la rueda es: "+ wheel2.brand+ "</br>" +
    "Rueda 3- Diametro: " + wheel3.diameter +" Marca de la rueda es: "+ wheel3.brand+"</br>" +
    "Rueda 4- Diametro: " + wheel4.diameter +" Marca de la rueda es: "+ wheel4.brand,
    (<HTMLInputElement>document.getElementById("FormularioCompletoWheel")).style.display = "none"; 
}
}
