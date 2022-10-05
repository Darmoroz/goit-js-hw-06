const refs = {
	input: document.querySelector("#validation-input"),
};
refs.input.addEventListener("blur", (event) => {
	const target = event.currentTarget;
	if (target.value.length !== Number(target.dataset.length)) {
		target.classList.add("invalid");
		target.classList.remove("valid");
	} else {
		target.classList.add("valid");
		target.classList.remove("invalid");
	}
});
