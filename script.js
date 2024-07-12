document.getElementById('submitBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput');
    const todoText = textInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById('todoList');

        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = todoText;

        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoList.appendChild(todoItem);

        textInput.value = '';
    }
});

document.getElementById('clearBtn').addEventListener('click', function() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
});