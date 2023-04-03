var para = document.getElementById("paraOne")
console.log(para.innerText)
// para.innerHTML = "Hello"

//Camel Case
// para.style.color = "red"
// para.style.fontSize = "2rem"


function changeColor() {
    if (para.style.color == "red") {
        para.style.color = "black"
    } else {
        para.style.color = "red"
    }
}

let color = "black"

function changeColor2() {
    if (color == "black") {
        para.style.color = "red"
        color = "red"
    } else {
        para.style.color = "black"
        color = "black"
    }
}