import { useState } from 'react'
import { Container, Paragrafo, Title, Input, Button, GlobalStyle, Resposta } from './style'

export function Home() {

  let pergunta = "";
  const [resposta, setResposta] = useState("");

  const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
  ];

  function fazerPergunta(){
    if(pergunta == ""){
      alert('Digite sua pergunta');
      return;
    }

    const totalRespostas = respostas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas);
    setResposta(respostas[numeroAleatorio])
  }
  
  return (
      <Container>
        <GlobalStyle />
        <img src="https://gist.githubusercontent.com/maykbrito/0acdf4ce919838ffed50915a31fc5b23/raw/6f4dd01ec3116428ec4c99255944cb9ac7927590/cristal-ball.svg" alt="Imagem de uma bola de cristal"></img>
        <Title>Vou revelar seu destino!</Title>
        <Paragrafo>Clique em fazer pergunta para que seu destino seja revelado.</Paragrafo>
        <Input type="text" placeholder="Digite sua pergunta" onChange={e => pergunta = e.target.value}/>
        <Button onClick={fazerPergunta}>Fazer Pergunta</Button>
        <Resposta>{resposta}</Resposta>
      </Container>
  )
}
