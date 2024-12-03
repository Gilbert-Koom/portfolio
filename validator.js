document.getElementById('form').addEventListener("submit", function (e) {
	e.preventDefault();
	validateForm()
})

function validateForm() {

	const email = document.getElementById('email');
	const emailError=document.getElementById('error');
	emailError.textContent='';

	let isValid = true;

	// Email validation
	if (!validator.isEmail(email.value)) {
			emailError.textContent = 'Valid email required';

			isValid = false;
	}

	if (isValid){
		alert('email is validated')

	}	
}



