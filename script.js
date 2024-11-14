const container = document.querySelector('#container')
const resizeBtn = document.querySelector("#resizeBtn")

function generateGridSquares(size) {
    for(let i = 0; i < size*size; i++){
        const gridSquare = document.createElement("div")
        gridSquare.style.minWidth = `${100/size}%`
        gridSquare.style.minHeight = `${100/size}%`
        gridSquare.classList.add("gridSquare")
        container.appendChild(gridSquare)
    }
    const gridItems = document.querySelectorAll(".gridSquare")
    gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", (e) => {
    gridItem.style.background = "black"
    // gridItem.style.opacity = 0.5
    }))
}

resizeBtn.addEventListener("click", () => {
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    inputSize = prompt("Enter a number below 100")
    if(inputSize < 100 && inputSize != null){
        generateGridSquares(inputSize)
    }
    else{
        const warning = document.createElement("h3")
        warning.textContent = "Invalid Input! Enter a value between 0 and 100"
        container.appendChild(warning)
    }
    console.log(gridItems)
})

generateGridSquares(16)