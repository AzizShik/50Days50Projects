window.addEventListener('load', () => {

  const todoInput = document.querySelector('.todo__input'),
    todoForm = document.querySelector('.todo__form'),
    todoList = document.querySelector('.todo__list');

  todoForm.addEventListener('submit', formHandler);

  let localArr = [];

  function formHandler(e) {
    e.preventDefault();

    createTodoItem(todoInput.value);

    localArr.push(todoInput.value);
    localStorage.setItem('todo', localArr)
    todoInput.value = '';
  }

  function localLoad() {
    if (localStorage.getItem('todo')) {
      const todo = localStorage.getItem('todo').split(',');
      todo.forEach(item => {
        createTodoItem(item);
      });
    }
  }

  function createTodoItem(value) {
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo__li');
    todoLi.textContent = value;
    todoList.insertAdjacentElement('beforeend', todoLi);
  }

  localLoad();

  todoList.addEventListener('click', todoListHandler);
  todoList.addEventListener('contextmenu', todoDeleteHandler);

  function todoListHandler(e) {
    const el = e.target;
    if (el.classList.contains('todo__li')) {
      el.classList.toggle('check');
    }
  }

  function todoDeleteHandler(e) {
    e.preventDefault();
    e.target.remove();
    const todosLS = localStorage.getItem('todo').split(',');

    todosLS.forEach((item, idx) => {
      if(item === e.target.textContent) {
        console.log(idx);
        todosLS.splice(idx, 1)
      }
    });

    localStorage.setItem('todo', todosLS)
  }



});