const newsletter = document.querySelector("#newsletter")
const emailKontrola = document.querySelector("#email")

emailKontrola.addEventListener("input", () => {
    if (emailKontrola.value.trim() === "") {emailKontrola.classList.add("pink-border")}
    else if (emailKontrola.value.indexOf('@') === -1) {emailKontrola.classList.add("pink-border")}
    else {emailKontrola.classList.remove("pink-border")}
})

newsletter.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailTxt = document.querySelector("#email")
    newsletter.textContent = `Byl jsi přihlášen k odběru newsletteru na Váš email: ${emailTxt.value}.`
})

