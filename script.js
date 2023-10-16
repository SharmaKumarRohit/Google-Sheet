const scriptURL = 'https://script.google.com/macros/s/AKfycbyXvTRhkV_GyyAyq6Xx2oI1wiiWulMTjIF_kayByIcl17waDTNfKUurV7lr9EhNx2jM/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subscribing!"
    })
    setTimeout(function() {
        msg.innerHTML = ""
    }, 6000)
    form.reset()
    .catch(error => console.error('Error!', error.message))
})