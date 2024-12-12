var getUl = document.getElementById("todo-list");
var filterUl = document.getElementById("filterUl");



var allWork = [];
var completedWork = [];
var unCompletedWork = [];

function todoApp() {
  if (document.getElementById("todo-input").value) {
    var todoWork = document.getElementById("todo-input");

    // create li through js
    var todoLi = document.createElement("li");

    // create a p for storing text in it
    var todoTextBox = document.createElement("p");

    todoTextBox.setAttribute("class", "textParaForTodo");

    // create textnode for p
    var todoLiText = document.createTextNode(todoWork.value);

    // append text in todoTextBox (p)
    todoTextBox.appendChild(todoLiText);

    // append  todoTextBox (p) in todoLi (li)
    todoLi.appendChild(todoTextBox);
    // console.log(todoLi); | rough work

    // appendChild li with ul
    getUl.appendChild(todoLi);

    // storing todos in arrays
    allWork.push(todoWork.value);
    unCompletedWork.push(todoWork.value);

    console.log(todoWork.value);

    console.log(allWork);
    console.log(unCompletedWork);

    // empty the input field
    todoWork.value = "";

    // create buttons div for delete and edit button
    var buttons = document.createElement("div");
    // append in li
    todoLi.appendChild(buttons);

    buttons.setAttribute("id", "buttonsDiv");

    // For delete button

    // create delete button for li
    var delBtn = document.createElement("i");
    // text for delBtn
    // delBtnText = document.createTextNode('<i class="fa-solid fa-trash-can"></i>');
    // append delBtnText with delBtn
    // delBtn.appendChild(delBtnText);
    // append delBtn in buttons div
    buttons.appendChild(delBtn);

    // give a class to show icon to delBtn through set attribute
    delBtn.setAttribute("class", "fa-solid fa-trash-can");

    console.log(delBtn);
    // give a onclick to delBtn through set attribute
    delBtn.setAttribute("onclick", "deleteThis(this)"); // and (this) is a arrgumnet of 'deleteThis' function
    // delBtn.getAttribute('onclick','deleteThis(this)'); // and (this) is a arrgumnet of 'deleteThis' function

    // For edit button
    var editBtn = document.createElement("i"); // craete element span for edit
    // var editBtnText = document.createTextNode('E'); // create textnode for edit button
    // editBtn.appendChild(editBtnText); //append text  in edit button
    buttons.appendChild(editBtn); //append edit button in buttons div

    // give a class to show icon to delBtn through set attribute
    editBtn.setAttribute("class", "fa-solid fa-pen");
    // give a onclick to editBtn through set attribute
    editBtn.setAttribute("onclick", "editThis(this)"); // and (this) is a arrgumnet of 'editThis' function

    //for check button
    var checkBtn = document.createElement("i");

    checkBtn.setAttribute("class", "checkbutton");

    checkBtn.setAttribute("onclick", "checkIt(this)");

    todoLi.appendChild(checkBtn);

    // console.dir(todoLi)
  } else {
    alert("Kindly Enter Value");
  }
}

console.log(allWork);
console.log(unCompletedWork);

// Delete function
function deleteThis(e) {
  // e is a para meter

  console.log(e);
  console.log(e.parentNode.parentNode);
  // remove the li
  e.parentNode.parentNode.remove();

  var delWork = e.parentNode.parentNode.childNodes[0].textContent;

  console.log(delWork);

  unCompletedWork.forEach((work, ind) => {
    if (delWork == work) {
      unCompletedWork.splice(ind, 1);
      console.log(unCompletedWork);
    }
  });

  completedWork.forEach((work, ind) => {
    if (delWork == work) {
      completedWork.splice(ind, 1);
      console.log(completedWork);
    }
  });

  allWork.forEach((work, ind) => {
    if (delWork == work) {
      allWork.splice(ind, 1);
      console.log(allWork);
    }
  });

  // var deleteLi = e.parentNode.parentNode;
  // deleteLi.style.display = 'none';
  // e.parentNode.parentNode.innerHTML = '';
}

// Edit function
function editThis(e) {
  // get a desire work for desire li
  var dafaultWork = e.parentNode.parentNode.childNodes[0].textContent;
  // change the work through prompt
  var changeWork = prompt("Enter edit value", dafaultWork);
  // console.log(e.parentNode.parentNode.childNodes[0].textContent);
  e.parentNode.parentNode.childNodes[0].textContent = changeWork;

  unCompletedWork.forEach((work, ind) => {
    if (dafaultWork == work) {
      // for getting desire index number
      unCompletedWork[ind] = changeWork;
      console.log(unCompletedWork);
    }
  });

  completedWork.forEach((work, ind) => {
    if (dafaultWork == work) {
      completedWork[ind] = changeWork;
      console.log(completedWork);
    }
  });

  allWork.forEach((work, ind) => {
    if (dafaultWork == work) {
      allWork[ind] = changeWork;
      console.log(allWork);
    }
  });
}

