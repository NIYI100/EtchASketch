
function createGrid() {
    let body = document.querySelector("#body")

    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div")
        row.classList.add("row")

        for (let j = 0; j < 16; j++) {
            let  id = "div-"+i+"-"+j
            let gridField = document.createElement("div")
            setGridFieldAttributes(gridField, id)
            row.appendChild(gridField)
        }
        body.appendChild(row)
    }
}

function setGridFieldAttributes(gridField, id) {
    let dim = Math.round(100 / 16) + "%"
    gridField.style.minWidth = dim
    gridField.style.minHeight = "10px"
    gridField.style.backgroundColor = "white"
    gridField.classList.add("gridField")
    gridField.setAttribute("id", id)
    gridField.addEventListener("click", () => {
        colorMe(id)
    })
}

function colorMe(div) {
    let me = document.querySelector("#" + div)
    if (me.style.backgroundColor === "white") {
        me.style.backgroundColor = random_color()
    } else {
        me.style.backgroundColor = "white"
    }
}

function random_color() {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    return "rgb(" + x + "," + y + "," + z + ")"
}