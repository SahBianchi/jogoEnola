let body = document.querySelector('body')
let container = document.querySelector('#container')
let main = document.querySelector('main')
let botao = document.querySelector('#botao')
let introducao = document.querySelector('#introducao')
let introducao2 = document.querySelector('#introducao2')
let pergunta = document.querySelector('#pergunta')
let imagem = document.querySelector('#img')
let imagem2 = document.querySelector('#img2')
let contador = 0


let escolha = document.createElement('div')
main.appendChild(escolha)
escolha.classList.add('escolha')


function primeiraTela(){
    console.log("estou na primeira tela!")
    imagem.innerHTML=``

    
    
    botao.innerHTML= ``

    //arrumando estilo
    document.body.style = 'background: #60B0AD;'
    container.style ='width: 80%; margin: 5% auto;'
    introducao.style='margin-top: 5%;'
    pergunta.style='font-size: 50px'
    
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao
    introducao.textContent = '“Enola Holmes é uma menina adolescente, irmã do renomado detetive Sherlock Holmes. Quando sua mãe desaparece, fugindo do confinamento da sociedade vitoriana e deixando dinheiro para trás para que Enola faça o mesmo, a menina inicia uma investigação para descobrir o paradeiro dela.” '
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.textContent = 'Gostaria de se juntar à Enola nesta busca?'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adicionando as opções de sim ou não a div Escolha
    escolha.innerHTML = ` 
    <p class='opcao' id='sim'>SIM</p>
    <p class='opcao' id='nao'>NÃO</p>`
    
    //localizando o SIM e o NÃO
    let respostaSim = document.querySelector('#sim')
    let respostaNao = document.querySelector('#nao')
    
    //Atribuindo estilo  sim e não
    respostaSim.addEventListener('mouseover', function(){
        this.style = 'background: rgb(154, 240, 154);'//muda de cor quando o mause passa em cima
    })
    respostaSim.addEventListener('mouseout', function(){
        this.style = 'background: green;'//quando o mause sai volta ao normal 
    })
    respostaNao.addEventListener('mouseover', function(){
        this.style = 'background:  rgb(231, 145, 145);'//muda de cor quando o mause passa em cima
    })
    respostaNao.addEventListener('mouseout', function(){
        this.style = 'background: red;'//quando o mause sai volta ao normal 
    })
    
    //escolhendo sim ou não
    respostaNao.addEventListener('click', function(){
        respondeNao()
        contador += 1
    })
    
    respostaSim.addEventListener('click', function(){
        respondeSim()
    })
    
}


// tela do enigma 1
function respondeSim(enigma1){
    console.log("estou no enigma1")
    escolha.innerHTML = ` 
    <p class='opcao' id='errada'>NEOLE</p>
    <p class='opcao' id='certa'>NEOLA</p>`
    
    //localizando o SIM e o NÃO
    let respostaSim = document.querySelector('#certa')
    let respostaNao = document.querySelector('#errada')
    
    //Atribuindo estilo  sim e não
    respostaSim.addEventListener('mouseover', function(){
        this.style = 'background: #f5d58c;'//muda de cor quando o mause passa em cima
    })
    respostaSim.addEventListener('mouseout', function(){
        this.style = 'background: #ffb200;'//quando o mause sai volta ao normal 
    })
    respostaNao.addEventListener('mouseover', function(){
        this.style = 'background:  #f5d58c;'//muda de cor quando o mause passa em cima
    })
    respostaNao.addEventListener('mouseout', function(){
        this.style = 'background: #ffb200;'//quando o mause sai volta ao normal 
    })
    
    //escolhendo sim ou não
    respostaNao.addEventListener('click', function(){
        errouEnigma1()
        contador += 1
    })
    
    respostaSim.addEventListener('click', function(){
        telaEntreEnigmas1()
    })
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //arrumando estilo
    document.body.style = 'background: url(../img/bg-enigma1.jpg); background-size: 100%'
    container.style ='width: 80%; line-heigth: 450px;'
    introducao.style='margin-top: 5%;'
    pergunta.style='font-size: 30px'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao 
    introducao.textContent = 'ENOLA é a palavra ALONE de trás pra frente. Palavras que são escritas a partir de outras, trocando apenas a ordem das letras são chamadas de anagramas.'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.textContent = 'Marque abaixo a opção que tem outro anagrama da palavra ALONE:'
    
    botao.innerHTML = ``
    
    
    
    
}

