// let value = 10;
fetch("https://health-insurance-risk-calculator-server.azurewebsites.net/age", {
  method: "POST",
  body: JSON.stringify({
    age: 10,

  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
