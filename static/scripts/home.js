// Form validation javascript

function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;
  console.log(name, species, age);

  if(!name.length || !species.length || !age.length) {
    alert('Fields must not be blank');
    console.log(name, species, age);
    return false;
  }

  if(typeof name !== 'string' || typeof species !== 'string') {
    alert('Name and species must be alphabetical');
    console.log(typeof name, typeof species);
    return false;
  }

  if(isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
    alert('Age must be a number');
    console.log(typeof parseInt(age));
    return false;
  }

  return true;
}

// change text color javascript
document.getElementById('changeTextColor').addEventListener('click', function() {
  var color = document.getElementById('textColorInput').value;
  document.body.style.color = color;
  console.log('color', color);
  console.log('You clicked me');
});

// hide display javascript
document.getElementById('hideDisplay').addEventListener('click', function() {
  document.body.style.display = "none";
});
