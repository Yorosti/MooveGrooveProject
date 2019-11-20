

  function validateForm(evt){
    evt.preventDefault();

    var validation  = new FormValidation();
    validation.checkDates()
    validation.checkNumbers()
    validation.checkSpecific({
      '#activity_archive_id': 'Please choose an activity'
    })

    if(validation.errors.length > 0){
      validation.showErrors()
    }else{
      evt.target.submit();
    }
  }



  document.querySelector('form').addEventListener('submit', validateForm)
  document.querySelectorAll('.card-toggler').forEach((item) => item.addEventListener('click', window.ToggleCard))
  document.querySelectorAll('.activity-list li').forEach((item) => item.addEventListener('click', window.ToggleSelectItem))