const FormDisabled = (disabled = true) => {
	document.querySelectorAll('.field input').forEach((elmnt) => {
		elmnt.disabled = disabled
	})
}
const editButton = document.querySelector('#editBtn')
const actionInputs = document.querySelectorAll('.actions input')

FormDisabled();


editButton.addEventListener('click', (evt) => {
	evt.target.classList.add('d-none')
	actionInputs.forEach((elmnt) => elmnt.classList.remove('d-none'))
	FormDisabled(false)
})

document.querySelector('#clearFormBtn').addEventListener('click', () => {
	editButton.classList.remove('d-none')
	actionInputs.forEach((elmnt) => elmnt.classList.add('d-none'))
	FormDisabled(true)
})



function validateForm(evt) {
	evt.preventDefault();
	var validation = new FormValidation();
	
	if(document.querySelector('#user_password').value != ''){
		validation.completeCheck();
		
		if (document.querySelector('#user_current_password').value === document.querySelector('#user_password').value) {
			validation.errors.push('New password should be different form the previous ')
		}

		if (document.querySelector('#user_password').value != document.querySelector('#user_password_confirmation').value) {
			validation.errors.push(' Passwords don\'t match ')
		}
	}else{
		validation.checkDates()
		validation.checkEmails()
		validation.checkTexts()
	}


	if (validation.errors.length > 0) {
		validation.showErrors();
	} else {
		evt.target.submit();
	}
}

document.querySelector('form').addEventListener('submit', validateForm)