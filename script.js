const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key') //select all the keys
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))  //on key press playNote
})
//play the note when respective key is pressed
document.addEventListener('keydown', e => {
  if (e.repeat) return //never repeat the sound over again
  const key = e.key //getting the key which is pressed
  const whiteKeyIndex = WHITE_KEYS.indexOf(key) //index of the key pressed
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

//plays the audio
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0 //restarting the file and play the sound over again
  noteAudio.play()
  key.classList.add('active') //change color when the key is active
  noteAudio.addEventListener('ended', () => { // remove the color when the pressed key is not active
    key.classList.remove('active')
  })
}