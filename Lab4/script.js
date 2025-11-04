const list = document.querySelector('.todolist');
const addButton = document.querySelector('.addButton');
const inputElement = document.querySelector('.inputElement');

const allBtn = document.querySelector('.allBtn');
const activeBtn = document.querySelector('.activeBtn');
const completeBtn = document.querySelector('.completeBtn');

addButton.addEventListener('click', addTodoItems);

let toDoArray = [];
let filter = 'all'; 

function render() {
  list.innerHTML = ''; 

  let filteredArray = [];
  if (filter === 'all') filteredArray = toDoArray;
  else if (filter === 'active') filteredArray = toDoArray.filter(function(item) { return !item.completed; });
  else if (filter === 'complete') filteredArray = toDoArray.filter(function(item) { return item.completed; });

  for (let i = 0; i < filteredArray.length; i++) {
    let divElement = document.createElement('div');
    let listElement = document.createElement('li');
    listElement.textContent = filteredArray[i].text;

    let completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
      const index = toDoArray.indexOf(filteredArray[i]);
      toDoArray[index].completed = true; 
      render();
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      const index = toDoArray.indexOf(filteredArray[i]);
      toDoArray.splice(index, 1);
      render();
    });

    divElement.appendChild(listElement);
    divElement.appendChild(completeButton);
    divElement.appendChild(deleteButton);
    list.appendChild(divElement);
  }
}

function addTodoItems() {
  let input = inputElement.value;
  if (input.trim() === '') return;

  list.innerHTML = '';
  toDoArray.push({
    text: input,
    completed: false
  });
  render();

  inputElement.value = '';
}

allBtn.addEventListener('click', function() {
  filter = 'all';
  render();
});

activeBtn.addEventListener('click', function() {
  filter = 'active';
  render();
});

completeBtn.addEventListener('click', function() {
  filter = 'complete';
  render();
});
