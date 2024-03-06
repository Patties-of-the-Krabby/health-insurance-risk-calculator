async function age() {
  const age = document.getElementById("age-question").value

  // Note the URL (fetch) string will look something like '/add-two-integers?x=2&y=1' when it is sent.
  const url = "health-insurance-risk-calculator-server.azurewebsites.net"
  const fetchString = url+"/age?age="+age
  const response = await fetch(fetchString)
  const responseText = await response.text()
  document.getElementById("age-points").value = responseText
  console.log(document.getElementById("age-points").value)
}

// async function bmi(){
//   const height = document.getElementById("height").value
//   const weight = document.getElementById("weight").value
//   const url = "health-insurance-risk-calculator-server.azurewebsites.net"
//   const fetchString = url + "/bmi?height=" + height + "&weight=" + weight
//   const response = await fetch(fetchString)
//   const responseTextBMI = await response.text()

//   //change this to be the result of the bmi calculation 
//   document.getElementById("bmi-result").value = responseTextBMI
//   console.log(document.getElementById("bmi-result").value)



// }