import './App.css';
import * as React from 'react';
import HeaderComponent from './components/HeaderComponent';
import ChatInputComponent from './components/ChatInputComponent';
import Container from '@mui/material/Container';
import ChatMessage from './components/ChatMessage';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import HelloComponent from './components/HelloComponent';
// import axios from 'axios';

var respostaSimulada = "Aqui estão as principais diferenças:\n\n1. Tamanho e Complexidade: O GPT-4 é mais avançado e complexo em comparação com o GPT-3.5. Ele foi treinado com mais dados e possui uma arquitetura mais sofisticada, o que permite um entendimento e geração de texto mais refinados.\n\n2. Capacidade de Entendimento: O GPT-4 tem uma melhor compreensão do contexto e pode manter a coerência em conversas mais longas. Isso é crucial para aplicações que exigem interações detalhadas e complexas.\n\nFonte: https://www.analyticsvidhya.com/blog/2021/09/gpt-4-vs-gpt-3-5-what-are-the-differences/";
var promptsSuggestionsSimuladas = [

]; 


function App() {
  let [thinking, setThinking] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [promptsSuggestions, setPromptsSuggestions] = React.useState(promptsSuggestionsSimuladas);

  let appendMessage = (message, direction) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length,
        message: message,
        direction: direction,
      },
    ]);
  };

  let sendMessage = async (message) => {
    console.log('Prompt enviado:', message);
    appendMessage(message, 'sent');
    await new Promise(resolve => setTimeout(resolve, 300));
    setThinking(true);

    // Simulando um delay de 6 segundos para a resposta
    await new Promise(resolve => setTimeout(resolve, 3000));
    setThinking(false);
    appendMessage(respostaSimulada, 'received');

    // try {
    //   const response = await axios.post('YOUR_API_URL', { message });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setThinking(false);
    // }
  }

  return (
    <div className="App">
      <HeaderComponent />

      <div className="chat-container">
        <Container maxWidth="md">
          {
            messages.map((message) => {
              return (
                <ChatMessage key={message.id} message={message.message} direction={message.direction} />
              )
            })
          }
        </Container>
      </div>

      {messages.length === 0 ?
          <div className="hello-container">
          <Container maxWidth="md">
            <HelloComponent promptsSuggestions={promptsSuggestions} sendMessageHandle={sendMessage}/>
          </Container>
          </div>
        : null}

      <div className="chat-input-container">
        <Container maxWidth="md">
          <Box sx={{ width: '100%', minHeight: '24px' }}> {thinking ? <LinearProgress />  : null}</Box>
          <ChatInputComponent onSubmit={sendMessage} thinking={thinking}/>
        </Container>
      </div>
    </div>
  );
}

export default App;
