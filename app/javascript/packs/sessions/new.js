

function validateForm(evt){
    evt.preventDefault();
    var validation = new FormValidation();
    validation.checkEmails();
    validation.checkPasswords()
    

    if (validation.errors.length > 0) {
        validation.showErrors()
    }else{
      evt.target.submit();
    }
  }



  document.querySelector('form').addEventListener('submit', validateForm)
