const refs = {
	inputControl: document.querySelector("#font-size-control"),
	spanText: document.querySelector("#text"),
};
refs.spanText.style.fontSize = `${refs.inputControl.value}px`;
refs.inputControl.addEventListener("input", (event) => {
	refs.spanText.style.fontSize = `${event.currentTarget.value}px`;
});
