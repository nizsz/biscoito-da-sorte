import { resetModals, messagesRandom } from "./functions.js"
import { biscuitClick, buttonOpenOtherCookie,} from"./utils.js"

messagesRandom()

//Eventos

biscuitClick.addEventListener('click', function(){
  resetModals()
})


buttonOpenOtherCookie.addEventListener('click', function() {
  resetModals()
})

document.addEventListener('keydown', function(event){
  let events = event.key === 'Enter'
  
  if(events)
  resetModals() 
})




