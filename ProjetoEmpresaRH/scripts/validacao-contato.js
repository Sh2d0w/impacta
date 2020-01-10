const botao  = document.getElementsByClassName("enviar")
if (botao[0]){
botao[0].addEventListener('click', function(){
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');

    nome.setCustomValidity(nome.value== '' ?
    'Informe corretamente o nome do contato' : '')
    telefone.setCustomValidity(telefone.value== '' ?
    'Informe corretamente o telefone do contato' : '')
    email.setCustomValidity(email.value== '' ?
    'Informe corretamente o email do contato' : '')
    assunto.setCustomValidity(assunto.value== '' ?
    'Informe corretamente o assunto' : '')
})
}