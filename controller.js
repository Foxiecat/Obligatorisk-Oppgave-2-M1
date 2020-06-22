
//Create bar functions
function ChooseBar (barNo) {
    //Select the bar, add stroke and update "Valgt stolpe"
    if (chosenBar == barNo) { chosenBar = null; }
    else { chosenBar = barNo; }
    show();
}
function Addbar() {
    //use push to add bar
    //if () {  }
}

function DeleteBar() {
    //Use splice to delete bar
    if (chosenBar) { numbers.splice(chosenBar-1, 1); }
}

function ChangeBar() {
    //Edit a (/chosen) bar
}