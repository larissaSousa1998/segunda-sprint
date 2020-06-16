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

function removerlogin(){
    document.getElementById('remover-cadastro').style.display="none";
    document.getElementById('altera-login').style.display="block";
    document.getElementById('div-top').style.display="none";
    document.getElementById('div-top2').style.display="block";
}


function voltarlogin(){
    document.getElementById('remover-cadastro').style.display="block";
    document.getElementById('altera-login').style.display="none";
    document.getElementById('div-top').style.display="block";
    document.getElementById('div-top2').style.display="none";
}

var btnlogar = document.querySelector('#id-btn');
var btncadastrar = document.querySelector('#id-cad'); 

var email='';
var senha='';

function cadastrar(e){
    e.preventDefault();

    if(senhacad.value == confirmacad.value){
        email = document.getElementById('emailcad').value;
        senha= document.getElementById('senhacad').value;
        alert("Você está cadastrado!");
        voltarlogin();
    } else{
        alert("As senhas não coincidem");
        document.getElementById('senhacad').value="";
        document.getElementById('confirmacad').value="";
    }
    

}


function log(e){
    e.preventDefault();
    var auxlogin=document.getElementById('emaillogin').value;
    var auxsenha=document.getElementById('senhalogin').value;
    if(email==auxlogin && senha==auxsenha){
        window.location.href="./../dashboard/NODE4/index.html";

    } else {
        alert("Email ou senha estão incorretos");
    }


}



btnlogar.addEventListener("click",log);
btncadastrar.addEventListener("click",cadastrar);



 

