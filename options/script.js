const getOptionsForm = () => document.getElementById('optionsForm')
const getStorage = () => browser.storage.sync

const saveForm = event => {
  event.preventDefault()

  const optionsForm = getOptionsForm()
  const userAccessToken = optionsForm.elements['userAccessToken'].value
  const trackerSubmitUrl = optionsForm.elements['trackerSubmitUrl'].value

  getStorage().set({userAccessToken, trackerSubmitUrl}).catch(
    error => {
      const message = `Error saving preferences: ${error}`
      window.console.error(message)
      window.alert(message)
    }
  )
}

const initForm = () => {
  const optionsForm = getOptionsForm()
  optionsForm.addEventListener('submit', saveForm)

  getStorage().get(null).then(
    results => {
      if (results.hasOwnProperty('userAccessToken')) {
        optionsForm.elements['userAccessToken'].value = results.userAccessToken
      }
      if (results.hasOwnProperty('trackerSubmitUrl')) {
        optionsForm.elements['trackerSubmitUrl'].value = results.trackerSubmitUrl
      }
    },
    error => {
      const message = `Error loading preferences: ${error}`
      window.console.error(message)
      window.alert(message)
    }
  )
}

document.addEventListener('DOMContentLoaded', initForm)
