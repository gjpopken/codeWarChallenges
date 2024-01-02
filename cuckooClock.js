function cuckooClock(inputTime, chimes) {
  let hourMinute = timeToArray(inputTime)
  let pseudoChimes = 0 // to add chimes until they get to the the chimes count
  let hours = hourMinute[0]
  let minutes = hourMinute[1]

  // Check first input for if there are chimes
  checkTime(hourMinute) ? pseudoChimes++ : pseudoChimes += hours


  // if we haven't achieved the number of chimes yet,
  // incremement minutes, re format, and check again
  while (pseudoChimes < chimes) {
    minutes++
    if (minutes === 60) {
      minutes = 0
      hours++
    }
    checkTime([hours, minutes]) ? pseudoChimes++ : pseudoChimes += hours

  } // end while loop

  console.log(hours, minutes)
  console.log(timeToString([hours, minutes]))
  // loop that will increment and check if we're on the hour or quarter hour
}

//let inputTime = '06:15'

//let chimes = 5


function checkTime(timeArray) {
  let min = timeArray[1]
  let hr = timeArray[0]
  if (min === 15 || min === 30 || min === 45) {
    //pseudoChimes++
    return true
  } else if (min === 0) {
    // pseudoChimes += hr
    return false
  }
} // end checkTime function

function reformatTime(timeArray) {
  let min = timeArray[1]
  let hr = timeArray[0]
  if (min === 60) {
    minutes = 0
    hours++
  }
} // end reformatTime function

function timeToString(timeArray) {
  let min = timeArray[1]
  let hr = timeArray[0]
  //console.log('min', min, 'hr', hr)
  let string = ''
  if (hr < 10) {
    string = `0${hr}:`
  } else {
    string = `${hr}:`
  }
  if (min < 10) {
    string += `0${min}`
  } else {
    string += `${min}`
  }
  return string
} // end timeToString function


function timeToArray(string) {
  let hourMinute = []
  let toAdd = 0
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      toAdd += string[i]
      toAdd *= 10
    }
    if (i === 1) {
      toAdd += Number(string[i])
      hourMinute.push(toAdd)
      toAdd = 0
    }
    if (i === 3) {
      toAdd += string[i]
      toAdd *= 10
    }
    if (i === 4) {
      toAdd += Number(string[i])
      hourMinute.push(toAdd)
      toAdd = 0
    }

  }// end loop for putting numbers into array
  console.log(hourMinute)
  return hourMinute
}//end timeToArray ()

cuckooClock('11:13', 3)