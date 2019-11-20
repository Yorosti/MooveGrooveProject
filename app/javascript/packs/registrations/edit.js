const FormDisabled = disabled => {
	document.querySelectorAll('.field input').forEach((elmnt) => {
		elmnt.disabled = disabled
	})
}




FormDisabled(true)
document.getElementById('editBtn').addEventListener('click', (evt) => {
	evt.target.classList.add('d-none')
	document.querySelectorAll('.actions input').forEach((elmnt) => elmnt.classList.remove('d-none'))
	FormDisabled(false)
})

document.querySelector('#clearFormBtn').addEventListener('click', (evt) => {
	document.getElementById('editBtn').classList.remove('d-none')
	document.querySelectorAll('.actions input').forEach((elmnt) => elmnt.classList.add('d-none'))
	FormDisabled(true)
})



function validateForm(evt) {
	evt.preventDefault();
	var validation = new FormValidation();
	validation.completeCheck();

	if (document.querySelector('#user_current_password').value === document.querySelector('#user_password').value) {
		validation.errors.push('New password should be different form the previous ')
	}


	if (validation.errors.length > 0) {
		validation.showErrors();
	} else {
		evt.target.submit();
	}
}

document.querySelector('form').addEventListener('submit', validateForm)