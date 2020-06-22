function ChooseBar (barNo) {
    if (chosenBar == barNo) { chosenBar = null; }
    else { chosenBar = barNo; }
    show();
}

function AddBar(inputValue) {
    if(inputValue > 0 && inputValue <= 10) { numbers.push(inputValue); }

    else { alert("Choose a number between 1 and 10"); }
    show();
}

function DeleteBar() {
    if (chosenBar) { numbers.splice(chosenBar-1, 1); }
    show();
}

function ChangeBar(inputValue) {
    aNumber = chosenBar - 1;
    if(inputValue > 0 && inputValue <= 10) {numbers[aNumber] = inputValue;}
    else if (!chosenBar) { alert("Please select a bar") }
    else { alert("Only a number between 1 and 10"); }
    show();
}