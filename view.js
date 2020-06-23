// JavaScript source code

show();
function show()
{
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    if (!chosenBar)
    {
    contentDiv.innerHTML = 
        `<svg id="chart" height="650" width="500" viewBox="0 -20 80 60" >
        ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: ${chosenBar}
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button onclick="AddBar(inputValue)">Legg til stolpe</button>
        <button onclick="ChangeBar(inputValue, chosenBar)" disabled>Endre valgt stolpe</button><br />
        <button onclick="DeleteBar(chosenBar)" disabled>Fjerne valgt stolpe</button>`;
    }
    
    else if (chosenBar)
    { 
        contentDiv.innerHTML = `
        <svg id="chart" height="650" width="500" viewBox="0 -20 80 60" >
        ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: ${chosenBar}
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button onclick="AddBar(inputValue)">Legg til stolpe</button>
        <button onclick="ChangeBar(inputValue, chosenBar)">Endre valgt stolpe</button><br />
        <button onclick="DeleteBar(chosenBar)">Fjerne valgt stolpe</button>`;
    }
}

function createBar(number, barNo)
{
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    if (chosenBar == chosenBar)
    {
        if (chosenBar == barNo) {
            return `<rect width="${width}" height="${height}"
                    x="${x}" y="${y}" onclick="ChooseBar(${barNo})" style="stroke:black" fill="${color}"></rect>`;
        }
        else
        {
            return `<rect width="${width}" height="${height}"
                    onclick="ChooseBar(${barNo})"
                    x="${x}" y="${y}" fill="${color}"></rect>`;
        }
    }
}

function calcColor(min, max, val)
{
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

