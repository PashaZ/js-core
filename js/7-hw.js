// task1


let newWindow = window.open("", "window", "width=300, height = 300");

function resize() {
    newWindow.resizeTo(500, 500);
}

function move() {
    newWindow.moveTo(200, 200);
}

function close() {
    newWindow.close();
}

setTimeout(resize, 2000);
setTimeout(move, 4000);
setTimeout(close, 6000);


// task2


function changeCSS() {
    document.getElementById("text").style.color = "orange";
    document.getElementById("text").style.fontFamily = "Comic Sans MS";
    document.getElementById("text").style.fontSize = "20-large";
}
btn.addEventListener("click", changeCSS);


// task3


function changeColor(event) {
    let color = document.body.style.backgroundColor;

    if (event.type == "click" && event.target.id == "blue") {
        color = "blue";
    } else if (event.type == "dblclick" && event.target.id == "pink") {
        color = "pink";
    } else if (event.type == "mousedown" && event.target.id == "brown") {
        color = "brown";
    } else if (event.type == "mouseup" && event.target.id == "brown") {
        color = "white";
    } else if (event.type == "mouseover" && event.target.id == "link") {
        color = "yellow";
    } else if (event.type == "mouseout" && event.target.id == "link") {
        color = "white";
    }
    document.body.style.backgroundColor = color;
}
blue.addEventListener("click", changeColor);
pink.addEventListener("dblclick", changeColor);
brown.addEventListener("mousedown", changeColor);
brown.addEventListener("mouseup", changeColor);
link.addEventListener("mouseover", changeColor);
link.addEventListener("mouseout", changeColor);


// task4


function removeElement() {
    let selectedName = document.getElementById("list")
    selectedName.remove(selectedName.selectedIndex);
}
choose.addEventListener("click", removeElement);

task5

let liveButtonMassageElement = document.getElementById('liveButtonMassage');
let button5 = document.getElementById('liveButton');

button5.addEventListener('mouseover', () => {
    let messageContainer = document.createElement('div')
    let textNodeMouseOver = document.createTextNode('Mouse on me!')
    messageContainer.appendChild(textNodeMouseOver)
    liveButtonMassageElement.appendChild(messageContainer)
})

button5.addEventListener('mouseout', () => {
    let messageContainer = document.createElement('div')
    let textNodeMouseOut = document.createTextNode('Mouse is not on me!')
    messageContainer.appendChild(textNodeMouseOut)
    liveButtonMassageElement.appendChild(messageContainer)
})

button5.addEventListener('click', () => {
    let messageContainer = document.createElement('div')
    let textNodeButtonOnclick = document.createTextNode('I was pressed!')
    messageContainer.appendChild(textNodeButtonOnclick)
    liveButtonMassageElement.appendChild(messageContainer)
})



// task6


function pageWidthHeight() {
    let text = "";
    text += "<p>Width: " + window.innerWidth + "</p>";
    text += "<p>Height: " + window.innerHeight + "</p>";
    document.getElementById("widthHeight").innerHTML = text;
}

window.addEventListener("resize", pageWidthHeight)
window.addEventListener("load", pageWidthHeight)


// task7


let country = [
    {
        name: 'Germany',
        city: ['Berlin', 'Dortmund', ' Hamburg', 'Dresden'],
    },
    {
        name: 'Ukraine',
        city: ['Kyiv', 'Lviv', 'Rivne', 'Poltava']
    },
    {
        name: 'USA',
        city: ['New-York', 'Washington', 'Boston', 'Chikago']
    }
]


function onCountryChange() {
    const selectCountry = document.getElementById('country');
    const selectCities = document.getElementById('cities');

    let selectedCountry = selectCountry.options[selectCountry.selectedIndex].text

    for (let i = 0; i < country.length; i++) {

        if (selectedCountry == country[i].name) {
            selectCities.options.length = 0

            let city = country[i].city

            for (let j = 0; j < city.length; j++) {
                let optionElement = document.createElement('option')
                let optionElementText = document.createTextNode(city[j])
                optionElement.appendChild(optionElementText)
                selectCities.appendChild(optionElement)
            }

        }

    }

    printSelectedCountryAndCity()
}

document.getElementById('country').addEventListener('change', onCountryChange);
document.getElementById('cities').addEventListener('change', onCityChange);


function onCityChange() {
    printSelectedCountryAndCity()
}


function printSelectedCountryAndCity() {
    const selectCountry = document.getElementById('country');
    const selectCities = document.getElementById('cities');

    const selectedCity = selectCities.options[selectCities.selectedIndex].text;
    const selectedCountry = selectCountry.options[selectCountry.selectedIndex].text

    document.getElementById('selectedCountryAndCity').innerHTML = selectedCountry + ', ' + selectedCity
}