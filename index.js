async function age() {
  const age = document.getElementById("age-question").value

  // Note the URL (fetch) string will look something like '/add-two-integers?x=2&y=1' when it is sent.
  const url = "https://health-insurance-risk-calculator-server.azurewebsites.net"
  const fetchString = url+"/age?age="+age
  const response = await fetch(fetchString)
  const responseText = await response.text()
<<<<<<< HEAD
  document.getElementById("age-result").value = responseText
  console.log(document.getElementById("age-result").value)
} 
=======
  document.getElementById("age-points").value = responseText
  console.log(document.getElementById("age-points").value)
}
>>>>>>> 3ff5125ab26a9f0bb8c5b891e8b0920152edc700

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

  const url = "https://health-insurance-risk-calculator-server.azurewebsites.net"
  const fetchString = url + "/bmi?height=" + height + "&weight=" + weight
  const response = await fetch(fetchString)
  const responseTextBMI = await response.text()

  document.getElementById("bmi-result").value = responseTextBMI
  console.log(document.getElementById("bmi-result").value)
}

<<<<<<< HEAD
async function blood() {
  const blood = document.getElementById("blood-question").value

  // Note the URL (fetch) string will look something like '/add-two-integers?x=2&y=1' when it is sent.
  const url = "https://health-insurance-risk-calculator-server.azurewebsites.net"
  const fetchString = url+"/blood?blood="+blood
  const response = await fetch(fetchString)
  const responseText = await response.text()
  document.getElementById("blood-result").value = responseText
  console.log(document.getElementById("blood-result").value)
} 

async function history() {
  const history = document.getElementById("fam-hist-question").value

  // Note the URL (fetch) string will look something like '/add-two-integers?x=2&y=1' when it is sent.
  const url = "https://health-insurance-risk-calculator-server.azurewebsites.net"
  const fetchString = url+"/history?history="+history
  const response = await fetch(fetchString)
  const responseText = await response.text()
  document.getElementById("fam-hist-result").value = responseText
  console.log(document.getElementById("fam-hist-result").value)
} 

async function calculateRisk() {
  const age = document.getElementById("age-result").value
  const bmi = document.getElementById("bmi-result").value  
  const blood = document.getElementById("blood-result").value
  const history = document.getElementById("fam-hist-result").value

  // Note the URL (fetch) string will look something like '/add-two-integers?x=2&y=1' when it is sent.
  const url = "https://health-insurance-risk-calculator-server.azurewebsites.net"
  const fetchString = url+"/calculateRisk?age="+age+"&bmi="+bmi+"&blood="+blood+"&history="+history
  const response = await fetch(fetchString)
  const responseText = await response.text()
  document.getElementById("risk-result").value = responseText
  console.log(document.getElementById("risk-result").value)
} 
=======
>>>>>>> 3ff5125ab26a9f0bb8c5b891e8b0920152edc700

async function ping(){
  const url = "https://health-insurance-risk-calculator-server.azurewebsites.net"
  const fetchString = url + "/api/ping"
  const response = await fetch(fetchString)
  const responseText = await response.text()
  console.log(responseText)
}