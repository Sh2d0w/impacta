const botao  = document.getElementsByClassName("enviar")
if (botao){
botao[0].addEventListener('click', function(){
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');
    const data = document.getElementById('data');
    const masculino = document.getElementById('masculino');
    const feminino = document.getElementById('feminino');
    const vaga = document.getElementById('vaga');

    nome.setCustomValidity(nome.value== '' ?
    'Informe corretamente o nome' : '')
    telefone.setCustomValidity(telefone.value== '' ?
    'Informe corretamente o telefone' : '')
    email.setCustomValidity(email.value== '' ?
    'Informe corretamente o email' : '')
    data.setCustomValidity(data.value== '' ?
    'Informe corretamente a data' : '')
    masculino.setCustomValidity(masculino.checked == false && feminino.checked == false ? "Informe corretamente o sexo" : '' )
    vaga.setCustomValidity(vaga.value < 0 ? "Informe a vaga desejada" : '')
})
}