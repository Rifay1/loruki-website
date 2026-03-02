// Formulaire template
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const successMessage = document.getElementById("success-message");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || phoneInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 2000);

        
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${phoneInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        successMessage.style.display = 'block';
        setTimeout(() => successMessage.style.display = 'none', 2000);

        emailjs.sendForm(
            "service_swkhgym",
            "template_od88rul",
            this
        )
        .then(function() {
            successMessage.style.display = "block";
            form.reset();
        }, function(error) {
            alert("Erreur lors de l'envoi.");
        });

     // Clear fields
         nameInput.value = '';
         emailInput.value = '';
         phone.value = '';
    }
};