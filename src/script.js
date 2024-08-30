let level = document.querySelector("#level")
let allButtons = document.querySelectorAll(".quest_buttons")
let contador = 0
let missoes = [missao1, missao2, missao3, missao4, missao5, missao6, missao7, missao8]
let progressBar = document.querySelector(".progress-bar")
let pseudoBarStyle = window.getComputedStyle(progressBar, "::after")
let barWidth = parseInt(pseudoBarStyle.getPropertyValue('--progress')) || 0;
let gainExp = 0
function triggerEvents() {
  level.classList.add("expand")
  level.classList.add("animate");
  allButtons.forEach((ele) => {
    ele.onclick = null
    return
  })
  setTimeout(() => {
      allButtons.forEach((ele, i) => {
        if(i < allButtons.length){
          ele.onclick = missoes[i]
        }
        return
      })
  },4000)
  setTimeout(() => {
    level.classList.remove("expand");
  }, 2000);
  setTimeout(() => {
    level.classList.remove("animate");
  }, 4000);
}
function correctAnswer(){
  window.alert("Congratulations on the quest !")
}
function increaseLevel(experience){
  gainExp += experience
  progressBar.style.setProperty('--progress', `${gainExp}%`)
  if(gainExp >= 100){
    contador += 1
    level.innerHTML = `Level: ${contador}`
    triggerEvents()
    progressBar.style.setProperty('--progress', `0%`)
    gainExp = 0
  }
  return
}
function makeTextRedAndThenReset() {
  const allTextElements = document.querySelectorAll("body *");
  console.log(allTextElements);
  allTextElements.forEach(element => {
    console.log(element);
    element.classList.add("red-text-effect");
  });
  setTimeout(() => {
    allTextElements.forEach(element => {
      element.classList.remove("red-text-effect");
    });
  }, 2000);
}

level.innerHTML = `Level: ${contador}`
function missao1(){
  let answer = window.prompt("Digite quanto é 2+2: ")
  if(answer === "4"){
      correctAnswer()
      increaseLevel(20)
      return
  }
  makeTextRedAndThenReset()
  return 
}  
function missao2(){
    let answer = window.prompt("Na frase: 'Os professores estão com os alunos', quem é o verbo?")
    if(answer.toLowerCase() === "estão" || answer.toLowerCase() === "estao"){
      correctAnswer()
      increaseLevel(28)
      return
    }
    makeTextRedAndThenReset()
    return
}
function missao3(){
  let answer = window.prompt("Qual é a raiz quadrada de 144?")
  if(answer === "12"){
    correctAnswer()
    increaseLevel(20)
    return
  }
  makeTextRedAndThenReset()
  return
}
function missao4() {
  let answer = window.prompt("Qual é a soma de 8 + 7?")
  if (answer === "15") {
    correctAnswer()
    increaseLevel(20)
      return
    }
  makeTextRedAndThenReset()
  return
}
function missao5() {
  let answer = window.prompt("Qual é o resultado de 9 * 6?")
  if (answer === "54") {
    correctAnswer()
    increaseLevel(30)
    return
  }
  makeTextRedAndThenReset()
  return
}
function missao6() {
  let answer = window.prompt("Qual é o valor de π (pi) arredondado para duas casas decimais?")
  if (answer === "3.14"){
    correctAnswer()
    increaseLevel(40)
    return
  }
  makeTextRedAndThenReset()
  return
}
function missao7() {
  let answer = window.prompt("Quem é o autor da frase 'Penso, logo existo'?")
  if (answer.toLowerCase() === "descartes") {
    correctAnswer()
    increaseLevel(50)
    return
  }
  makeTextRedAndThenReset()
  return
}
function missao8() {
  let answer = window.prompt("Quem é o autor do livro 'A República'?")
  if (answer.toLowerCase() === "platão" || answer.toLowerCase() === "platao") {
    correctAnswer()
    increaseLevel(80)
    return
  }
  makeTextRedAndThenReset()
  return
}