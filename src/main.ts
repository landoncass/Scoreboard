import './style.css'

function setupTeam(id: string) {
  let score = 0
  const inputElement = document.querySelector(
    `.${id} input`
  ) as HTMLInputElement
  const headingElement = document.querySelector(
    `.${id} h2`
  ) as HTMLHeadingElement
  const addButton = document.querySelector(`.${id} .add`) as HTMLElement
  const scoreElement = document.querySelector(`.${id} h3`) as HTMLElement
  const subtractButton = document.querySelector(
    `.${id} .subtract`
  ) as HTMLElement
  const resetButton = document.querySelector('.reset') as HTMLButtonElement
  const teamSection = document.getElementById('section')

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

  function resetScores(_event: Event) {
    score = 0
    scoreElement.innerText = score.toString()
    teamSection!.style.backgroundColor = 'grey'
  }
  resetButton?.addEventListener('click', resetScores)

  function incrementScore(_event: Event) {
    if (score < 21) {
      score += 1
      scoreElement.innerText = score.toString()
    }
    if (score === 21) {
      teamSection!.style.backgroundColor = 'lime'
      alert(`${headingElement.innerText} got 21 points and won the game!`)
    }
  }
  addButton?.addEventListener('click', incrementScore)

  function decrementScore(_event: Event) {
    console.log('sub')
    if (score > 0) {
      score -= 1
      scoreElement.innerText = score.toString()
    }
  }
  console.log(subtractButton)
  subtractButton?.addEventListener('click', decrementScore)
}

setupTeam('team1')
setupTeam('team2')
