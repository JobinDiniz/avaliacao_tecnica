
//Função validação nome com tratativa de erros.

function confereNome(){
    const nomePadrao = document.querySelector('input[name=nomePadrao]');

    if ((nomePadrao.value === 'Gabriel') || (nomePadrao.value ==='gabriel')){
        
        nomePadrao.setCustomValidity('');
    } else {
       
        nomePadrao.setCustomValidity('Esse nome tem que ser Gabriel')
    }
}

//Função validação idade com tratativa de erros.

function confereIdade(){
   
    const idadePadrao = document.querySelector('input[name=idadePadrao]');
    if (idadePadrao.value === '25'){
        
        idadePadrao.setCustomValidity('');
    } else {
       
        idadePadrao.setCustomValidity('Essa idade tem que ser 25')
    }
    
}

//Função validação profissão com tratativa de erros.

function confereProfissao(){
   
   const profPadrao = document.querySelector('input[name=profPadrao]');
   if ((profPadrao.value === 'Programador') || (profPadrao.value ==='programador')){
       
       profPadrao.setCustomValidity('');
   } else {
      
       profPadrao.setCustomValidity('Essa profissão tem que ser programador')
   }
   
}

//Função validação email com tratativa de erros.

function confereEmail(){
   
   const emailPadrao = document.querySelector('input[name=emailPadrao]');
   if (emailPadrao.value === 'programador@rethink.dev'){
       
       emailPadrao.setCustomValidity('');
   } else {
       
       emailPadrao.setCustomValidity('Esse email tem que ser programador@rethink.dev')
   }
}   

//Função validação telefone com tratativa de erros.

function confereFone(){
   
   const fonePadrao = document.querySelector('input[name=fonePadrao]');
   if (fonePadrao.value === '(31) 9 9999-9999'){
       
       fonePadrao.setCustomValidity('');
   } else {
       
       fonePadrao.setCustomValidity('Esse telefone precisa seguir o padrão de  (31) 9 9999-9999 e respeitando os espaços')
   }
}   

//Função validação data de preenchimento com tratativa de erros.

function confereData(){
   
   const dataPadrao = document.querySelector('input[name=dataPadrao]');
   if (dataPadrao.value === '19/10/2022'){
       
       dataPadrao.setCustomValidity('');
   } else {
      
       dataPadrao.setCustomValidity('Essa data precisa ser 19/10/2022')
   }
}  

//Função para exibição dos dados.Como os dados do formulário já são pré-determinados, achei melhor fazer assim.

function cadastroOk(){
alert("Cadastro Incluido !\n Nome: Gabriel\n idade: 25 anos\n Profissão: Programador\n Email:  programador@rethink.dev\n Telefone: (31) 9 9999-9999\n Data de preenchimento: 19/10/2022");
}


