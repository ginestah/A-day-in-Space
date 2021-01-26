
//function to grab data
async function fetchData(date) {
  try {
    let response = await axios.get(`https://api.nasa.gov/planetary/apod/?date=${date}&api_key=dJXmtgi5Ot3o758TqppoAXRJ2SRTk6sTEtJ141dM`)
    const data = response.data
    removeDescription()
    showNasaPhoto(data)
    console.log(data)
    return response
  } catch (error) {
    console.log(error)
  }
}



//function to append content to the DOM
// function showNasaPhoto(data) {
//   let nasaPhoto = `
// <img src='${data.hdurl}'>
// `
//   let photoContainer = document.querySelector('#photo-container')
//   photoContainer.insertAdjacentHTML('beforeend', nasaPhoto)

// }

function showNasaPhoto(data) {
  if (data.copyright == undefined) {
    data.copyright = "NASA APOD"
  }
  let nasaDescription = `
  <p id="photo-explanation">${data.explanation}</p>
  <footer class='copyright'>&copy;${data.copyright}</footer>
  `
  let explanationContainer = document.querySelector('#explanation-container')
  explanationContainer.insertAdjacentHTML('beforeend', nasaDescription)
  document.querySelector('body').style.backgroundImage = `url('${data.hdurl}')`
}




//Dynamically search dates to choose photo using html input
let button = document.querySelector('#search')
button.addEventListener('click', (e) => {
  e.preventDefault()
  let value = document.querySelector('#date-input').value
  fetchData(value)
})


//remove description text when new photo is loaded
function removeDescription() {
  const explanationContainer = document.querySelector('#explanation-container')
  while (explanationContainer.lastChild) {
    explanationContainer.removeChild(explanationContainer.lastChild)
  }
}

