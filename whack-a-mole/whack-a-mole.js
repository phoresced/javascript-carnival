// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// - The ability to store or get references to the cells in the HTML table.
const hole = document.getElementsByTagName('td')

// - A function to randomly select which cell should show the mole.
function whatHole() {
  return Math.floor(Math.random() * (25 - 0)) + 0
}

// - A way to show a mole in the chosen cell
const harry = document.createElement('img')
harry.src = './mole.PNG'
harry.id = 'mole'

let randomIndex = whatHole() // running random function to generate a random number
let randomHole = hole[randomIndex] // index corresponds to cells in the table
// randomHole.appendChild(harry)
// image becomes a property of the randomly generated hole

function whatMole() {
  randomHole.appendChild(harry)
}
whatMole()

// onClick calls function
// The function should remove the mole from the current cell and then, using a function that lets you re-use the code that you wrote earlier, add the mole to a new random cell.
randomHole.onclick = function wHack(e) {
  let hit = e.target
  if (harry === hit) {
    randomHole.removeChild(harry)
    whatMole()
  }
  console.log(hit)
  console.log(harry)
}
