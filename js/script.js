import {modal} from './modal.js'
import {alertError} from './alert-error.js'
import {calculateIMC, notANumber} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNoteANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNoteANumber){
        alertError.open()
        return
    }

    alertError.close()
    const result = calculateIMC(weight, height)
    displayResultMessage(result)

}


 function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`
    
    modal.message.innerText = message
    modal.open()
 }

 inputHeight.oninput = () => alertError.close()
 inputWeight.oninput = () => alertError.close()