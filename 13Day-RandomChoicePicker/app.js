const textarea = document.querySelector('#textarea'),
  tagsContainer = document.querySelector('.tags');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 30);
    randomSelect();
  }
});



function createTags(input) {
  const tagsArr = input.split(',').filter(item => item.trim() !== '').map(tag => tag.trim());

  tagsContainer.innerHTML = '';

  tagsArr.forEach((item) => {
    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.innerText = item;
    tagsContainer.append(tag);
  });

}

function randomSelect() {
  const time = 10;

  const interval = setInterval(() => {
    let randomTag = pickRandomTag();

    activeTag(randomTag);
    setTimeout(() => {
      unActiveTag(randomTag);
    }, 100);

  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    let randomTag = pickRandomTag();
    activeTag(randomTag);
  }, time * 100);

}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function activeTag(tag) {
  tag.classList.add('tag-active');
}

function unActiveTag(tag) {
  tag.classList.remove('tag-active');
}