// For check function
function checkIt(check) {
  console.log(check);
  check.classList.toggle("checked");
  var para = check.parentNode.childNodes[0]; // p
  // var para = document.querySelector('.textParaForTodo'); // p

  para.classList.toggle("lineThrough");

  var paraText = para.innerHTML; // text of p

  console.log(para.innerHTML);
  console.log(console.dir(para));
  // console.log( check.parentNode);
  // console.log( check.parentNode[0]);
  // console.log( check.Children(1));

  // paraTextIndex = allWork.indexOf(paraText) // index of allwork (desire todo index)

  // console.log(allWork.indexOf(paraText));

  var isMatch = "old";

  if (!completedWork[0]) {
    completedWork.push(paraText);

    unCompletedWork.forEach((work, ind) => {
      if (paraText == work) {
        // for getting desire index number of work from unCompletedWork
        unCompletedWork.splice(ind, 1);
        console.log(paraText, work, ind);
      }
    });
  } else {
    completedWork.forEach((todo, ind) => {
      console.log(ind, todo, paraText, "168");

      if (paraText !== todo) {
        console.log(ind, todo, paraText, "174");
        isMatch = "new";
      } else if (paraText == todo) {
        completedWork.splice(ind, 1); // un check pr remove krnay k lien
        console.log(completedWork);
        console.log(ind, todo, paraText, "178");
        unCompletedWork.push(todo);
        isMatch = "old";
      }
    });

    if (isMatch == "new") {
      completedWork.push(paraText);

      unCompletedWork.forEach((work, ind) => {
        if (paraText == work) {
          unCompletedWork.splice(ind, 1);
          console.log(paraText, work, ind);
        }
      });
    }
  }

  // if ( isPush == 'No'){

  //     completedWork.push(paraText); //push in completedWork
  //     isPush = 'Yes';

  // }else if (isPush == 'Yes') {

  //     var completedWorkIndex =  completedWork.indexOf(allWork[paraTextIndex]);
  //     completedWork.splice(completedWorkIndex,1); //delete todo from completedWork
  //     isPush = 'No'

  // }

  // unCompletedWork.pop(allWork[paraTextIndex]); //pop todo from UncompletedWork

  // console.log(completedWork);
  // console.log(unCompletedWork);
  // console.log(allWork);

  // // console.log(paraText);
  // console.log(para);

  // document.getElementById('buttonsDiv').style.textDecoration = 'none';
}



// ----------- allWork filter li ----------------
// var allWorkLis;
// function allWorkInnnerHTML() {
// // var filterUl = document.getElementById('filterUl');
// // console.log(filterUl);
// // console.log(allWork);

// allWork.forEach((work) => {

//     console.log(work);

//     // allWorkLis = filterUl;

//     getUl.innerHTML += `
// <li>
//     <p >${work}</p>
//     <div id="buttonsDiv">
//       <i class="fa-solid fa-trash-can" onclick="deleteThis(this)"></i
//       ><i class="fa-solid fa-pen" onclick="editThis(this)"></i>
//     </div>
//     <i class="checkbutton" onclick="checkIt(this)"></i>
// </li>

//     `;

// // console.log(allWorkLis);
// // console.log(filterUl.innerHTML);

// })
// }

// for allWork ---------------
function allwork() {
  if (getUl.hasAttribute("class", "none")) {
    getUl.classList.replace("none", "show");
    console.log("line 353");
  } else {
    getUl.classList.add("show");
  }

  if (!filterUl.hasAttribute("class", "none")) {
    filterUl.classList.add("none");
    console.log("line 353");
  } else {
    filterUl.classList.add("none");
  }
  // getUl.classList.add('show');
  // filterUl.classList.add('none');

  //     console.log('line 350');
  //     if(getUl.hasAttribute('class','none')){
  //        getUl.classList.add('show');
  //        console.log('line 353');
  //     }

  // console.log('between');

  //     if(!filterUl.hasAttribute('class','none')){
  //        filterUl.classList.add('none');
  //        console.log('inner filterul');
  //     }
  // console.log('line 361');
  // var filterUl = document.getElementById('filterUl');
  // console.log(filterUl);
  // getUl.innerHTML = '';
  // allWorkInnnerHTML();
  // console.log('after calling the function');
  // console.log(allWorkLis.innerHTML);
  // filterUl.classList.remove('none');
  // filterUl.innerHTML = allWorkLis.innerHTML;

  // allWork.forEach((work) => {

  //     console.log(work);

  //     filterUl.innerHTML += `

  //     <li>
  //     <p >${work}</p>
  //     <div id="buttonsDiv">
  //       <i class="fa-solid fa-trash-can" onclick="deleteThis(this)"></i
  //       ><i class="fa-solid fa-pen" onclick="editThis(this)"></i>
  //     </div>
  //     <i class="checkbutton" onclick="checkIt(this)"></i>
  //   </li>

  //     `

  // })
}

