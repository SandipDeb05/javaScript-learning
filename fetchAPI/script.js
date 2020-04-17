document.getElementById("getText").addEventListener("click", getText);
const text = document.getElementById("getData");

function getText() {
    // fetch accept a url or the path of the file
    // fetch returns a promises
    fetch('./sample.txt').then((res) => {
        return res.text();
    }).then((data) => {
        text.textContent = data;
    }).catch((err) => {
        console.log(err);
    })
}