// 1. Where we store our staff
const staff = [];

// 2. Grab the elements we need
const form = document.getElementById("staff-form");
const nameInput = document.getElementById("staff-name");
const roleInput = document.getElementById("staff-role");
const list = document.getElementById("staff-list");

// 3. Show the staff on the page
function renderStaff() {
  list.innerHTML = "";

  for (const person of staff) {
    const item = document.createElement("li");
    item.textContent = person.name + " - " + person.role;
    list.appendChild(item);
  }
}

// 4. React when the form is submitted
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newPerson = {
    name: nameInput.value,
    role: roleInput.value
  };

  staff.push(newPerson);
  renderStaff();
  form.reset();
});