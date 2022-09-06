let homeScore = 0
let awayScore = 0
let neutralScore = 0

function drawAwayScore() {
  document.getElementById("awayScore").innerText = awayScore.toFixed(2)
}


// badguy +1
function badGuysPlus1() {
  awayScore++
  drawAwayScore()
}

// badguy +3
function badGuysPlus3() {
  awayScore += 3
  drawAwayScore()
}
// badguy +6
function badGuysPlus6() {
  awayScore += 6
  drawAwayScore()
}

// badguy -1
function badGuysMinus1() {
  awayScore--
  drawAwayScore()
}

// badguy -3
function badGuysMinus3() {
  awayScore -= 3
  drawAwayScore()
}

// badguy -6
function badGuysMinus6() {
  awayScore -= 6
  drawAwayScore()
}

// HomeScore
function drawHomeScore() {
  document.getElementById("homeScore").innerText = homeScore
}

function goodGuysPlus1() {
  homeScore++
  drawHomeScore()
}

function goodGuysPlus3() {
  homeScore += 3
  drawHomeScore()
}

function goodGuysPlus6() {
  homeScore += 6
  drawHomeScore()
}

function goodGuysMinus1() {
  homeScore--
  drawHomeScore()
}


function goodGuysMinus3() {
  homeScore -= 3
  drawHomeScore()
}

function goodGuysMinus6() {
  homeScore -= 6
  drawHomeScore()
}



// reset score
function resetScore() {
  homeScore = 0
  awayScore = 0
  drawHomeScore()
  drawAwayScore()
}


// // NeutralScore
// function addTeam {
//   document.getElementById('hidden').innerText
// }


// function drawNeutralScore() {
//   document.getElementById("neutralScore").innerText = neutralScore
// }

// function neutralGuysPlus1() {
//   neutralScore++
//   drawNeutralScore()
// }

// function neutralGuysPlus3() {
//   neutralScore += 3
//   drawNeutralScore()
// }

// function neutralGuysPlus6() {
//   neutralScore += 6
//   drawNeutralScore()
// }

// function neutralGuysMinus1() {
//   neutralScore--
//   drawNeutralScore()
// }


// function neutralGuysMinus3() {
//   neutralScore -= 3
//   drawNeutralScore()
// }

// function neutralGuysMinus6() {
//   neutralScore -= 6
//   drawNeutralScore()
// }