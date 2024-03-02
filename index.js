let value = 10;
fetch("https://health-insurance-risk-calculator-server.azurewebsites.net", {
  method: "POST",
  body: JSON.stringify({
    age: value,
    title: "Fix my bugs",
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
