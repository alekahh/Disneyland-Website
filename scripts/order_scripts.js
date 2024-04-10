// Part 2: Set up event handlers for “Add” btns
function add(obj) {
    var input = obj.previousElementSibling;
    if (input.value == 0) return;
    var body = document.querySelector("tbody");
    body.innerHTML += "<tr><td class='description'>" + input.previousElementSibling.innerHTML +
        "</td><td class='quantity'>" + input.value + "</td></tr>";
    input.value = "";
    recal();
}

// Part 3: Recal function
function recal() {
    var rows = document.querySelectorAll("tbody td[class='quantity']");
    var sum = 0;
    for (var i = 0; i < rows.length; i++)
        sum += rows[i].innerHTML * 1;
    document.querySelector("#totalqty").innerHTML = sum + "";
}

// Part 4: Undo
function Undo() {
    var body = document.querySelector("tbody");
    if (!body.lastElementChild)
        alert("The table is already empty!");
    else {
        body.removeChild(body.lastElementChild);
        recal();
    }
    return false;
}