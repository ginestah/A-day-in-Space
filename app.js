
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
  // This if statements checks to see if there is copyright data, if there is it displays it, if not copyright is given to NASA

  if (data.copyright == undefined) {
    data.copyright = "NASA APOD"
  }

  // This if statement checks to see if there is an hdurl, if undefined it means there is a video, and so the video is shown.
  if (data.hdurl == undefined) {
    let nasaVideo = `
    <iframe width='350vw' height='auto' src='${data.url}' allowfullscreen='allowfullscreen'>
    <p id="photo-explanation">${data.explanation}</p>
    <div class='copyright'>&copy;${data.copyright}</div>
    `
    let explanationContainer = document.querySelector('#explanation-container')
    explanationContainer.insertAdjacentHTML('beforeend', nasaVideo)
  } else {
    let nasaDescription = `
  <a href="${data.hdurl}" target="_blank"><img src="${data.hdurl}" alt="displayed photo" height='auto' width='50%'></a><br>
  <button id="save">Save Photo for Session</button>
  <p id="photo-explanation">${data.explanation}</p>
  <div class='copyright'>&copy;${data.copyright}</div>

  `
    let explanationContainer = document.querySelector('#explanation-container')
    explanationContainer.insertAdjacentHTML('beforeend', nasaDescription)

    //create event listener for save photo button that appears with previous function
    let photoSave = `
  <a href="${data.hdurl}" target="_blank"><img src="${data.hdurl}" alt="high def photo" height='auto' width='350vw' id='saved-photo'></a><br>
  `
    document.querySelector('#save').addEventListener('click', (e) => {
      e.preventDefault()
      let photoContainer = document.querySelector('#photo-save')
      photoContainer.insertAdjacentHTML('beforeend', photoSave)
    })
  }
}






//Button to grab random photo for user
let random = document.querySelector('#random')
random.addEventListener('click', (e) => {
  e.preventDefault()
  let value = `${randomInt(1996, 2020)}-${randomInt(1, 12)}-${randomInt(1, 20)}`
  fetchData(value)
})


// disable search button if no input provided
function disable() {
  if (document.querySelector('#date-input').value === '') {
    document.querySelector('#search').disabled = true
  } else {
    document.querySelector('#search').disabled = false
  }
}



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

