function submitForm(event) {

  event.preventDefault();
    const form = document.getElementById('registerForm');
    var email = document.getElementById('email').value;
    var passwd =document.getElementById('passwrd').value;
    form.submitForm()

}
