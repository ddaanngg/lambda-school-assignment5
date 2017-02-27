// Form validation javascript

function validateForm() {
  var name = document.getElementById('nameInput').value;
  species = document.getElementById('speciesInput').value;
  age = document.getElementById('ageInput').value;

  if(!name.length || !species.length || !age.length) {
    alert('Fields must not be blank');
    console.log(name, species, age);
  }

  if(typeof parseInt(age) !== 'number') {
    alert('Age must be a number');
    console.log(typeof(age));
  }

  return false;
}
