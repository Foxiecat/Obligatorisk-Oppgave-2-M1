function ChooseBar (barNo)
{
    if (chosenBar == barNo) { chosenBar = null; }
    else { chosenBar = barNo; }
    show();
}

function AddBar(inputValue)
{
    if(inputValue > 0 && inputValue <= 10) { numbers.push(inputValue); }

    else { alert("Choose a number between 1 and 10"); }
    show();
}

function DeleteBar(chosenBar)
{
    if(chosenBar) { numbers.splice(chosenBar -1, 1); }
    show();
    ChooseBar();
}

function ChangeBar(inputValue, chosenBar)
{
    aNumber = chosenBar - 1;
    if(inputValue > 0 && inputValue <= 10) {numbers[aNumber] = inputValue;}
    else { alert("Please use a number between 1 and 10."); }
    show();
    ChooseBar();
}