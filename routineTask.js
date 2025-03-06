function rountineTask (wakeUpTime, breakfastTime, lunchTime, dinnerTime, sleepTime) {
  // Your code here
  if(wakeUpTime < breakfastTime && breakfastTime < lunchTime && lunchTime < dinnerTime && dinnerTime < sleepTime) {
    addTextToPage("Routine is followed correctly");
    return;
  }
  if (wakeUpTime >= breakfastTime) {
    addTextToPage("Wake up time is later than breakfast time");
  }
  if (breakfastTime >= lunchTime) {
    addTextToPage("Breakfast time is later than lunch time");
  }
  if (lunchTime >= dinnerTime) {
    addTextToPage("Lunch time is later than dinner time");
  }
  if (dinnerTime >= sleepTime) {
    addTextToPage("Dinner time is later than sleep time");
  }
}

addTextToPage('IG\'s routine task!')
addInputToPage('Wake up time', 6)
addInputToPage('Breakfast time', 7)
addInputToPage('Lunch time', 12)
addInputToPage('Dinner time', 18)
addInputToPage('Sleep time', 22)
addButtonToPage('Check routine', () => {
  const wakeUpTime = getInputAsNumber('Wake up time')
  const breakfastTime = getInputAsNumber('Breakfast time')
  const lunchTime = getInputAsNumber('Lunch time')
  const dinnerTime = getInputAsNumber('Dinner time')
  const sleepTime = getInputAsNumber('Sleep time')
  rountineTask(wakeUpTime, breakfastTime, lunchTime, dinnerTime, sleepTime)
})
