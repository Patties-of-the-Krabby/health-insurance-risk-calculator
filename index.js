async function age() {
  const age = document.getElementById("age-question").value

  // Note the URL (fetch) string will look something like '/add-two-integers?x=2&y=1' when it is sent.
  const url = "http://localhost:3000"
  const fetchString = url+"/age?age="+age
  const response = await fetch(fetchString)
  const responseText = await response.text()

  document.getElementById("age-result").innerHTML = responseText
  console.log(document.getElementById("age-result").innerHTML)
} 

async function bmi(){
  // Getting the invalid IDs to show invalid text
  const heightInvalid = document.getElementById("invalidHeight")
  const heightInvalid2 = document.getElementById("invalidHeight2")
  const weightInvalid = document.getElementById("invalidWeight")
  // parse the inputs to integers for invalidity check
  const height = parseInt(document.getElementById("height").value)
  const weight = parseInt(document.getElementById("weight").value)
  // if statements to display the "invalid text" if the inputs are invalid
  if (!Number.isInteger(height)) {
    heightInvalid.style.display = "block"
  } else {
    heightInvalid.style.display = "none"
  }
  if (height < 24){
    heightInvalid2.style.display = "block"
  } else {
    heightInvalid2.style.display = "none"
  }
  if (!Number.isInteger(weight)) {
    weightInvalid.style.display = "block"
  } else {
    weightInvalid.style.display = "none"
  }
  // Need to add a way to stop the total output calculation when the
  // submit button is pressed and the input is invalid

  const url = "http://localhost:3000"
  const fetchString = url + "/bmi?height=" + height + "&weight=" + weight
  const response = await fetch(fetchString)
  const responseTextBMI = await response.text()

  document.getElementById("bmi-result").innerHTML = responseTextBMI
  console.log(document.getElementById("bmi-result").innerHTML)
}

async function blood() {
  const blood = document.getElementById("blood-question").value

  // Note the URL (fetch) string will look something like '/add-two-integers?x=2&y=1' when it is sent.
  const url = "http:localhost:3000"
  const fetchString = url+"/blood?blood="+blood
  const response = await fetch(fetchString)
  const responseText = await response.text()
  document.getElementById("blood-result").innerHTML = responseText
  console.log(document.getElementById("blood-result").innerHTML)
} 

async function history() {
  const history = document.getElementById("fam-hist-question").value

  // Note the URL (fetch) string will look something like '/add-two-integers?x=2&y=1' when it is sent.
  const url = "http://localhost:3000"
  const fetchString = url+"/history?history="+history
  const response = await fetch(fetchString)
  const responseText = await response.text()
  document.getElementById("fam-hist-result").innerHTML = responseText
  console.log(document.getElementById("fam-hist-result").innerHTML)
} 

async function calculateRisk() {
  const age = document.getElementById("age-result").innerHTML
  const bmi = document.getElementById("bmi-result").innerHTML  
  const blood = document.getElementById("blood-result").innerHTML
  const history = document.getElementById("fam-hist-result").innerHTML

  // Note the URL (fetch) string will look something like '/add-two-integers?x=2&y=1' when it is sent.
  const url = "http://localhost:3000"
  const fetchString = url+"/calculateRisk?age="+age+"&bmi="+bmi+"&blood="+blood+"&history="+history
  const response = await fetch(fetchString)
  const responseText = await response.text()
  document.getElementById("risk-result").innerHTML = responseText
  console.log(document.getElementById("risk-result").innerHTML)
} 

async function ping(){
  const url = "https://health-insurance-risk-calculator-server.azurewebsites.net"
  const fetchString = url + "/api/ping"
  const response = await fetch(fetchString)
  const responseText = await response.text()
  console.log(responseText)
}

// https://health-insurance-risk-calculator-server.azurewebsites.net