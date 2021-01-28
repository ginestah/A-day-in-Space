
#  **App Title**:
A day in Space
# **App Description**:
Access photo of the day from NASA API to display the photo of a users chosen day, as well as a description of the photo.
# **API**: 
1. I plan to use the NASA APOD API to fetch photos and descriptions.
[Link to API](https://api.nasa.gov/)
# **API Snippet**:
```{
    "date": "2018-05-12",
    "explanation": "A recent informal poll found that astronomers don't yet have a good collective noun for a group of black holes, but they need one. The red circles in this Chandra Observatory X-ray image identify a group of a dozen black holes that are members of binary star systems. With 5 to 30 times the mass of the Sun, the black hole binaries are swarming within about 3 light-years of the center of our galaxy where the supermassive black hole identified as Sagittarius A* (Sgr A*) resides. Yellow circles indicate X-ray sources that are likely less massive neutron stars or white dwarf stars in binary star systems. Alone, black holes would be invisible, but as part of a binary star system they accrete material from their normal companion star and generate X-rays. At the distance of the galactic center Chandra can detect only the brighter of these black hole binary systems as point-like sources of X-rays, hinting that many fainter X-ray emitting black hole binaries should exist there, as yet undetected.",
    "hdurl": "https://apod.nasa.gov/apod/image/1805/sgra_swarm_sources.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "A Plurality of Singularities at the Galactic Center",
    "url": "https://apod.nasa.gov/apod/image/1805/sgra_swarm_sources.jpg"
}
```
# **Wireframes**:
![Wireframe of mobile app](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,w_222/v1611609482/Screen_Shot_2021-01-25_at_4.17.39_PM_vxivvq.png)

# **MVP**
1. Access photos and descriptions from NASA API
2. Append photos to the dom in a visually pleasing manner
3. Grab users input to find the photo on that day
4. Reset photo if another date is searched

# **Post-MVP**: 
1. CSS animations/warp speed to your photo
2. Enable full screen mode for immersiveness 
3. Possible saving of the photos you liked.
# **Goals**: 

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval + Pseudocode | Complete
|Jan 27| MVP | Complete
|Jan 28| Advanced styling| Incomplete
|Jan 29| Desktop styling | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

# **Priority Matrix**
![Priority Matrix](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,w_700/v1611607939/Priority_matrix_oqpqrp.jpg)


# **Timeframes**: 


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Render applicable content to the DOM | H | 3hrs| 3hr|3hr|
| User search picture by date| H | 3hrs| 30mins|30mins|
| Adjust time for dates pre 1995|M|3hrs|3hrs|3hrs|
| Basic HTML and CSS| H | 2hrs|2hrs | 2hrs |
| Define flex items and containers| H | 2hrs|2hrs| 2hrs |
|Reset DOM if another date is searched, so no stacked photos|M|2hr|2hrs|2hrs|
|Media Queries for responsive design|L|3hrs|3hrs|3hrs|
|Add CSS animations|L|3hrs|0|0|
|Further CSS styling|L|3hrs|3hr|3hr|
|Utilize second API for full screen mode|L|2hrs|0|0|
|Allow session saving of photos|M|3hr|2hrs|2hrs|
|Disable search button if input field is blank|L|3hr|1hr|1hr|
| Total |H|29hrs|0|0|

# Code-Snippet

Added function to add photo as a background image, display the photo description and copyright. The if statement checks to see if there is a copyright on the image, if undefined copyright is given to NASA APOD, otherwise the photographer is shown as copyright holder.

``` 
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
```

# Change-log
Decided not to display the image as a background because it either came out distorted or didn't fit.

Switched back to flexbox

Renamed app to "A day in Space"

Some interesting dates for examples:
2-13-2011
1-12-2015
8-13-2013
9-20-2011 (video)
2-5-2012


