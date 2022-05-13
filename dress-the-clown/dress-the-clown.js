// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let outfit = document.getElementsByTagName('img')
// If we fetch by IMG we get all body parts but we only want the head so class name lets us define the 'dress-an-image head' parts

let headIndex = 0 // keep track of image position
let clothingIndex = 0 // keep track of activated body part

function changeHead() {
  const clownHead = document.getElementsByClassName('dress-an-image head') // refer to head element by class
  clownHead[0].id = 'head' // specify index position in the class and define id as head
  let head = document.getElementById('head') // assign head variable to unique ID
  let headSrc = './images/head'.concat(headIndex, '.png') // concatenate elements of image source to change as index changes
  head.src = headSrc // change source of head variable to concatenated string
}

function changeAltitude() {
  if (outfit == outfit[0]) {
    clothingIndex = 0
  } else if (outfit == outfit[1]) {
    clothingIndex = 1
  } else if (outfit == outfit[2]) {
    clothingIndex = 2
  }
}

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      changeAltitude()
      if (clothingIndex === 0) {
        clothingIndex = 2
      } else if (clothingIndex === 1) {
        clothingIndex = 0
      } else if (clothingIndex === 2) {
        clothingIndex = 1
      }

    case 'ArrowDown':
      changeAltitude()
      clothingIndex = clothingIndex++
      if (clothingIndex === 3) {
        clothingIndex = 0
      }
      console.log(e.key)
      console.log(clothingIndex)
  }
  if (clothingIndex == 0) {
    switch (e.key) {
      case 'ArrowRight':
        changeHead()
        headIndex = headIndex++ // increase headIndex by 1 every time this function is called
        if (headIndex === 6) {
          headIndex = 0
        }
      case 'ArrowLeft':
        changeHead()
        headIndex = headIndex - 1
        if (headIndex === -1) {
          headIndex = 5
        }
    }
  } //else if (clothingIndex == 1)
})
