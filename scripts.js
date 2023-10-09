//Validacion de formulario
const respuestas = {
    respuesta1: 'apple',
    respuesta2: 'css',
    respuesta3: 'bluetooth',
    respuesta4: 'alexa',
    respuesta5: '2160p',
    respuesta6: 'vpn',
    respuesta7: 'phising',
    respuesta8: 'cascading',
    respuesta9: 'b',
    respuesta10: '3'
}
document.getElementById('resultado').style.display = 'none' //Ocultar seccion resultados
document.getElementById('quiz').addEventListener('submit', function(event) {

    event.preventDefault();
    let contador = 0; //contador para acumular aciertos

    for (let i = 1; i <= 10; i++) { //de respuesta1 a respuesta10
        const preguntaNumero = 'respuesta' + i;
        const respuestaSeleccionada = document.querySelector(`input[name=${preguntaNumero}]:checked`); //input seleccionado (:checked)
        const respuestaID = respuestaSeleccionada.id; //id del input seleccionado para conseguir su label asociado
        const respuestaLabel = document.querySelector(`label[for=${respuestaID}]`); //label del input seleccionado, que voy a cambiar

        console.log(respuestas[preguntaNumero], respuestaSeleccionada.value);
        if (respuestas[preguntaNumero] === respuestaSeleccionada.value) {
            respuestaLabel.style.backgroundColor = 'green';
            contador++; //añado +1 aciertos
        }
        else {
            respuestaLabel.style.backgroundColor = 'red'
        }
        
        
    }
    console.log(contador);
    const puntuacionTexto = document.createTextNode(`¡Has acertado ${contador}/10 preguntas!`);
    document.getElementById('resultado').style.display = '' //volver a mostrar seccion resultados
    return document.getElementById('resultado').appendChild(puntuacionTexto);

});