const refs = {
	inputNumber: document.querySelector("#controls").firstElementChild,
	createBtn: document.querySelector("[data-create]"),
	destroyBtn: document.querySelector("[data-destroy]"),
	boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick(event) {
	if (refs.inputNumber.value.length < 1 || refs.inputNumber.value === "0") {
		alert("Введіть число");
	}
	const amount = Number(refs.inputNumber.value);
	createBoxes(amount);
}

function onDestroyBtnClick(event) {
	refs.boxes.innerHTML = "";
}

function createBoxes(amount) {
	refs.boxes.innerHTML = "";
	const box = [];
	let size = 30;
	let zidx = amount;
	for (let idx = 0; idx < amount; idx += 1) {
		const div = document.createElement("div");
		console.log(zidx);
		div.style.width = `${size}px`;
		div.style.height = `${size}px`;
		div.textContent = `${idx + 1}`;
		div.style.fontSize = "8px";
		div.style.position = "absolute";
		div.style.zIndex = zidx;
		zidx -= 1;
		div.style.display = "flex";
		div.style.justifyContent = "flex-end";
		div.style.alignItems = "flex-end";
		div.style.backgroundColor = getRandomHexColor();
		box.push(div);
		size += 10;
	}
	refs.boxes.append(...box);
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
