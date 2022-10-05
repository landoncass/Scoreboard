import './style.css'

function updateTeam(id: string) {
  console.log(id)
  const inputElement = document.querySelector(
    `.${id} input`
  ) as HTMLInputElement
  const headingElement = document.querySelector(
    `.${id} h2`
  ) as HTMLHeadingElement

  console.log({ inputElement, headingElement })
  function updateTeamName(event: Event) {
    const elementChanged = event.target
    console.log('Update', headingElement)
    if (elementChanged instanceof HTMLInputElement) {
      const currentInputValue = elementChanged.value
      headingElement.innerText = currentInputValue
    }
  }
  inputElement.addEventListener('input', updateTeamName)
}

updateTeam('team1')
updateTeam('team2')

function changeScore(id: string) {
  const increaseScoreButton = document.querySelector(
    `.${id} i`
  ) as HTMLButtonElement
  const scoreHeadingElement = document.querySelector(
    `.${id} h3`
  ) as HTMLHeadingElement

  console.log({ increaseScoreButton, scoreHeadingElement })

  function increaseScore(event: Event)
  {
    const scoreElementChanged = event.target
    
    if (scoreElementChanged instanceof HTMLButtonElement) {
    const currentScore = plusButtonPressed.value
    scoreHeadingElement.innerText +=
  }
  
  increaseScore.addEventListener('click', increaseScore(event))
}
changeScore('team1')
changeScore('team2')
