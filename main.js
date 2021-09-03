import {addImages} from './app.js'

function getId (id){
    return document.getElementById(id)
}

function fadeInOut (e){
    if (e.target.classList[0] == 'simpson'){
        e.target.classList.toggle('faded')
    }
}

window.onload = () => {
  addImages()
  getId('container').addEventListener(('click'), (e) => fadeInOut(e))
  getId('container').classList.remove('hide')
}