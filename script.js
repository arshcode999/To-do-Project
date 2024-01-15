var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var formattedDate = `${day}/${month}/${year}`;
document.getElementById("systemtime").innerHTML = `Hey, today is: ${formattedDate}`;
function add_task() {
    var element_manu = document.getElementsByName("input");
    var user_input = element_manu.value;
    console.log("called me");
    console.log(formData.getAll(user_input));
    document.getElementById("input-show").innerHTML = user_input;
}