// responde não primeira tela
function respondeNao(){
    console.log("estou no responde não")
    escolha.innerHTML = ` `
    
    
    
    //arrumando estilo
    body.style = 'background: url(../img/errou_1.jpeg); width: 100%;'
    container.style ='width: 40%; margin: 5% 50% ; line-heigth: 450px;'
    introducao.style='margin-top: 20%;'
    pergunta.style='font-size: 50px'
    
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao
    introducao.textContent = 'Tomara que Enola ache logo sua mãe! Pena que você não vai com ela...'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.textContent = 'GAME OVER!'
    
    botao.innerHTML = `<button class="botaoProximo" onclick="primeiraTela()">Tentar Novamente</button>`
    
    
    
    
}

//acertou enigma 1
function telaEntreEnigmas1(acertouEnigma1){
    console.log("estou na tela entre enigmas!")
    escolha.innerHTML = ` 
    <p class='opcao' id='sim'>SEGUIR</p>
    <p class='opcao' id='nao'>DESISTIR</p>`
    
    //localizando o SIM e o NÃO
    let respostaSim = document.querySelector('#sim')
    let respostaNao = document.querySelector('#nao')
    
    //Atribuindo estilo  sim e não
    respostaSim.addEventListener('mouseover', function(){
        this.style = 'background: rgb(154, 240, 154);'//muda de cor quando o mause passa em cima
    })
    respostaSim.addEventListener('mouseout', function(){
        this.style = 'background: green;'//quando o mause sai volta ao normal 
    })
    respostaNao.addEventListener('mouseover', function(){
        this.style = 'background:  rgb(231, 145, 145);'//muda de cor quando o mause passa em cima
    })
    respostaNao.addEventListener('mouseout', function(){
        this.style = 'background: red;'//quando o mause sai volta ao normal 
    })
    
    //escolhendo sim ou não
    respostaNao.addEventListener('click', function(){
        respondeNao()
        contador += 1
    })
    
    respostaSim.addEventListener('click', function(){
        enigma2()

    })
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //arrumando estilo
    document.body.style = 'background: #60B0AD;'
    container.style ='width: 60%;'
    introducao.style='margin-top: 5%;'
    pergunta.style='font-size: 30px'
    escolha.style='margin-top: 5%;'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao 
    introducao.textContent = 'Uau!'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.textContent = 'Agora, faltam mais dois enigmas.'
    
    botao.innerHTML = ``
    
    
    
    
}

//errou enigma 1
function errouEnigma1(){
    console.log("estou no enole (resposta errada enigma 1)")
    escolha.innerHTML = ` `
    
    
    
    //arrumando estilo
    body.style = 'background: url(../img/errou_1.jpeg);'
    container.style ='width: 40%; margin: 5% 50% ; line-heigth: 450px;'
    introducao.style='margin-top: 20%;'
    pergunta.style='font-size: 50px'
    
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao
    introducao.innerHTML = 'Ahhhh, não foi dessa vez!<br>Errando o primeiro desafio, você perdeu a chance de ajudar Enola...'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.textContent = 'GAME OVER!'
    
    botao.innerHTML = `<button class="botaoProximo" onclick="primeiraTela()">Tentar Novamente</button>`
    
    
    
    
}

