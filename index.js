// Import stylesheets
import './style.css';



const allCircle = document.querySelectorAll("[data-cicle]")
const allProgresBar = document.querySelectorAll(".progres-bar")
const nextButton = document.querySelector('[data-button="dalej"]')
const backButton = document.querySelector('[data-button="Wróć"]')

let index = 0
let progresBarIndex = 0

function progress(){
  if(index >= allCircle.length){
    index = 4
    return index
  } else{
    for(let i=0; i<allCircle.length;i++){
      allCircle[index].classList.add('done')
    }
    index++
  }
}

function progressBar(){
  if(progresBarIndex >= allCircle.length-1){
    progresBarIndex = 3
    return progresBarIndex
  } else{
    for(let i=0; i<allCircle.length;i++){
      allProgresBar[progresBarIndex].classList.add('progres-bar-done')
    }
    progresBarIndex++
  }
}

function reversing(){
  if(index <= 0){
    index = 0
    return index
  }else{
    index--
    for(let i=0; i<allCircle.length;i++){
      allCircle[index].classList.remove('done')
    }
  }
}
function reversingBar(){
  if(progresBarIndex <= 0){
    progresBarIndex = 0
    return progresBarIndex
  }else{
    progresBarIndex--
    for(let i=0; i<allCircle.length;i++){
      allProgresBar[progresBarIndex].classList.remove('progres-bar-done')
    }
  }
}

nextButton.addEventListener('click',()=>{
  progress()
  progressBar()
})
backButton.addEventListener('click',()=>{
  reversing()
  reversingBar()
})


