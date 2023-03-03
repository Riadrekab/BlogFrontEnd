

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById('registerForm');
  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var phone =document.getElementById('phone').value;
  var passwd =document.getElementById('passwrd').value;

  var missingVals = document.querySelectorAll('.missingVal');
  var wrongVals = document.querySelectorAll('.wrongVal');

  emailValid = validateEmail(email)
  if(!phone == '') {
    phoneValid = validatePhoneNumber(phone)
  }



    if(firstName == "" || email == "" || phone == "" || !emailValid || !phoneValid) {
      if (firstName == "") {
        console.log(firstName)
        missingVals[0].style.display = 'inline';
      }
      else {
        missingVals[0].style.display = 'none';
      }
      if (lastName == "") {
          missingVals[1].style.display = 'inline';
        }
      else {
          missingVals[1].style.display = 'none';
        }
      if (email == "") {
          missingVals[2].style.display = 'inline';
        wrongVals[0].style.display = 'none';

        }
      else if (!emailValid) {
        missingVals[2].style.display = 'none';
        wrongVals[0].style.display = 'inline';
      }
      else {
        missingVals[2].style.display = 'none';
        wrongVals[0].style.display = 'none';
      }
      if (phone == "") {
          missingVals[3].style.display = 'inline';
          wrongVals[1].style.display = 'none';

        }
      else if(!phoneValid) 
          {
          missingVals[3].style.display = 'none';
          wrongVals[1].style.display = 'inline';
        }
      else {
        missingVals[3].style.display = 'none';
        wrongVals[1].style.display = 'none';
      }
      if(passwd.length < 8) {
        missingVals[4].style.display = 'inline';
      }
      else {
        missingVals[4].style.display = 'none';
      }
      
      return false
    }
    else {
     location.replace("index.html")
    }

}



function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function validatePhoneNumber(value) {
  return value.match(/\d/g).length===10;
}
