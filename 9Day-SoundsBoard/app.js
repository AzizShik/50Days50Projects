const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const stopSound = () => {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};

sounds.forEach(sound => {

  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = sound;

  document.querySelector('.btns').append(btn);

  btn.addEventListener('click', () => {

    stopSound();

    document.getElementById(sound).play();
  });

});