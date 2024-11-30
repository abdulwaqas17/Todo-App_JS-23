var getUl = document.getElementById('todo-list');
// var todoWork = document.getElementById('todo-input').value;

// console.log(); // Rough Work

    console.log('hello');

function todoApp() {

    if (document.getElementById('todo-input').value) {

        
    var todoWork = document.getElementById('todo-input');

    // create li through js 
    var todoLi = document.createElement('li');

    // create textnode for li 
    var todoLiText = document.createTextNode(todoWork.value);

    // append textnode with li 
    todoLi.appendChild(todoLiText);

    // console.log(todoLi); | rough work

    // appendChild li with ul 
    getUl.appendChild(todoLi);

    // empty the input field 
    todoWork.value = '';

    // create buttons div for delete and edit button 
    var buttons = document.createElement('div');
    // append in li 
    todoLi.appendChild(buttons);


    // For delete button 

    // create delete button for li 
    var delBtn = document.createElement('i');
    // text for delBtn 
    // delBtnText = document.createTextNode('<i class="fa-solid fa-trash-can"></i>');
    // append delBtnText with delBtn 
    // delBtn.appendChild(delBtnText); 
    // append delBtn in buttons div
    buttons.appendChild(delBtn);

    // give a class to show icon to delBtn through set attribute
    delBtn.setAttribute('class','fa-solid fa-trash-can');

    console.log(delBtn);
    // give a onclick to delBtn through set attribute
    delBtn.setAttribute('onclick','deleteThis(this)'); // and (this) is a arrgumnet of 'deleteThis' function
    // delBtn.getAttribute('onclick','deleteThis(this)'); // and (this) is a arrgumnet of 'deleteThis' function


    // For edit button 
    var editBtn = document.createElement('i'); // craete element span for edit
    // var editBtnText = document.createTextNode('E'); // create textnode for edit button
    // editBtn.appendChild(editBtnText); //append text  in edit button 
    buttons.appendChild(editBtn); //append edit button in buttons div

    // give a class to show icon to delBtn through set attribute
    editBtn.setAttribute('class','fa-solid fa-pen');
    // give a onclick to editBtn through set attribute
    editBtn.setAttribute('onclick','editThis(this)'); // and (this) is a arrgumnet of 'editThis' function

    } else {
        alert('Kindly Enter Value')
    }

}




// Delete function 
function deleteThis(e) { // e is a para meter 

    console.log(e);
    console.log(e.parentNode.parentNode);
    // remove the li 
    e.parentNode.parentNode.remove();

    // var deleteLi = e.parentNode.parentNode;  
    // deleteLi.style.display = 'none';
    // e.parentNode.parentNode.innerHTML = '';

}



// Edit function 
function editThis(e) {

    // get a desire work for desire li 
    var dafaultWork = e.parentNode.parentNode.childNodes[0].textContent;
    // change the work through prompt 
    var changeWork = prompt('Enter edit value' , dafaultWork);
    console.log(e.parentNode.parentNode.childNodes[0].nodeValue);
    e.parentNode.parentNode.childNodes[0].textContent = changeWork;

}



// getUl.forEach( (li) => {

//     li.classList.toggle('checked');

// });

// getUl.forEach()


























// // Get elements
// const todoForm = document.getElementById('todo-form');
// const todoInput = document.getElementById('todo-input');
// const todoList = document.getElementById('todo-list');
// const filters = document.querySelectorAll('.filters button');

// // Initialize todo array
// let todos = [];

// // Function to render todo list
// function renderTodoList() {
//     todoList.innerHTML = '';
//     todos.forEach((todo, index) => {
//         const todoItem = document.createElement('li');
//         todoItem.textContent = todo.text;
//         todoItem.classList.add('todo-item');
//         if (todo.completed) {
//             todoItem.classList.add('completed');
//         }
//         todoList.appendChild(todoItem);
//     });
// }
// // Function to add todo
// function addTodo(text) {
//     const todo = {
//         text,
//         completed: false
//     };
//     todos.push(todo);
//     renderTodoList();
// }

// // Function to toggle todo completion
// function toggleTodoCompletion(index) {
//     todos[index].completed = !todos[index].completed;
//     renderTodoList();
// }

// // Event listeners
// todoForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const text = todoInput.value.trim();
//     if (text) {
//         addTodo(text);
//         todoInput.value = '';
//     }
// });


// // filters.forEach((filter) => {
// //     filter.addEventListener('click', () => {
// //         filters.forEach((f) => f.classList.remove('active'));
// //         filter.classList.add
// //     }
// // }