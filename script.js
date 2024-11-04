const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];


function renderElements (tasks) {
  const tasksList = document.getElementsByClassName("tasks__list")[0];

  tasksList.innerHTML ="";
  
for (i = 0; i < tasks.length; i++) {

    const newTask = createTaskItem(tasks[i])

    tasksList.insertAdjacentElement("beforeend", newTask);
    console.log(tasks[i])

  }
  
}


renderElements(tasks)



function createTaskItem (task) {

  const li = document.createElement("li");
  li.classList.add("task__item");

  const div = document.createElement("div");
  div.classList.add("task-info__container");

  const span = document.createElement("span");
  span.classList.add("task-type");

  if (task.type == 'Urgente') {
    span.classList.add("span-urgent");
  }else if(task.type == 'Importante') {
    span.classList.add('span-important')
  }else if(task.type == 'Normal') {
    span.classList.add("span-normal")
  }

  const p = document.createElement("p");
  p.innerText = task.title;

  const button = document.createElement("button");
  button.classList.add("task__button--remove-task")

  button.addEventListener('click', function(){
    
    let buttonDelet = tasks.indexOf(task);
    tasks.splice(buttonDelet, 1)

    
    renderElements(tasks);

  })


li.appendChild(div);
li.appendChild(button);
div.appendChild(span);
div.appendChild(p);

return  li;

}



const form = document.querySelector('.form__container');
console.log(form)
form.addEventListener("submit", function(event){
  event.preventDefault();

  const inputName = document.querySelector('.form__input--text');
  const inputSelect = document.querySelector('.form__input--priority');

  const title = inputName.value;
  const type = inputSelect.value;

  if (title === '' || type === '') {
    return;
  }

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

  const taskAdicionado = {title: title, type: capitalizeFirstLetter(type)};
  tasks.push(taskAdicionado);

  renderElements(tasks);

  inputName.value = '';
  inputSelect.value = '';

  
})

renderElements(tasks);