// for completedwork ---------------
function completedwork() {
  filterUl.innerHTML = "";

  if (filterUl.hasAttribute("class", "none")) {
    filterUl.classList.replace("none", "show");
    console.log("if of replace");
  } else {
    filterUl.classList.add("show");
    console.log("else of show");
  }

  if (!getUl.hasAttribute("class", "none")) {
    getUl.classList.add("none");
    console.log("line 353");
  } else {
    getUl.classList.add("none");
  }

  // getUl.classList.add('none');
  // filterUl.classList.add('show');

  // if(!getUl.hasAttribute('class','none')){
  //     getUl.classList.add('none');
  // }

  // if(filterUl.hasAttribute('class','none')){
  //     filterUl.classList.remove('none');
  // }

  if (completedWork.length < 1) {
    filterUl.innerHTML += `

        
        <p class='nowork'>No done work are here </p>
       
    
        `;
  } else {
    completedWork.forEach((work) => {
      console.log(work);

      filterUl.innerHTML += `

        <li>
        <p >${work}</p>
   
        <span class='done'>Done</span>

      </li>
    
        `;
    });
  }
}

// for uncompletedwork ---------------
function uncompletedwork() {
  filterUl.innerHTML = "";

  if (filterUl.hasAttribute("class", "none")) {
    filterUl.classList.replace("none", "show");
    console.log("if of replace");
  } else {
    filterUl.classList.add("show");
    console.log("else of show");
  }

  if (!getUl.hasAttribute("class", "none")) {
    getUl.classList.add("none");
    console.log("line 353");
  } else {
    getUl.classList.add("none");
  }

  // getUl.classList.add('none');
  // filterUl.classList.add('show');

  // if(!getUl.hasAttribute('class','none')){
  //     getUl.classList.add('none');
  // }

  // if(filterUl.hasAttribute('class','none')){
  //     filterUl.classList.remove('none');
  // }

  if (unCompletedWork.length < 1) {
    filterUl.innerHTML += `

      
        <p class='nowork'>No pending work are here </p>
       
    
        `;
  } else {
    unCompletedWork.forEach((work) => {
      console.log(work);

      filterUl.innerHTML += `

        <li>
        <p >${work}</p>
   
        <span class='pending'>Pending</span>

      </li>
    
        `;
    });
  }
}

// for completedwork ---------------
// function uncompletedwork() {

//     getUl.classList.add('none');

// }

// for completedwork ---------------
// function completedwork() {

//     document.getElementById('todo-list').style.display = 'none';
//     var filterUl = document.getElementById('filterUl');
//     console.log(filterUl);
//     filterUl.classList.remove('none');

//     completedWork.forEach((work) => {

//         console.log(work);

//         filterUl.innerHTML += `

//         <li>
//         <p >${work}</p>
//         <div id="buttonsDiv">
//           <i class="fa-solid fa-trash-can" onclick="deleteThis(this)"></i
//           ><i class="fa-solid fa-pen" onclick="editThis(this)"></i>
//         </div>
//         <i class="checkbutton" onclick="checkIt(this)"></i>
//       </li>

//         `

//     })

// }

// // for uncompletedwork ---------------
// function uncompletedwork() {

//     document.getElementById('todo-list').style.display = 'none';
//     var filterUl = document.getElementById('filterUl');
//     console.log(filterUl);
//     filterUl.classList.remove('none');

//     unCompletedWork.forEach((work) => {

//         console.log(work);

//         filterUl.innerHTML += `

//         <li>
//         <p >${work}</p>
//         <div id="buttonsDiv">
//           <i class="fa-solid fa-trash-can" onclick="deleteThis(this)"></i
//           ><i class="fa-solid fa-pen" onclick="editThis(this)"></i>
//         </div>
//         <i class="checkbutton" onclick="checkIt(this)"></i>
//       </li>

//         `

//     })

// }

console.log(completedWork);
console.log(unCompletedWork);
console.log(allWork);

// console.log(!getUl.hasAttribute('class','apple'));
console.log(!filterUl.hasAttribute("class", "none"));

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
