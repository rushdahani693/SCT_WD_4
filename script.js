let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(pageId).style.display = "block";
  document.getElementById("sidebar").classList.remove("active");
}

function addTask() {
  const text = document.getElementById("taskText").value.trim();
  const date = document.getElementById("taskDate").value;
  if (!text) return alert("Enter a task!");
  tasks.push({ text, date, completed: false });
  document.getElementById("taskText").value = "";
  document.getElementById("taskDate").value = "";
  saveAndRender();
}

function toggleTask(index
