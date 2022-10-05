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
