var aux;

var vetorFotos = ['galeria1.jpg','galeria2.jpg','galeria3.jpg','galeria4.jpg'];

function imagemModal(imagem){
    fotomodal.style.background = `url(img/${vetorFotos[imagem]})`;
    fotomodal.style.backgroundSize = 'cover';
    aux = imagem;
}

function prox(){
    if(aux==3){
        aux=-1;
    }
    aux++;
    fotomodal.style.background = `url(img/${vetorFotos[aux]})`;
    fotomodal.style.backgroundSize = 'cover';
    fotomodal.style.transition = '0.5s';
}

function ant(){
    if(aux==0){
        aux=4;
    }
    aux--;
    fotomodal.style.background = `url(img/${vetorFotos[aux]})`;
    fotomodal.style.backgroundSize = 'cover';
    fotomodal.style.transition = '0.5s';
}



