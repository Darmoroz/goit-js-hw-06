let counterValue = document.querySelector("#value");

const onTargetDecrementClick = document.querySelector("[data-action='decrement']");
const onTargetIncrementClick = document.querySelector("[data-action='increment']");
onTargetDecrementClick.addEventListener('click', decrement);
onTargetIncrementClick.addEventListener('click', increment);
function increment(event) {
	counterValue.textContent = Number(counterValue.textContent) + 1;
}
function decrement (event) {
	counterValue.textContent = Number(counterValue.textContent) - 1;
}