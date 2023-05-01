function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    //JavaScript já compara o elemento se é nulo ou disable, não necessário colocar (elemento != null)
    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    tecla.onclick = function () {
        //Usando template String
        tocaSom(`#som_${instrumento}`);
    }

    /*
    Comandos para adicionar a classe 'ativa' aos buttons e ativar a estilização quando ser pressionado por 
    teclas especificas 'Space' e 'Enter', que ao deixar de ser apertada deve voltar ao estado normal de estilização.
    */
    tecla.onkeydown = function(evento) {
        
        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }


}