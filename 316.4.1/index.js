const errorDisplay = document.getElementById("errorDisplay")
const registrationForm = document.getElementById('registration')
const loginForm = document.getElementById('login')
const username = document.getElementById("username")

const handleSubmit = (e) => {
    e.preventDefault()
}

const handleEmptyInput = (e) => {
    console.log("VALUE", e.target.value)
    if (e.target.value.length == 0){
        errorDisplay.style.display = 'block'
        errorDisplay.innerHTML = `${e.target.name} cannot be empty`
    }
}

const handleUsername = (e)=>{
    const regex = /^(?!.*\s)[a-zA-Z\d]{4,}$/
    console.log("TEST", regex.test(e.target.value))
    if (!regex.test(e.target.value)){
        errorDisplay.style.display = 'block'
      return  errorDisplay.innerHTML = `${e.target.name} has to be...`
    } else {
        errorDisplay.style.display = 'none'
    }
}

registrationForm.addEventListener("submit", ()=>{
    handleEmptyInput()
})

username.addEventListener("focusout", (e)=>{handleUsername(e)
handleEmptyInput(e)})

// const regex = /^(?!.*[^a-zA-Z0-9])w*(w)w*1w*$/

const emailInput = document.getElementById("emailInput")

emailInput.addEventListener("focusout", (e)=>{
    console.log(e)
})

