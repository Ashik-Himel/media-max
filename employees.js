// Image Fullscreen
const tableImg = document.querySelectorAll("#data-table #table-body img");
const fsArea = document.querySelector(".fs-area");
const fsImg = document.querySelector(".fs-area img");
const fsCross = document.querySelector(".fs-area .fa-xmark");

tableImg.forEach((n) =>
  n.addEventListener("click", function () {
    fsImg.src = this.src;
    fsArea.classList.add("active");
  })
);

fsCross.addEventListener("click", function () {
  fsArea.classList.remove("active");
});

// Employee Search
const input = document.querySelector("#search-employee");
const table = document.querySelector("#table-body");
const rows = table.querySelectorAll("#table-body tr");

input.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let found = false;

    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      if (cell.innerHTML.toLowerCase().indexOf(query) > -1) {
        found = true;
        break;
      }
    }

    rows[i].style.display = found ? "" : "none";
  }
});

// Employee Card
const tableSection = document.querySelector(".table-section");
const employeeCardSection = document.querySelector(".employee-card");
const employeeCardBack = document.querySelector(
  ".employee-card .fa-chevron-left"
);
const rowCode = document.querySelectorAll(".row-code");
const rowName = document.querySelectorAll(".row-name");
const employeeImg = document.querySelector("#employee-image");
const employeeName = document.querySelector("#employee-name");
const employeeDesignation = document.querySelector("#employee-designation");
const employeePhone = document.querySelector("#employee-phone");

function cardOpen() {
  tableSection.classList.remove("active");
  employeeCardSection.classList.add("active");
}
function cardClose() {
  employeeCardSection.classList.remove("active");
  tableSection.classList.add("active");
}
rowCode.forEach((n) => n.addEventListener("click", cardOpen));
rowName.forEach((n) => n.addEventListener("click", cardOpen));
employeeCardBack.addEventListener("click", cardClose);
