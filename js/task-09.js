const refs = {
	changeColorBtn: document.querySelector(".change-color"),
	spanText: document.querySelector(".color"),
	body: document.body,
};

refs.changeColorBtn.addEventListener("click", (event) => {
	const getColor = getRandomHexColor();
	refs.body.style.backgroundColor = getColor;
	refs.spanText.textContent = getColor;
});

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
