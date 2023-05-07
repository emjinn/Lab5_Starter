// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('section img');
  const volumeSlider = document.getElementById('volume');
  const volumeImage = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', updateHorn);
  volumeSlider.addEventListener('input', updateVolume);

  function updateHorn(event) {
    const horn = event.target.value;
    switch (horn) {
      case 'air-horn':
        hornImage.src = 'assets/images/air-horn.svg';
        audio.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        hornImage.src = 'assets/images/car-horn.svg';
        audio.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        hornImage.src = 'assets/images/party-horn.svg';
        audio.src = 'assets/audio/party-horn.mp3';
        break;
      default:
        break;
    }
  }

  // When you change the volume on the slider
  function updateVolume(event) {
    const volume = event.target.value;

    // At 0 volume, the mute icon should be displayed
    if (volume == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    }
    // From 1 to < 33 volume, the first voluume level should be displayed
    else if (volume < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } 
    // From 33 to < 67 volume, the second volume level should be displayed
    else if (volume < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } 
    // Frrom 67 and up, the third volume level should be displayed
    else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
    audio.volume = volume / 100;
  }

  function playSound(event) {
    event.preventDefault();
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti()
    }
  }

  playButton.addEventListener('click', playSound);
}