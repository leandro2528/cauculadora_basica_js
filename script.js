function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - somar(+) \n 2 - Diminuir (-) \n 3 - Dividir (/) \n 4 - Multiplicar (*)'))
    
    let n1 = Number(prompt('Digite o primeiro número:'));
    let n2 = Number(prompt('Digite o segundo número:'));
    let resultado;

    function somar() {
        resultado = n1 + n2;
        alert(`A soma entre ${n1} e ${n2} é igual á ${resultado}`);
        novaOperacao();
    }

    function diminuir() {
        resultado = n1 - n2;
        alert(`A subtração entre ${n1} e ${n2} é igual á ${resultado}`);
        novaOperacao();
    }

    function dividir() {
        resultado = n1 / n2;
        alert(`A divisãp entre ${n1} e ${n2} é igual á ${resultado}`);
        novaOperacao();
    }

    function multiplicar() {
        resultado = n1 * n2;
        alert(`A multiplicação entre ${n1} e ${n2} é igual á ${resultado}`);
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = Number(prompt('Deseja realizar uma nova operação: 1 - Sim \n 2 - Não'));

        if(opcao === 1) {
            calculadora();
        }else if(opcao === 2) {
            alert('Até mais!!!');
        } else{
            alert('Opção invalida, digite 1 para sim e 2 para não');
            novaOperacao();
        }
    }

    switch(operacao) {
        case 1:
            somar();
            breck;
        case 2:
            diminuir();
            break;
        case 3:
            dividir();
            break;
        case 4:
            multiplicar();
            break;
        default:
            break;
    }
}

calculadora();