window.onload = dice;
function dice() {
  const endpoint = "https://api.adviceslip.com/advice";
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => data.slip)
    .then((data) => {
      document.getElementById("number").textContent = `#${data.id}`;
      document.getElementById("quotes").textContent = `"${data.advice}"`;
    })
    .catch((e) => console.error(e));
}
