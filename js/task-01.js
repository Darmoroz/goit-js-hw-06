const numberCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberCategories.length}`);
[...numberCategories].forEach((item) => {
	console.log(`Category: ${item.firstElementChild.textContent}`);
	console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
