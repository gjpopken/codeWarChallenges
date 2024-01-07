function cuckooClock(inputTime, chimes) {
    // the function should first check if it chimes on the input
    let pseudoChime = 0
    let currentTime = timeStrToObj(inputTime)

    // if the current time is on the hour, 15, 30 or 45, it will add the appropriate pseudoChimes
    pseudoChime = checkTheTime(currentTime, pseudoChime)
    // if this meets the criteria, then return. 
    if (pseudoChime >= chimes) {
        timeToStr(currentTime)
        return `${currentTime.hr}:${currentTime.min}`
    }
    // begin incrementing. 
    while (pseudoChime < chimes) {
        currentTime.min++
        // reformats the time
        reformatTime(currentTime)
        pseudoChime = checkTheTime(currentTime, pseudoChime)
        if (pseudoChime >= chimes) {
            timeToStr(currentTime)
            return `${currentTime.hr}:${currentTime.min}`
        }
    }
}

function reformatTime(currentTime) {
    if (currentTime.min === 60) {
        currentTime.min = 0
        currentTime.hr++
    }
    if (currentTime.hr === 13) {
        currentTime.hr = 1
    }
}

function timeToStr(currentTime) {
    if (currentTime.min === 0) {
        currentTime.min = '00'
    }
    if (currentTime.hr < 10) {
        currentTime.hr = `0${currentTime.hr}`
    }
}

function checkTheTime(currentTime, pseudoChime) {
    if (currentTime.min === 0) {
        pseudoChime += currentTime.hr
    } else if (currentTime.min === 15 || currentTime.min === 30 || currentTime.min === 45) {
        pseudoChime++
    }
    return pseudoChime
}

function timeStrToObj(inputTime) {
    return {
        hr: (inputTime[0] + inputTime[1]) * 1,
        min: (inputTime[3] + inputTime[4]) * 1
    }
}

console.log(cuckooClock('11:28', 5))    // expecting 12:00
console.log(cuckooClock('03:06', 9))    // expecting 04:00
console.log(cuckooClock('09:00', 5))    // expecting 09:00
console.log(cuckooClock('12:15', 30))   // expecting 03:00