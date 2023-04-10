function tocaSom (selectorAudio) {
    const elemtento = document.querySelector(selectorAudio)

    if (elemtento != null && elemtento.localName === 'audio') {
        elemtento.play();
    }
    else{
        alert('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        
       if (evento.code === 'Space' || evento.code === 'Enter' ) {
        tecla.classList.add('ativa');
       } 


    }

    
    //função para remover class "ativa" da classe do button

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }



}
