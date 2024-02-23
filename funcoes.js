function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida){
    let palabvraOcultaArray = palavraOculta.split('');

    for(let i=0; i < palavraEscolhida.length; i++){
        if(palavraEscolhida[i] === letraDigitada){
            palabvraOcultaArray [i] = letraDigitada
        }
    }

    return palabvraOcultaArray.join('')
}

function validarLetraDigitada(letraDigitada){
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
        return true
    }else{
        return false
    }
}



function verificarJogoGanho (palavraOculta, palavraEscolhida){
    if(palavraOculta === palavraEscolhida){
        return true
    }else{
        return false
    }
}


function verificarLetraPresenteNaalavra(palavraEscolhida, letraDigitada){
     if(palavraEscolhida.includes(letraDigitada)){
       return true
     }else{
        return false
     }
}

function jogadasRestantes(erros){
    return 4 - erros
}

function exibirMensagemFimDeJogo(statusJogo){
    if(statusJogo === 'venceu'){
        console.log("\n---------------------- VOCÊ VENCEU!!!! -----------------------------");
    }else{
        console.log("\n-----------------------VOCE PERDEU!!! --------------------------------");
    }
}


export{
    validarLetraDigitada,
    verificarJogoGanho,
    verificarLetraPresenteNaalavra,
    jogadasRestantes,
    atualizarPalavraOculta,
    exibirMensagemFimDeJogo
};
