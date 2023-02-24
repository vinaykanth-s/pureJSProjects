const secondsHand = document.getElementById('seconds_hand')
const minutesHand = document.getElementById('minutes_hand')
const hoursHand = document.getElementById('hours_hand')

const getTime = () => {
  const currentTime = new Date()
  const seconds = currentTime.getSeconds()
  const minutes = currentTime.getMinutes()
  const hours = currentTime.getHours()
  //console.log(currentTime, seconds, minutes, hours)
  // 360 deg => circle
  // 360/60, 6 deg for each minutes
  const timeInterval = 6

  secondsHand.style.transform = `rotate(${seconds * timeInterval}deg)` //'rotate(seconds*timeIntervaldeg)'
  minutesHand.style.transform = `rotate(${
    minutes * timeInterval + seconds / 10
  }deg)`
  hoursHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)` //'rotate(seconds*timeIntervaldeg)'
}

setInterval(getTime, 100)
// getTime()
