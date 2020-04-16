var katzDeliLine = []

function takeANumber () {
  var num = 1
  return (`Order number` + num )
}

console.log (takeANumber())

function nowServing (katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return ("There is nobody waiting to be served!")
    } else {
      return (`Currently serving ${katzDeliLine.shift()}.`)
    }
}

var line = [];

function currentLine (katzDeliLine) {
  let i = 0
  while (i < katzDeliLine.length) {
    line.push(` ${[i+1]}. ${katzDeliLine[i]}`)
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
      return `The line is currently:${line}`
    }
}