function startTodo() {

}

let todoCounter = 0;

function addTodo() {
    todoCounter++;

    const tableRowContent = `
        <tr>
            <td>
                <label for="todo_text_${todoCounter}">Todo Text ${todoCounter}</label>
                <input id ="todo_text_${todoCounter}" type="text" value="mein erstes todo">
            </td>
            <td>
                <label for="todo_done_${todoCounter}">Todo Done ${todoCounter}</label>
                <input id ="todo_done_${todoCounter}" type="checkbox" >
            </td>
        </tr>
    `

    const tableBody = document.getElementById("todoContainer");
    tableBody.innerHTML += tableRowContent;

    document.getElementById("numberOfTasks").textContent = todoCounter;

    const checked = document.querySelectorAll('#todoContainer input:checked');

    document.getElementById("openTasks").textContent = todoCounter - checked.length;

}
