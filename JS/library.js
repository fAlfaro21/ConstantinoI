const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood",
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl",
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore",
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner",
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger",
        }
    ]
}



let allTheAnswers = "";
let htmlString = "";

//Recibe una respuesta e imprime un string con las propiedades id, name y value en una etiqueta input del tipo "radio".
// function imprimeInput(pregunta){
//     for(let i=0; i < pregunta.respuestas.length; i++) {
//         printInput += "<input id=";
//         printInput += pregunta.respuestas[i].id;
//         printInput += " name=";
//         printInput += pregunta.respuestas[i].name;
//         printInput += " type = radio";
//         printInput += " value=";
//         printInput += pregunta.respuestas[i].value;
//         printInput += ">";
//     }
//     return printInput;
// }

//Recibe una respuesta e imprime un string con las propiedades id, name y value en una etiqueta input del tipo "radio".
function imprimeInput(pregunta, i){
             let printInput = "";
             printInput += '<input id="';
             printInput += pregunta.respuestas[i].id;
             printInput += '" name=';
             printInput += pregunta.respuestas[i].name;
             printInput += ' type="radio"';
             printInput += ' value="';
             printInput += pregunta.respuestas[i].value;
             printInput += '">\n';            
         
        return printInput;
     }

//Recibe una respuesta e imprime un string con la propiedad label e id enmarcada de una etiqueta label.
function imprimeLabel(pregunta, i) {
            let printLabel = "";
            printLabel += '<label for="';
            printLabel += pregunta.respuestas[i].id;
            printLabel += '">';
            printLabel += pregunta.respuestas[i].label;
            printLabel += '</label>\n';
            
        return printLabel;
}

//Recibe una respuesta de la colección e imprime un string compuesto del resultado de las dos siguientes funciones:
// 1)imprimeLabel
// 2)imprimeInput
function imprimeUnaRespuesta(pregunta, i){
    //let i;
    //for(i=0; i<pregunta.respuestas.length; i++){ 
        let printAnAnswer = "";
        printAnAnswer += imprimeLabel(pregunta, i);
        printAnAnswer += imprimeInput(pregunta, i);
    //}
    return printAnAnswer;
}

//Recibe la pregunta completa y devuelve un string con todas las posibles respuestas.
function imprimeTodasLasRespuestas(pregunta){
    let i;
    for(i=0; i<pregunta.respuestas.length; i++){ 
        allTheAnswers += imprimeUnaRespuesta(pregunta, i);
    }
    return allTheAnswers;
}

//Recibe la pregunta completa y devuelve un string con el titulo enmarcado en <p>
function imprimeTitulo(pregunta){
    title = "<p>" + pregunta.titulo + "</p>\n";
    return title;
}

//Transformará un objeto en HTML
function imprimePregunta(pregunta){
    
    htmlString += imprimeTitulo(pregunta);
    htmlString += imprimeTodasLasRespuestas(pregunta)
    return htmlString;
}

//console.log(imprimeInput(pregunta, 3));
//console.log(imprimeLabel(pregunta, 3));
//console.log(imprimePregunta(pregunta));

//Forma antigua NO UTILIZAR
// function myFunction() {
//     imprimePregunta(pregunta);
//     document.getElementById("constantino").innerHTML = htmlString;
//   }
//------------------------------------------------------------

// 1) Capturas el elemenento TIGGER-------------------------------
//document indica que tomo el poder del documento HTML
//defino el alias paragraph:
const paragraph = document.getElementById("constantino"); //donde constantino es el id del elemento en HTML

// 2) EVENT--(.....y CALLBACK)------------------------------------
paragraph.addEventListener ("click", function() { //cuando haga click en "paragraph", debe ocurrir myFunction(). OJO: function() es una función anónima, la cual hace que no se ejecute nada hasta que no ocurra el click. Una vez que hace el click, se ejecuta lo que está adentro:
     myFunction(); //el -----CALLBACK----- se considera a partir de function() {myFunction()};
    }); 

// 3) TARGET------------------------------------------------------
function myFunction(){
    imprimePregunta(pregunta);
    document
        .getElementById("constantino")
        .innerHTML = htmlString; //innerHTML, cambia el contenido del HTML

}

