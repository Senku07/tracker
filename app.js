let phonenav = document.getElementById("phonenav");
let moremenuIcon = document.getElementById("moremenuIcon");
let lessmenuIcon = document.getElementById("lessmenuIcon");
let smallnavOption = document.getElementById("smallnavOption");
let smallnavLi = document.getElementById("smallnavLi");
let startHere = document.getElementById("startHere");
let endHere = document.getElementById("endHere");
let taskHere = document.getElementById("taskHere");
let dateHere = document.getElementById("dateHere");
let body = document.getElementById("body");
// let settingBody = document.querySelector('settingBody');
// console.log(settingBody);
let showme = false;

moremenuIcon.addEventListener("click", expand);

function expand() {
  if (showme == false) {
    moremenuIcon.style.display = "none";
    phonenav.style.backgroundColor = " #12343f";
    lessmenuIcon.style.display = "flex";
    smallnavOption.style.display = "flex";
    // console.log(showme);

    showme = true;
  }
}

lessmenuIcon.addEventListener("click", less);

function less() {
  if (showme == true) {
    moremenuIcon.style.display = "flex";
    phonenav.style.background = "transparent";
    lessmenuIcon.style.display = "none";
    smallnavOption.style.display = "none";
    // console.log(showme);

    showme = false;
  }
}

let getData = document.getElementById("getData");
let addBtn = document.getElementById("addBtn");

//

let lightIcon = document.getElementById("lightIcon");
let darkIcon = document.getElementById("darkIcon");

let theme = false;

darkIcon.addEventListener("click", () => {
  if (theme == false) {
    theme = true;
    body.style.backgroundColor = "rgb(20, 20, 20)";
    body.style.backgroundImage = "none";
    darkIcon.style.display = "none";
    document.getElementById("darkMode").style.display = "none";
    lightIcon.style.display = "flex";
    document.getElementById("theme").style.marginLeft = "4rem";
    // settingBody.style.backgroundColor ="rgb(20, 20, 20)";
    console.log(theme);
  }
});

lightIcon.addEventListener("click", () => {
  if (theme == true) {
    theme = false;
    body.style.backgroundColor = "none";
    lightIcon.style.display = "none";
    darkIcon.style.display = "flex";
    body.style.backgroundImage = "url(icon/278401.jpg)";
    document.getElementById("darkMode").style.display = "flex";
    document.getElementById("theme").style.marginLeft = "none";
    console.log(theme);
  }
});

let phonedarkIcon = document.getElementById("phonedarkIcon");
let phonelightIcon = document.getElementById("phonelightIcon");

let phoneTheme = false;
phonedarkIcon.addEventListener("click", () => {
  if (phoneTheme == false) {
    phoneTheme = true;
    body.style.backgroundColor = "rgb(20, 20, 20)";
    body.style.backgroundImage = "none";
    phonedarkIcon.style.display = "none";
    document.getElementById("phonedarkMode").style.display = "none";
    phonelightIcon.style.display = "flex";
    // document.getElementById("theme").style.marginLeft = "4rem";
    console.log(theme);
  }
});

phonelightIcon.addEventListener("click", () => {
  if (phoneTheme == true) {
    phoneTheme = false;
    body.style.backgroundColor = "none";
    phonelightIcon.style.display = "none";
    phonedarkIcon.style.display = "flex";
    body.style.backgroundImage = "url(icon/278401.jpg)";
    document.getElementById("phonedarkMode").style.display = "flex";
    // document.getElementById("theme").style.marginLeft = "none";
    console.log(theme);
  }
});

function showNotification() {
  let notification = new Notification("From Leviteting", {
    body: "Write Your Report",
    icon: "icon/Leviteting.png",
  });
}

if (Notification.permission === "granted") {
  // notification;
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((per) => {
    // showNotification();
  });
}

// setInterval(()=> {showNotification()}, 30000)

// let storageKey = 0;
let check = localStorage.getItem("numb");

getData.addEventListener("submit", submitForm);

function submitForm() {
  event.preventDefault();
  let formData = new FormData(getData);
  let taskData = formData.get("task").trim();
  let startTime = formData.get("startingTime");
  let endTime = formData.get("endingTime");

  if (taskData != "" && startTime != "" && endTime != "") {
    let startSpan = document.createElement("span");
    let endSpan = document.createElement("span");
    let taskSpan = document.createElement("span");
    let dateSpan = document.createElement("span");

    dateSpan.id = "date";

    startSpan.innerText = startTime;
    endSpan.innerText = endTime;
    taskSpan.innerText = taskData;

    startHere.appendChild(startSpan);
    endHere.appendChild(endSpan);
    taskHere.appendChild(taskSpan);
    dateHere.appendChild(dateSpan);

    let date = new Date();

    let innerDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    dateSpan.innerText = innerDate;
    //  console.log(date);
    //  console.log(date.getDay(),date.getMonth(), date.getFullYear());
    if (
      startHere.childElementCount == 4 &&
      endHere.childElementCount == 4 &&
      taskHere.childElementCount == 4
    ) {
      startHere.removeChild(startHere.firstElementChild);
      dateHere.removeChild(dateHere.firstElementChild);
      endHere.removeChild(endHere.firstElementChild);
      taskHere.removeChild(taskHere.firstElementChild);
    }
  } else {
    alert("Please Fill");
  }
  check++;
  localStorage.setItem("numb", check);
  console.log(localStorage.getItem("numb"));


  let taskStore = [
    localStorage.setItem(
      `taskKey${check}`,
      document.getElementById("takeInput").value
    ),
  ];
  let startingTimeStore = [
    localStorage.setItem(
      `startKey${check}`,
      document.getElementById("startingTime").value
    ),
  ];
  let endingTimeStore = [
    localStorage.setItem(
      `endKey${check}`,
      document.getElementById("endingTime").value
    ),
  ];
  // let dateStore = [localStorage.setItem(`dateKey${storageKey}`, innerDate )];

  document.getElementById("takeInput").value = "";
  document.getElementById("startingTime").value = "";
  document.getElementById("endingTime").value = "";
}

let taskStoredData = document.getElementById("taskStoredData");
let timeStoredData = document.getElementById("timeStoredData");
let endtimeStoredData = document.getElementById("endtimeStoredData");

for (let i = 1; i <= localStorage.length / 3; i++) {
  console.log(localStorage.getItem(`taskKey${i}`));
  console.log(localStorage.getItem(`startKey${i}`));
  console.log(localStorage.getItem(`endKey${i}`));

  taskStoredData.innerHTML += `<p>${localStorage.getItem(`taskKey${i}`)}</p>`;
  document.getElementById(
    "timeStoredData"
  ).innerHTML += `<p>${localStorage.getItem(`startKey${i}`)}</p>`;
  document.getElementById(
    "endtimeStoredData"
  ).innerHTML += `<p>${localStorage.getItem(`endKey${i}`)}</p>`;
}
// taskStoredData.innerText = localStorage.getItem(`taskKey1`);
