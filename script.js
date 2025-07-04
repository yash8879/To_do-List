let list = JSON.parse(localStorage.getItem("todoList")) || [];



function addItem() {
  const taskInput = document.querySelector(".input-field");
  const taskP = document.querySelector(".taskP");
  const taskText = taskInput.value;
  const taskPriority = taskP.value;


  if (taskInput.value === "") {
    alert("pls enter some value");
    return;
  }
  list.push({
    title: taskText,
    priority: taskPriority
  });
  console.log(list);

  renderList();
  taskInput.value = "";
  taskP.value = ""
    localStorage.setItem("todoList", JSON.stringify(list));

  
}

function renderList() {
  let listStr = "";
  for (let i = 0; i < list.length; i++) {
    listStr += `<li class="task-item">${list[i].title}-${list[i].priority} 
    <button class = "delete-btn" onclick = "deleteItem(${i})">&#128465;</button></li>`;
  }
  const taskList = document.querySelector(".Lists");
  // taskList.innerHTML += `<li class="task-item">${taskText}</li>`;  // alternative of loop
  taskList.innerHTML = listStr;
}

function deleteItem(index) {
  list.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(list));
  console.log(list);
  renderList();
}
