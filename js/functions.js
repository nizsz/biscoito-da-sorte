import {
  messageOfCookie,
  firstScreen,
  modalScreen,} from"./utils.js"

export function resetModals () {
  
  firstScreen.classList.toggle('hide')
  modalScreen.classList.toggle('hide')
  
  messagesRandom()
}

export function messagesRandom() {
  let randomMessages
  const messages =  [
   `A vida trará coisas boas se tiveres paciência.`,
   `Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.`, 
   `Defeitos e virtudes são apenas dois lados da mesma moeda.`,
   `Se alguém está tão cansado que não possa te dar um sorriso,
   dexa-lhe o teu.`,
   `Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.`,
   `Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.`,
   `Espere pelo mais sábio dos conselhos: o tempo.`,
   `Se você se sente só é porque construiu muros ao invés de pontes.`

  ]
  const message = Math.round(Math.random() * 7)
  randomMessages = messageOfCookie.textContent = messages[(message)]
}
