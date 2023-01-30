document.addEventListener('keydown', function (event) {

    if (event.key === 'a') {

        document.querySelector("#amarillo").style.backgroundColor = "blue"
        document.querySelector("#rojo").style.backgroundColor = "blue"
        document.querySelector("#morado").style.backgroundColor = "blue"
        document.querySelector("#verde").style.backgroundColor = "blue"
    } 
    else if (event.key === 's') {

        document.querySelector("#amarillo").style.backgroundColor = "orange"
        document.querySelector("#rojo").style.backgroundColor = "orange"
        document.querySelector("#morado").style.backgroundColor = "orange"
        document.querySelector("#verde").style.backgroundColor = "orange"
    }
    else if (event.key === 'd') {

        document.querySelector("#amarillo").style.backgroundColor = "pink"
        document.querySelector("#rojo").style.backgroundColor = "pink"
        document.querySelector("#morado").style.backgroundColor = "pink"
        document.querySelector("#verde").style.backgroundColor = "pink"
    }
})


document.querySelectorAll("div").forEach(item => {
    item.addEventListener('click', event => {
        item.style.backgroundColor = "cyan"
    })
})  