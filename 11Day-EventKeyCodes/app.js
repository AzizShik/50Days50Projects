const container = document.querySelector('.container');

const createKeyContainer = () => {
  container.innerHTML =
    `
  <div class="key">
      <span>event.key</span>
      <span class="key-span" id="keyInfo"></span>
    </div>
    <div class="key">
      <span>event.keyCode</span>
      <span class="key-span" id="keyCodeInfo"></span>
    </div>
    <div class="key">
      <span>event.code</span>
      <span class="key-span" id="codeInfo"></span>
    </div>
  `;
};

const keyboardHundler = (e) => {
  createKeyContainer();
  const keyEl = document.getElementById('keyInfo');
  const keyCodeEl = document.getElementById('keyCodeInfo');
  const codeInfoEl = document.getElementById('codeInfo');

  keyEl.textContent = e.key;
  keyCodeEl.textContent = e.keyCode;
  codeInfoEl.textContent = e.code;

  console.log(e);
  
};

window.addEventListener('keypress', keyboardHundler);