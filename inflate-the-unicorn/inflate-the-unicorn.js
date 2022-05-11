// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// -- PSEUDOCODE RUN-THROUGH -- //
// Define image class as unicorns
// Create an array of images identified as horns
// Target click to unicorn
// On click event calls function to replace image of unicorn (horn)
// Image is replaced with the next in the array
// Create function to read when horn is full of air
// Create alert to thank mouse driver for their helium clicks if horn is full

const unicorn = document.getElementsByClassName('inflate-an-image')

// function unicorns() {
//   //and what if we turn unicorn positions into strings? thanks gerard
//   return [unicorn[0], unicorn[1], unicorn[2]]
// }

//-Horn Image Array-//
const horns = []
horns.push('./images/unicorn-0.png')
horns.push('./images/unicorn-1.png')
horns.push('./images/unicorn-2.png')
horns.push('./images/unicorn-3.png')

//each unicorn image in the array has an onclick event which calls inflateHorn function
for (let i = 0; i < unicorn.length; i++) {
  unicorn[i].onclick = inflateHorn
}

// Write out a function to execute on a click event
function inflateHorn(e) {
  let puff = e.target // Target event becomes an act of puffing
  console.log(puff)
  let horn = puff.src // Image index position is its horn

  // call the function which reads the state of the unicorn
  puff.src = nextImage(horn)
}

function nextImage(horn) {
  console.log(horn)
  // I could alternatively write a switch statement here and bring in unicorn-0 as our default...
  //fetch image: [from-array]
  if (horn.slice(-5) == horns[0].slice(-5)) {
    return horns[1] // replace with next image
  } else if (horn.slice(-5) == horns[1].slice(-5)) {
    return horns[2]
  } else if (horn.slice(-5) == horns[2].slice(-5)) {
    return horns[3]
  } else if (horn.slice(-5) == horns[3].slice(-5)) {
    alert('Tihei mauriora!')
    return horn
  }
}