//pagina enigma 2
function enigma2(enigma2){
    console.log("estou no enigma2")
    escolha.innerHTML = ` 
    <p class='opcao' id='certa'>26</p>
    <p class='opcao' id='errada'>27</p>`
    
    //localizando o SIM e o NÃO
    let respostaSim = document.querySelector('#certa')
    let respostaNao = document.querySelector('#errada')
    
    //Atribuindo estilo  sim e não
    respostaSim.addEventListener('mouseover', function(){
        this.style = 'background: #f5d58c;'//muda de cor quando o mause passa em cima
    })
    respostaSim.addEventListener('mouseout', function(){
        this.style = 'background: #ffb200;'//quando o mause sai volta ao normal 
    })
    respostaNao.addEventListener('mouseover', function(){
        this.style = 'background:  #f5d58c;'//muda de cor quando o mause passa em cima
    })
    respostaNao.addEventListener('mouseout', function(){
        this.style = 'background: #ffb200;'//quando o mause sai volta ao normal 
    })
    
    //escolhendo sim ou não
    respostaNao.addEventListener('click', function(){
        errouEnigma2()
        imagem2.remove()
        imagem.innerHTML=''
        contador += 1
    })
    
    respostaSim.addEventListener('click', function(){
        telaEntreEnigmas2()
        imagem2.remove()
        imagem.innerHTML=''
    })
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //arrumando estilo
    document.body.style = 'background: url(../img/bg-enigma2.jpeg); background-size: 100%'
    container.style ='width: 80%; line-heigth: 450px;'
    introducao.style='margin-top: 5%;'
    pergunta.style='font-size: 30px'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao 
    introducao.innerHTML = 'A mãe de Enola amava flores!<br>O desafio abaixo tem a ver com esse tema.'

    imagem.innerHTML=`<img class='flores' src="../img/enigma2-pt1.jpeg" alt="">`

    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.textContent = 'Marque abaixo, a opção que contém o valor de'


    imagem2.innerHTML=`<img class='flores' src="../img/enigma2-pt2.jpeg" alt="">`

    
    botao.innerHTML = ``
    
    
    
    
}

//pagina errou enigma 2
function errouEnigma2(){
    console.log("estou no enole (resposta errada enigma 2)")
    escolha.innerHTML = ` `
    
    
    
    //arrumando estilo
    body.style = 'background: url(../img/errou_1.jpeg);'
    container.style ='width: 40%; margin: 5% 50% ; line-heigth: 450px;'
    introducao.style='margin-top: 20%;'
    pergunta.style='font-size: 50px'
    
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao
    introducao.innerHTML = 'Passou perto, mas Enola terá que seguir sem você...'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.textContent = 'GAME OVER!'
    
    botao.innerHTML = `<button class="botaoProximo" onclick="primeiraTela()">Tentar Novamente</button>`
    
    
    
    
}

//acertou enigma 2
function telaEntreEnigmas2(acertouEnigma2){
    console.log("estou na tela entre enigmas 2!")
    escolha.innerHTML = ` 
    <p class='opcao' id='sim'>SEGUIR</p>
    <p class='opcao' id='nao'>DESISTIR</p>`
    
    //localizando o SIM e o NÃO
    let respostaSim = document.querySelector('#sim')
    let respostaNao = document.querySelector('#nao')
    
    //Atribuindo estilo  sim e não
    respostaSim.addEventListener('mouseover', function(){
        this.style = 'background: rgb(154, 240, 154);'//muda de cor quando o mause passa em cima
    })
    respostaSim.addEventListener('mouseout', function(){
        this.style = 'background: green;'//quando o mause sai volta ao normal 
    })
    respostaNao.addEventListener('mouseover', function(){
        this.style = 'background:  rgb(231, 145, 145);'//muda de cor quando o mause passa em cima
    })
    respostaNao.addEventListener('mouseout', function(){
        this.style = 'background: red;'//quando o mause sai volta ao normal 
    })
    
    //escolhendo sim ou não
    respostaNao.addEventListener('click', function(){
        respondeNao()
        contador += 1
    })
    
    respostaSim.addEventListener('click', function(){
        enigma3()

    })
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //arrumando estilo
    document.body.style = 'background: #60B0AD;'
    container.style ='width: 60%;'
    introducao.style='margin-top: 5%;'
    pergunta.style='font-size: 30px'
    escolha.style='margin-top: 5%;'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao 
    introducao.innerHTML = 'Muito bem!!!<br>Vamos ao último enigma.'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.textContent = 'Mantenha a concentração!'
    
    botao.innerHTML = ``
    
    
    
    
}

