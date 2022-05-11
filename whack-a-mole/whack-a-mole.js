// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let mole = './mole.png'
console.log('line 5 ushers in this mischievous' + ' ' + mole)

// - The ability to store or get references to the cells in the HTML table.
let hole = document.getElementsByTagName('td')
for (let i = 0; i < hole.length; i++) {
  hole[i].onClick = popUp
  console.log('line 12' + ' ' + hole[i])
}

// - A function to randomly select which cell should show the mole.
function popUp(e) {
  let hole = e.target.random(0, 25)
  hole.innerHTML.push(mole) // - A way to show a mole in the chosen cell.
}

// I'm defining each td tag as 'hole'
// Then I run a for loop to create an array of holes
// These holes each get an onClick even which calls the popUp function
// I also need a way for the first mole to pop-up which could simply be a message 'click any square to begin'
// The event function popUp tells whichever hole the array has produced to redefined itself as the target of the click, randomized within the range of available cells.
// When the event is triggered the mole image is pushed into the innerHTML of a random hole.
