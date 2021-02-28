const boxElements = document.querySelectorAll('.box')
let playerOneCount = 0
let playerTwoCount = 0
let clickCount = 0


function swapTurn(boxElement){

  // playerOneCount = playerOneCount + 1
  // playerTwoCount = playerTwoCount + 2
  clickCount++


  if (clickCount % 2 === 1){
    boxElement.classList.add('x')
    // const logString = 'clickCount: ' + clickCount + ' so far'
    // console.log(logString);
    // ` today is a good day, ${userName} `
    // 'today is a good day '
  }
  else {
    isPlayerTwoTurn = true
    boxElement.classList.add('o')
  }
console.log(`clickCount: ${clickCount} so far`)
}

boxElements.forEach(function(boxElement){
 boxElement.addEventListener('click', ()=> {
 // boxElement.classList.add('x')
 console.log('receieve clicks');
 swapTurn(boxElement);
})
})

function checkIndex(event) {
// console.log(Array.from(boxElements).indexOf(event.target) );
let boxNum = Array.from(boxElements).indexOf(event.target);
console.log(boxNum)
}

function getBoxValue(boxNum){
  const boxId = `#box${boxNum}`
  const boxElement = document.querySelector(boxId)

  if (boxElement.classList.contains('x')){
    return 'x'
  }
  if (boxElement.classList.contains('o')){
    return 'o'
  }
  return null

}

function isGameWon(){
  const boxO = getBoxValue(0)
}

let rowOne = []

// if box 0-2 equal x = winnerMessage
// if playOne = true then box 0-2


// let activeBox = boxElement.item(boxNum)
// activeBox.classList.add('o')

// boxElement.forEach(cell => {
//   cell.addEventListener('click', handleClick, { once: true})
// })
// function handleClick(e){
//   console.log('clicked');
//   const cell = e.target
//   const liveClass = oTurn ? oClass : xClass
//   placeAmark(cell, liveClass)
//   // check for winner
//   // check for draw
//   // Switch turns
// }
// function placeAmark(cell, liveClass){
//   cell.classList.add(liveClass)
// }
