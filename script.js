const td = document.getElementById("td");
const addBtn = document.getElementById("addBtn");
const tdList = document.getElementById("tdlist");

function addTodo() {
  const newtdText = td.value;
  td.value = " ";

  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const tdtext = document.createElement("span");
  const delBtn = document.createElement("button");

  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(tdtext);
  listItem.appendChild(delBtn);

  tdtext.textContent = newtdText;
  delBtn.textContent = "Delete";
  tdList.append(listItem);

  delBtn.addEventListener("click", function () {
    tdList.removeChild(listItem);
  });
}
addBtn.addEventListener("click", addTodo);
