const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDoWithFireworks(event) {
  const li = event.target.parentElement;
  const rect = li.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  startFireworks(centerX, centerY);

  setTimeout(() => {
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }, 500);
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const checkButton = document.createElement("button");
  checkButton.innerText = "✅";
  checkButton.addEventListener("click", deleteToDoWithFireworks);
  checkButton.classList.add("check-button");

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "delete-btn");
  deleteButton.innerText = "\u00d7";
  deleteButton.addEventListener("click", (event) => {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  });

  li.appendChild(checkButton);
  li.appendChild(span);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  if (toDos.length >= 4) {
    alert("You have too many goals right now. Maybe it's time to clear one!");
    return;
  }

  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function startFireworks(x, y) {
  const canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#FF69B4"];

  for (let i = 0; i < 50; i++) {
    particles.push({
      x,
      y,
      dx: (Math.random() - 0.5) * 6,
      dy: (Math.random() - 0.5) * 6,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
      if (p.life <= 0) {
        particles.splice(index, 1);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.closePath();

        p.x += p.dx;
        p.y += p.dy;
        p.life -= 1;
      }
    });

    if (particles.length > 0) {
      requestAnimationFrame(animate);
    } else {
      document.body.removeChild(canvas);
    }
  }

  animate();
}
function doubleInputSize() {
  toDoInput.style.width = "600px";
  toDoInput.style.padding = "15px";
  toDoInput.style.fontSize = "1.5rem";
  toDoInput.style.transition = "all 0.5s";
}

doubleInputSize();
