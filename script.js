<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chat Flotante</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    #chat-toggle-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #0078d7;
      color: white;
      border: none;
      border-radius: 50px;
      padding: 12px 20px;
      cursor: pointer;
      z-index: 1001;
      box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    }

    #chat-popup {
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: 300px;
      height: 400px;
      background-color: white;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      display: none;
      z-index: 1000;
      border-radius: 8px;
      overflow: hidden;
      display: none;
      flex-direction: column;
    }

    .chat-header {
      background-color: #0078d7;
      color: white;
      padding: 10px;
      font-weight: bold;
      text-align: center;
    }

    .chat-body {
      padding: 15px;
      flex: 1;
      overflow-y: auto;
    }

    .chat-input {
      display: flex;
      border-top: 1px solid #ccc;
    }

    .chat-input input {
      flex: 1;
      padding: 10px;
      border: none;
      outline: none;
    }

    .chat-input button {
      background-color: #0078d7;
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <!-- Botón flotante para abrir/cerrar el chat -->
  <button id="chat-toggle-btn">💬 Chat</button>

  <!-- Ventana flotante del chat -->
  <div id="chat-popup">
    <div class="chat-header">Chat con nosotros</div>
    <div class="chat-body" id="chat-body">
      <p>Hola 👋 ¿En qué podemos ayudarte?</p>
    </div>
    <div class="chat-input">
      <input type="text" id="chat-input" placeholder="Escribe tu mensaje..." />
      <button id="chat-send">Enviar</button>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const chatToggle = document.getElementById('chat-toggle-btn');
      const chatPopup = document.getElementById('chat-popup');
      const chatInput = document.getElementById('chat-input');
      const chatSend = document.getElementById('chat-send');
      const chatBody = document.getElementById('chat-body');

      // Abrir/cerrar chat
      chatToggle.addEventListener('click', () => {
        chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
      });

      // Cerrar chat al hacer clic fuera
      document.addEventListener('click', (e) => {
        if (!chatPopup.contains(e.target) && e.target !== chatToggle) {
          chatPopup.style.display = 'none';
        }
      });

      // Enviar mensaje
      chatSend.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message !== '') {
          const userMsg = document.createElement('p');
          userMsg.textContent = `Tú: ${message}`;
          chatBody.appendChild(userMsg);
          chatInput.value = '';
          chatBody.scrollTop = chatBody.scrollHeight;
        }
      });

      // Enviar con Enter
      chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          chatSend.click();
        }
      });
    });
  </script>
</body>
</html>
