
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

function showNasaPhoto(data) {
  if (data.copyright == undefined) {
    data.copyright = "NASA APOD"
  }
  let nasaDescription = `
  <img src="${data.hdurl}" alt ='nasa APOD' width='400px' height='auto' id='displayed-photo'>
  <p id="photo-explanation">${data.explanation}</p>
  <div class='copyright'>&copy;${data.copyright}</div>
  <button id="save">Save Photo for Session</button>
  `
  let explanationContainer = document.querySelector('#explanation-container')
  explanationContainer.insertAdjacentHTML('beforeend', nasaDescription)
  // document.querySelector('body').style.backgroundImage = `url('${data.hdurl}')`

  //create event listener for save photo button that appears with previous function
  let photoSave = `
  <img src="${data.hdurl}" alt="saved image" width="200px" height="200px">
  `
  document.querySelector('#save').addEventListener('click', (e) => {
    e.preventDefault()
    let photoContainer = document.querySelector('#photo-save')
    photoContainer.insertAdjacentHTML('beforeend', photoSave)
  })
}





//Button to grab random photo for user
let random = document.querySelector('#random')
random.addEventListener('click', (e) => {
  e.preventDefault()
  let value = `${randomInt(1996, 2020)}-${randomInt(1, 12)}-${randomInt(1, 20)}`
  fetchData(value)
})

//Dynamically search dates to choose photo using html input
let button = document.querySelector('#search')
button.addEventListener('click', (e) => {
  e.preventDefault()
  let value = document.querySelector('#date-input').value
  // console.log(value)

  //check if 
  if (value < '1995-06-16') {
    value = `${randomInt(1996, 2020)}-${randomInt(1, 12)}-${randomInt(1, 20)}`
    // console.log(value)
  } else if (value == 0) {
    alert('cannot be empty')

  }
  fetchData(value)
})

//random number function between two values https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//remove description text when new photo is loaded
function removeDescription() {
  const explanationContainer = document.querySelector('#explanation-container')
  while (explanationContainer.lastChild) {
    explanationContainer.removeChild(explanationContainer.lastChild)
  }
}

