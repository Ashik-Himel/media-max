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
const rowID = document.querySelectorAll(".row-id");
const rowName = document.querySelectorAll(".row-name");
const rowDesignation = document.querySelectorAll(".row-designation");
const rowDHName = document.querySelectorAll(".row-dh-name");
const employeeImg = document.querySelector("#employee-image");
const employeeName = document.querySelector("#employee-name");
const employeeDesignation = document.querySelector("#employee-designation");
const employeeID = document.querySelector("#employee-id");
const employeeCode = document.querySelector("#employee-code");
const employeePhoneNumber = document.querySelector("#employee-phone-number");
const employeeDHName = document.querySelector("#employee-dh-name");
const employeeJobExperience = document.querySelector(
  "#employee-job-experience"
);
const employeeDateOfBirth = document.querySelector("#employee-date-of-birth");
const employeeBloodGroup = document.querySelector("#employee-blood-group");
const employeePhone = document.querySelector("#employee-phone");

function cardOpen() {
  tableSection.classList.remove("active");
  employeeCardSection.classList.add("active");
  window.scrollTo(0, 0);
  employeeImg.src = this.closest("tr").querySelector(".row-img").src;
  if (this.closest("tr").querySelector(".row-name").innerHTML == "") {
    employeeName.innerHTML = "No Name";
  } else {
    employeeName.innerHTML =
      this.closest("tr").querySelector(".row-name").innerHTML;
  }
  if (this.closest("tr").querySelector(".row-designation").innerHTML == "") {
    employeeDesignation.innerHTML = "Employee";
  } else {
    employeeDesignation.innerHTML =
      this.closest("tr").querySelector(".row-designation").innerHTML;
  }
  if (this.closest("tr").querySelector(".row-id").innerHTML != "") {
    employeeID.style.display = "block";
    employeeID.innerHTML +=
      this.closest("tr").querySelector(".row-id").innerHTML;
  }
  if (this.closest("tr").querySelector(".row-code").innerHTML != "") {
    employeeCode.style.display = "block";
    employeeCode.innerHTML +=
      this.closest("tr").querySelector(".row-code").innerHTML;
  }
  if (this.closest("tr").querySelector(".row-phone").innerHTML != "") {
    employeePhoneNumber.style.display = "block";
    employeePhoneNumber.innerHTML +=
      this.closest("tr").querySelector(".row-phone").innerHTML;
  }
  if (this.closest("tr").querySelector(".row-dh-name").innerHTML != "") {
    employeeDHName.style.display = "block";
    employeeDHName.innerHTML +=
      this.closest("tr").querySelector(".row-dh-name").innerHTML;
  }

  if (this.closest("tr").querySelector(".row-joining-date").innerHTML != "") {
    employeeJobExperience.style.display = "block";
    const joinigDate =
      this.closest("tr").querySelector(".row-joining-date").innerHTML;
    const expMS = new Date(
      new Date().getTime() - new Date(joinigDate).getTime()
    );
    if (expMS.getFullYear() - 1970 == 0) {
      employeeJobExperience.innerHTML += `${expMS.getMonth()} Months`;
    } else {
      employeeJobExperience.innerHTML += `${
        expMS.getFullYear() - 1970
      } Years ${expMS.getMonth()} Months`;
    }
  }

  if (this.closest("tr").querySelector(".row-date-of-birth").innerHTML != "") {
    employeeDateOfBirth.style.display = "block";
    employeeDateOfBirth.innerHTML +=
      this.closest("tr").querySelector(".row-date-of-birth").innerHTML;
  }
  if (this.closest("tr").querySelector(".row-blood-group").innerHTML != "") {
    employeeBloodGroup.style.display = "block";
    employeeBloodGroup.innerHTML +=
      this.closest("tr").querySelector(".row-blood-group").innerHTML;
  }
  employeePhone.href = this.closest("tr").querySelector(".row-phone").href;
}

function cardClose() {
  employeeCardSection.classList.remove("active");
  tableSection.classList.add("active");
}

rowID.forEach((n) => n.addEventListener("click", cardOpen));
rowName.forEach((n) => n.addEventListener("click", cardOpen));
rowDesignation.forEach((n) => n.addEventListener("click", cardOpen));
rowDHName.forEach((n) => n.addEventListener("click", cardOpen));
employeeCardBack.addEventListener("click", cardClose);
