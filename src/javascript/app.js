import '../scss/app.scss'

const formElement = document.querySelector('#form')

formElement.addEventListener('submit', handleSubmitForm)

function handleSubmitForm(event) {
  const isValid = formElement.checkValidity()

  if (!isValid) {
    event.preventDefault()
    formElement.classList.add('validation-enabled')
  }
}
