const alphabets = document.querySelectorAll('.alphabet .content')
const inputBox = document.querySelector('.inputBox')
inputBox.value = ""

document.addEventListener('keypress', (e) => {
    alphabets.forEach(alphabet => {
        if (alphabet.innerHTML.toUpperCase() == e.code.slice(3))  {
            alphabet.parentElement.style.background = "crimson"
            inputBox.value += e.code.slice(3)
        }
    })
})