// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let outfit = document.getElementsByTagName('img')
// If we fetch by IMG we get all body parts but we only want the head so class name lets us define the 'dress-an-image head' parts

let clothingIndex = 0 // keep track of activated body part
let headIndex = 0 // keep track of image positions
let bodyIndex = 0
let shoeIndex = 0

function changeCostume() {
  const clownHead = document.getElementsByClassName('dress-an-image head') // refer to head element by class
  clownHead[0].id = 'head' // specify index position in the class and define id as head
  let head = document.getElementById('head') // assign head variable to unique ID
  let headSrc = './images/head'.concat(headIndex, '.png') // concatenate elements of image source to change as index changes
  head.src = headSrc // change source of head variable to concatenated string
  const clownBody = document.getElementsByClassName('dress-an-image body')
  // again for the body
  clownBody[0].id = 'body'
  let body = document.getElementById('body')
  let bodySrc = './images/body'.concat(bodyIndex, '.png')
  body.src = bodySrc
  // and now for the shoes
  const clownShoes = document.getElementsByClassName('dress-an-image shoes')
  clownShoes[0].id = 'shoes'
  let shoes = document.getElementById('shoes')
  let shoeSrc = './images/shoes'.concat(shoeIndex, '.png')
  shoes.src = shoeSrc
}

function moveUp() {
  // build function for up arrow
  clothingIndex-- // decrease position by 1
  if (clothingIndex < 0) {
    // if we get to the end of our list
    clothingIndex = 2 // start again from the other end
  }
}

function moveDown() {
  // make function for down arrow
  clothingIndex++ // increase position by 1
  if (clothingIndex > 2) {
    clothingIndex = 0
  }
}

function moveLeft() {
  // create function for all left-arrow presses which reads the position of the clothingIndex and decreases the corresponding image level by 1
  switch (clothingIndex) {
    case 0:
      headIndex--
      if (headIndex < 0) {
        headIndex = 5
      }
      return
    case 1:
      bodyIndex--
      if (bodyIndex < 0) {
        bodyIndex = 5
      }
      return
    case 2:
      shoeIndex--
      if (shoeIndex < 0) {
        shoeIndex = 5
      }
      return
  }
}

function moveRight() {
  switch (clothingIndex) {
    case 0:
      headIndex++
      if (headIndex > 5) {
        headIndex = 0
      }
      return
    case 1:
      bodyIndex++
      if (bodyIndex > 5) {
        bodyIndex = 0
      }
      return
    case 2:
      shoeIndex++
      if (shoeIndex > 5) {
        shoeIndex = 0
      }
      return
  }
}

document.addEventListener('keydown', (e) => {
  // on keydown event, call function which handles the keys and function which translates the html
  handleKey(e.key)
  changeCostume()
  console.log(e.key)
  console.log(clothingIndex)
})

function handleKey(key) {
  // build function which responds to key events by calling their respective functions
  switch (key) {
    case 'ArrowUp':
      moveUp()
      return
    case 'ArrowDown':
      moveDown()
      return
    case 'ArrowLeft':
      moveLeft()
      return
    case 'ArrowRight':
      moveRight()
      return
  }
}
