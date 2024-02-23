import entradaDados from "readline-sync";
import listaDeFrutas from "./dados.js";
import {
    validarLetraDigitada,
    verificarJogoGanho,
    verificarLetraPresenteNaalavra,
    jogadasRestantes,
    atualizarPalavraOculta,
    exibirMensagemFimDeJogo
} from "./funcoes.js";


function jogarForca(){
    const palavraEscolhida = listaDeFrutas[Math.floor(Math.random()* listaDeFrutas.length)];

    let primeiraLetra = palavraEscolhida[0]
    let underline = "_".repeat(palavraEscolhida.length - 1)
    let palavraOculta = primeiraLetra + underline

    let erros = 0;
    let statusJogo = 'andamento'

    console.log('---------------------Jogo da Forca-------------------------');
    console.log(`\n Nome da fruta com ${palavraEscolhida.length} letras: `);

    while (statusJogo === 'andamento'){
        console.log (`\nFruta: ${palavraOculta}`);

        const letraDigitada = entradaDados.question("Digite uma letra: ").toLowerCase();

        if (validarLetraDigitada(letraDigitada)){
             if(verificarLetraPresenteNaalavra(palavraEscolhida, letraDigitada)){
                palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);
                if(verificarJogoGanho(palavraOculta, palavraEscolhida)){
                  statusJogo = 'venceu'   
                }
         }else{
                    erros++

                    const chances = jogadasRestantes(erros)


                    if(chances > 0){
                     console.log(`OPÇÃO ERRADA! Você ainda tem ${chances} chance(s)!`);
                     }else{
                      statusJogo = 'perdeu'
                    }
                }  
        } else{
            console.log("\nPor favor, digite uma letra válida.");
        }   
    }
 exibirMensagemFimDeJogo(statusJogo);


}

jogarForca();
