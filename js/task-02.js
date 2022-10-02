const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
const list = document.querySelector("#ingredients");

const makeItem = (item) => {
	return item.map((el) => {
		const itemRef = document.createElement("li");
		itemRef.classList.add("item");
		itemRef.textContent = el;
		return itemRef;
	});
};

const refs = makeItem(ingredients);
list.append(...refs);

// const markup = ingredients
// 	.map((ingredient) => `<li class="item">${ingredient}</li>`)
// 	.join("");
// list.innerHTML = markup;
