let todoList = [];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({ item: todoItem, date: todoDate });
    inputElement.value = '';
    dateElement.value = '';
    console.log(todoList);
    displayItems();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let { item, date } = todoList[i];
        newHtml += `
<div class="grid-container">
<span>${item}</span>
<span>${date}</span>
<button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
</div>
`;
    }
    containerElement.innerHTML = newHtml;
}