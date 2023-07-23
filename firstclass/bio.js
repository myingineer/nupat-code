const details = []

function getDetails() {
    const emailInputElement = document.querySelector('.js-email-input');
    const nameInputElement = document.querySelector('.js-name-input');
    const passwordInputElement = document.querySelector('.js-password-input');

    emailInput = emailInputElement.value 
    nameInput = nameInputElement.value
    passwordInput = passwordInputElement.value

    details.push({
        email: emailInput,
        name: nameInput,
        password: passwordInput
    })

    console.log(details)

    emailInputElement.value = ''
    nameInputElement.value = ''
    passwordInputElement.value = ''
}