function validateForm(evt) {
    evt.preventDefault();
    var validation = new FormValidation();
    validation.completeCheck();

    if (document.querySelector('#user_password_confirmation').value != document.querySelector('#user_password').value) {
        errors.push('Passwords don\'t match')

    }



    if (validation.errors.length > 0) {
        validation.showErrors()
    } else {
        evt.target.submit();
    }
}



document.querySelector('form').addEventListener('submit', validateForm)