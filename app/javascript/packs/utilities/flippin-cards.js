
function ToggleCard(){
  this.parentElement.parentElement.classList.toggle('is-flipped')
}

function ToggleSelectItem(){
  document.querySelectorAll('.selected').forEach((el) =>  el.classList.remove('selected'))

  this.classList.toggle('selected')
  document.querySelector('#activity_archive_id').setAttribute('value', this.firstElementChild.getAttribute('id'))
}


 

  window.ToggleCard = ToggleCard
  window.ToggleSelectItem = ToggleSelectItem