const refs = {
	formLogin: document.querySelector(".login-form"),
};
console.dir(refs.formLogin);
refs.formLogin.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const formElements = event.currentTarget.elements;
	if (formElements.email.value === "" || formElements.password.value === "") {
		alert("всі поля повинні бути заповнені");
	}
	const formData = new FormData(event.currentTarget);
	const resultData = {};
	formData.forEach((value, key) => {
		resultData[key] = value;
	});
	console.log(resultData);
	event.currentTarget.reset();
}
