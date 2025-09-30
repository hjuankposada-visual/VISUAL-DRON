document.addEventListener('DOMContentLoaded', () => {
  const chatToggle = document.getElementById('chat-toggle-btn');
  const chatPopup = document.getElementById('chat-popup');

  if (chatToggle && chatPopup) {
    // Abrir/cerrar el chat al hacer clic en el botón
    chatToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que se cierre inmediatamente
      const isVisible = chatPopup.style.display === 'block';
      chatPopup.style.display = isVisible ? 'none' : 'block';
    });

    // Cerrar el chat al hacer clic fuera de él
    document.addEventListener('click', (e) => {
      if (!chatPopup.contains(e.target) && e.target !== chatToggle) {
        chatPopup.style.display = 'none';
      }
    });
  }
});
