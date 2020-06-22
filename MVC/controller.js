
//Create bar functions
function ChooseBar(barNo) {
    //Select the bar, add stroke and update "Valgt stolpe"
    if (chosenBar == barNo) { chosenBar = null; }
    else { chosenBar = barNo; }
    show();

    //Unselect the same bar, disable stroke and remove "valgt stolpe"

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