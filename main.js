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

    // Mostra o pop-up quando a página carregar
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