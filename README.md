# Landing Page com Pop-up de RA

## Descrição do Projeto

Este projeto é uma **Landing Page** desenvolvida para promover um curso de **Desenvolvimento Web para Iniciantes**. A página tem como objetivo captar o interesse dos visitantes e incentivá-los a se inscrever no curso. O diferencial desta landing page é a integração com **Realidade Aumentada (RA)**, que oferece uma experiência mais interativa e envolvente para o usuário.

## Funcionalidades

- **Landing Page Atraente**: A página é projetada para captar a atenção dos visitantes com um design moderno e informações relevantes sobre o curso.
- **Pop-up de Realidade Aumentada (RA)**: Quando o visitante acessa a página, um pop-up de RA é exibido. Isso utiliza a câmera do dispositivo para criar uma experiência interativa, reforçando a mensagem da página e incentivando a ação.
- **Integração com Vídeo**: O pop-up exibe um vídeo em tempo real usando a câmera do usuário, oferecendo uma abordagem personalizada e inovadora.
- **Botão de Fechar**: Permite que o usuário feche o pop-up e continue explorando a página.

## Aspectos Técnicos

- **HTML**: Estrutura básica da página, incluindo o cabeçalho, conteúdo principal e pop-up.
- **CSS**: Estilos personalizados para o layout da página, incluindo a estilização do pop-up de RA e o design geral.
- **JavaScript**: Lógica para exibir e ocultar o pop-up de RA, bem como para acessar a câmera do dispositivo e exibir o vídeo.

### Estrutura do Projeto

- `index.html`: O arquivo HTML principal da landing page.
- `styles.css`: Arquivo de estilos CSS para a página e o pop-up.
- `main.js`: Arquivo JavaScript que gerencia a exibição do pop-up de RA e a integração com a câmera do dispositivo.

### Código HTML

O código HTML define a estrutura da página e inclui a integração com o JavaScript e o CSS:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Landing Page com Pop-up de RA</title>  
</head>
<body>

  <!-- Cabeçalho -->
  <header>   
    <h1>Curso de Desenvolvimento Web para Iniciantes</h1>
    <p>Front-end web development</p>
  </header>

  <!-- Conteúdo principal -->
  <div class="container">
    <h2>Mude seu futuro!</h2>
    <p>Essa é a sua oportunidade para entrar no mercado de tecnologia. Entre em contato e saiba mais.</p>
    <button class="cta-button">Saiba Mais</button>
  </div>

  <!-- Pop-up de Realidade Aumentada -->
  <div id="popup" class="popup">
    <video id="video" autoplay></video>
    <div class="message">
      <p>Você vai perder a chance de mudar seu futuro?</p>
      <span>🤔</span>
    </div>
    <button id="close-btn">Fechar</button>
  </div>
  
  <script src="main.js"></script>
</body>
</html>

Código CSS
Os estilos CSS personalizados para a página e o pop-up:

css

    body {
    font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    header {
      background-image: url(capa.jpeg);
      background-color: #007bff;      
      color: white;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      font-size: 36px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }

    header p {
      font-size: 18px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }

    .container {
      padding: 40px 20px;
      text-align: center;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.467);
    }

    .container p {
      font-size: 18px;
    }

    .cta-button {
      background-color: #28a745;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .cta-button:hover {
      background-color: #218838;
    }

    /* Estilos para o Pop-up */
    #popup {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      justify-content: center;
      align-items: center;
      z-index: 1000;
      flex-direction: column;
    }

    #popup video {
      width: 300px;
      height: auto;
      border-radius: 10px;
    }

    .message {
      color: #fff;
      font-size: 20px;
      text-align: center;
      margin-top: 20px;      
    }

    .message p {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }

    #close-btn {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      background-color: #f44336;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    #close-btn:hover {
      background-color: #d32f2f;
    }

Código JavaScript
O JavaScript para gerenciar o pop-up de RA:

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close-btn');
  const video = document.getElementById('video');

  function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        video.srcObject = stream;
      })
      .catch(function(error) {
        console.error('Erro ao acessar a câmera:', error);
      });
  }

  popup.style.display = 'flex';
  startCamera();

  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    const stream = video.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(function(track) {
        track.stop();
      });
      video.srcObject = null;
    }
  });
});


Como Executar o Projeto
1. Clone o repositório:
bash
git clone https://github.com/SouzVitor/Landing-Page-com-Pop-up-de-RA.git

2. Navegue para o diretório do projeto:
bash
cd Landing-Page-com-Pop-up-de-RA

Contribuições
Se você deseja contribuir para este projeto, fique à vontade para abrir uma issue ou enviar um pull request. Suas sugestões e melhorias são sempre bem-vindas!

Licença
Este projeto está licenciado sob a Licença MIT.


