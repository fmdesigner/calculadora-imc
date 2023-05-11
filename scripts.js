const form = document.querySelector('form');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const containerResultado = document.querySelector('#container_resultado');
const resultado = document.querySelector('.imc span');
const resultadoReferencia = document.querySelector('.referencia');
const resultadoText = document.querySelector('.resultado_text');
const btn = document.querySelector('.btn');

btn.disabled = true;

altura.addEventListener('keyup', function () {
    btn.disabled = false;
    btn.classList.remove('disable');
})
  
btn.addEventListener('click', initImc)

function initImc(event) {
    event.preventDefault();
    const pesoValor = peso.value;
    const alturaValor = altura.value;
    const resultadoIMC = pesoValor / (alturaValor * alturaValor);
    containerResultado.removeAttribute('class');

    resultado.innerText = resultadoIMC;

    if (resultadoIMC < 18.5) {
        containerResultado.classList.add('yellow');
        resultado.innerText = resultadoIMC.toFixed(1);
        resultadoReferencia.innerText = 'Entre 18,5 e 24,9';

        resultadoText.innerHTML = '<h3>Abaixo do peso</h3><br><p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>';

    } else if (resultadoIMC > 18.6 && resultadoIMC < 24.9) {
        containerResultado.classList.add('green');
        resultado.innerText = resultadoIMC.toFixed(1);
        resultadoReferencia.innerText = 'Entre 18,5 e 24,9';

        resultadoText.innerHTML = '<h3>Normal</h3><br><p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>';

    } else if (resultadoIMC > 25.0 && resultadoIMC < 29.9) {
        containerResultado.classList.add('orange');
        resultado.innerText = resultadoIMC.toFixed(1);
        resultadoReferencia.innerText = 'Entre 25,0 e 29,9';

        resultadoText.innerHTML = '<h3>Sobrepeso</h3><br><p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>';

    } else if (resultadoIMC > 30.0 && resultadoIMC < 34.9) {
        containerResultado.classList.add('red');
        resultado.innerText = resultadoIMC.toFixed(1);
        resultadoReferencia.innerText = 'Entre 30,0 e 34,9';

        resultadoText.innerHTML = '<h3>Obesidade grau I</h3><br><p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>';

    } else if (resultadoIMC > 35.0 && resultadoIMC < 39.9) {
        containerResultado.classList.add('red');
        resultado.innerText = resultadoIMC.toFixed(1);
        resultadoReferencia.innerText = 'Entre 35,0 e 39,9';

        resultadoText.innerHTML = '<h3>Obesidade grau II</h3><br><p>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>';

    } else if (resultadoIMC > 40) {
        containerResultado.classList.add('dark-red');
        resultado.innerText = resultadoIMC.toFixed(1);
        resultadoReferencia.innerText = 'Acima de 40,0';

        resultadoText.innerHTML = '<h3>Obesidade grau III</h3><br><p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>';

    }
}