//pagina enigma 
function enigma3(enigma3){
    console.log("estou no enigma3")
    escolha.innerHTML = ` 
    <p class='opcao' id='errada'>CORTESIA</p>
    <p class='opcao' id='certa'>CORAJOSA</p>`
    
    //localizando o SIM e o NÃO
    let respostaSim = document.querySelector('#certa')
    let respostaNao = document.querySelector('#errada')
    
    //Atribuindo estilo  sim e não
    respostaSim.addEventListener('mouseover', function(){
        this.style = 'background: #f5d58c;'//muda de cor quando o mause passa em cima
    })
    respostaSim.addEventListener('mouseout', function(){
        this.style = 'background: #ffb200;'//quando o mause sai volta ao normal 
    })
    respostaNao.addEventListener('mouseover', function(){
        this.style = 'background:  #f5d58c;'//muda de cor quando o mause passa em cima
    })
    respostaNao.addEventListener('mouseout', function(){
        this.style = 'background: #ffb200;'//quando o mause sai volta ao normal 
    })
    
    //escolhendo sim ou não
    respostaNao.addEventListener('click', function(){
        errouEnigma3()
        imagem2.remove()
        imagem.innerHTML=''
        contador += 1
    })
    
    respostaSim.addEventListener('click', function(){
        telaFinal()
        imagem2.remove()
        imagem.innerHTML=''
    })
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //arrumando estilo
    // document.body.style = 'background: url(../img/bg-enigma2.jpeg); background-size: 100%'
    container.style ='width: 80%; line-heigth: 450px;'
    introducao.style='margin-top: 5%;'
    pergunta.style='font-size: 30px'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao 
    introducao.innerHTML = 'Existem diversas formas de codificar palavras.<br>Abaixo, temos um modelo, chamado Cifra de Cezar, que consiste em trocar as letras da palavra de acordo com o deslocamento do anel, substituindo a letra do anel externo pela letra do anel interno.'

    imagem.innerHTML=`<img class='cifraCesar' src="/Volumes/Bya Biamc/RESILIA-original/exercicios/EnolaJogo/img/enigma3.jpg" alt="">`

    introducao2.innerHTML = 'Supondo que o deslocamento do anel fosse 1, teríamos o seguinte: a palavra AMOR “viraria” BNPS<br>A + 1 = B<br>M + 1 = N<br>O + 1 = P<br>R + 1 = S<br>'


    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.innerHTML = 'Considerando um deslocamento 5, decodifique a palavra <br><br> <b>HTWFOTXF:</b>'

   
    botao.innerHTML = ``
    
    
    
    
}
function errouEnigma3(){
    console.log("estou no enole (resposta errada enigma 3)")
    escolha.innerHTML = ` `
    
    
    
    //arrumando estilo
    body.style = 'background: url(../img/errou_1.jpeg);'
    container.style ='width: 40%; margin: 5% 50% ; line-heigth: 450px;'
    introducao.style='margin-top: 20%;'
    pergunta.style='font-size: 50px'
    
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao
    introducao.innerHTML = 'Às vezes, um detalhe faz toda a diferença.<br>Você chegou perto, mas a Enola terá que concluir esta missão sem sua companhia.'
    introducao2.remove()
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.textContent = 'GAME OVER!'
    
    botao.innerHTML = `<button class="botaoProximo" onclick="primeiraTela()">Tentar Novamente</button>`
    
    
    
    
}

//tela final
function telaFinal(acertouEnigma3){
    console.log("estou na tela final!")
    escolha.innerHTML = ` `
    
       
    //arrumando estilo
    document.body.style = 'background: #60B0AD;'
    container.style ='width: 60%;'
    introducao.style='margin-top: 5%;'
    pergunta.style='font-size: 30px'
    escolha.style='margin-top: 5%;'
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    //adiconando conteudo a tag p / variavel introducao 
    introducao.innerHTML = 'Você é incrível!<br> Desvendou os 3 enigmas de Enola Holmes'
    introducao2.remove()
    
    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    //adiconando conteudo a tag pergunta
    pergunta.textContent = 'Parabéns!'
    
    botao.innerHTML = `<button class="botaoProximo" onclick="primeiraTela()">Jogar Novamente</button>`
    
    
    
    
}




