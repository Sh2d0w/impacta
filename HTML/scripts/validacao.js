const botao  = document.getElementById('button')
if (botao){
    console.log('teste')
    botao.addEventListener('click', function(){
        const nome = document.getElementById('nome');
        const telefone = document.getElementById('telefone');
        const email = document.getElementById('email');
        const cpf = document.getElementById('cpf');
        const data = document.getElementById('data');
        const sexo = document.getElementsByName('sexo');
        const logradouro = document.getElementById('logradouro');
        const bairro = document.getElementById('bairro');
        const numero = document.getElementById('numero');
        const cidade = document.getElementById('cidade');
        const estado = document.getElementById('estado');
        const cep = document.getElementById('cep');
        const exp = document.getElementById('exp');
        const cargo1 = document.getElementById('cargo1');

        informacao-usuario[
            {
                "nome": nome,
                "telefone": telefone,
                "email": email,
                "cpf": cpf,
                "sexo": sexo,
                "data": data,
                "logradouro": logradouro,
                "bairro": bairro,
                "numero": numero,
                "cidade": cidade,
                "estado": estado,
                "cep": cep,
                "exp": exp,
                "cargo1": cargo1,
            }
        ]
        alert('Enviado com sucesso')
    })
}