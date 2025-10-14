const login = document.getElementsByClassName(`login-text`)
const loginBtn = document.getElementById(`login-btn`)
const loading = document.getElementById(`loading`)
const inputText = document.getElementsByClassName(`input-text`)


loginBtn.addEventListener('click', () =>{
    loading.classList.add("loader")
})
