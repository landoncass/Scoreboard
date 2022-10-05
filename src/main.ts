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

function updateScore(id2: string) {
  console.log
  const changeScoreButton = document.querySelector(
    `.${id2} i`
  ) as HTMLButtonElement
  const scoreHeadingElement = document.querySelector(`h3`) as HTMLHeadingElement

  console.log({ changeScoreButton, scoreHeadingElement })

  function increaseScore(event: MouseEvent) {
    const plusButtonPressed = event.target
    if (plusButtonPressed instanceof HTMLButtonElement) {
      const currentScore = plusButtonPressed.value
      scoreHeadingElement.innerText = currentScore
    }
  }
  changeScoreButton?.addEventListener('click', increaseScore)
}

updateScore('team1')
updateScore('team2')
