function GameStart() {
    let MyArray = [
        "Penguin",
        "Bear",
        "Horse",
        "Polar",
        "Lama",
        "Bandicut"
    ]
    MyArray = [...MyArray,...MyArray]
    MyArray.sort(()=> Math.random() - 0.5)
    let MyDiv = document.getElementById("GameBoard")
    MyDiv.innerText = ""
    MyArray.forEach(element => {
        let cell = document.createElement("div")
        MyDiv.appendChild(cell)
        cell.innerText = element
        cell.classList.add("cel", "cellhide")
        cell.addEventListener("click", ()=> {
            Validate(cell)
        })
    });
}
let FirstW = null
let MyPoints = 0
let MyDivPoints = document.getElementById("Points")
function Validate(cell){
    cell.classList.remove("cellhide")
    cell.classList.add("cellShow")
    if (!FirstW){
        setTimeout(()=>{
            FirstW = cell
        }, 300)
    }else if (FirstW.innerText == cell.innerText
        && FirstW !== cell){
        setTimeout(()=>{
            FirstW.style.visibility = "Hidden"
            cell.style.visibility = "Hidden"
            FirstW = null
            MyPoints += 10
            MyDivPoints.innerText = MyPoints
        }, 300)
      
    }else{
        setTimeout(()=>{
            cell.classList.remove("cellShow")
            cell.classList.add("cellhide")
            FirstW.classList.remove("cellShow")
            FirstW.classList.add("cellhide")
            FirstW = null
        }, 300)
        }
    }

window.onload = GameStart



let TimerP = document.getElementById("Taimer")
let sec = 60
setInterval(()=>{
    TimerP.innerText = sec
    sec --
    if (sec == 0){
        sec = 60
        MyPoints = 0
        MyDivPoints.innerText = MyPoints
        GameStart()
    }
},1000)