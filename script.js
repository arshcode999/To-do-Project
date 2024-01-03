let currentDate = new Date();

let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; 
let year = currentDate.getFullYear();

let formattedDate = day + "/" + month + "/" + year;

document.getElementById("sytem-time").innerHTML = formattedDate;