let currentDate = new Date();

let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; 
let year = currentDate.getFullYear();

let formattedDate = day + "/" + month + "/" + year;

//document.getElementById("systemtime").innerHTML = ("hey today is : "+formattedDate);
var inputtask = document.getElementById("task-inputer").innerText;
console.log(inputtask);
