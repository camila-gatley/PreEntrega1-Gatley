let passenger= 1;
let actualfloor=0;
let floorcount=0;
let confirmEmployee=0;
let dimension =3;
let cont=0;

const employee = [
    {id : 4536,
    name : "Juan",
    age : 45,
    calle : "Sarmiento 4456"}
    ,
    {id : 4537,
    name : "Micaela",
    age : 29,
    calle : "Av. Libertad 354"}
    ,
    {id : 4538,
    name : "Franco",
    age : 19,
    calle : "Francia 321"}
];


// a futuro se le podria agregar limite de pisos a los que pueda ir y la cant de personas que pueda llevar

function lift(){
    confirmEmployee=parseInt(prompt("ingrese numero de empleado"));

    for(let i=0; employee[i].id != confirmEmployee &&  i<dimension;i++){ // busca si el empleado existe en el array
      cont++;
    } 

    if(cont<3){ // si existe, no se pasa de 3 ya que es la dimension del array
        alert("Bienvenido/a " +employee[cont].name+" a nuestro ascensor!");
        let wantedfloor= parseInt(prompt("Ingrese al piso que quiera ir")); 
    
        while(passenger == 1){ // verifica que el pasajero siga en el ascensor
            if(wantedfloor != actualfloor){ // verifica que el piso ingresado NO sea en el que esta
                if(wantedfloor==0){ // si el piso al que quiere ir es el 0
                    floorcount+=actualfloor;
                    alert("usted estaba en el piso "+actualfloor+" y ahora se encuentra en el piso "+wantedfloor+" total de pisos recorridos "+floorcount);
                }else if(wantedfloor<0){ // si el piso al que quiere ir es un subsuelo (es decir, numero negativo)
                    floorcount+=(wantedfloor*-1); 
                    alert("usted estaba en el piso "+actualfloor+" y ahora se encuentra en el piso "+wantedfloor+" total de pisos recorridos "+floorcount);
                }else{
                    if(wantedfloor>actualfloor){
                        floorcount+= (wantedfloor-actualfloor); 
                    }else{
                        floorcount+= ((wantedfloor-actualfloor)*-1)
                    }
                    alert("usted estaba en el piso "+actualfloor+" y ahora se encuentra en el piso "+wantedfloor+" total de pisos recorridos "+floorcount);
                }
                actualfloor=wantedfloor; // Inicializa nuevamente el piso en el que estoy para no contar pisos de mas. 
            }else{
                alert("Usted se encuentra en este piso"); // si esta en el mismo piso, lo anuncia
            }

            passenger = parseInt(prompt("Usted se encuentra en el piso "+actualfloor+". Quiere seguir utilizando el ascensor? Ingrese 1 en caso de seguir, 0 si no")); // pregunta si quiere seguir en el ascensor y edita la variable passenger
            if(passenger == 1){
                wantedfloor= parseInt(prompt("Ingrese al piso que quiera ir")); // si quiere seguir, ingresa un piso nuevo
            }else{
                alert("Gracias por usar nuestros servicios. La cantidad de pisos recorridos fueron " + floorcount); // si no, agradece y anuncia la cantidad de pisos recorridos.
            }
        }
    }else{
        alert("Este empleado no es válido");
    }
    
    return floorcount;
}

console.log(lift());
