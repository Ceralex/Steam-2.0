function update() {
	const select = document.getElementById("sortBy");
	const option = select.options[select.selectedIndex];
	const sortBy = option.value;

	if (sortBy === "price") {
		const divs = document.getElementsByClassName("game");
		const divsArray = Array.prototype.slice.call(divs);

		divsArray.sort((a, b) => {
			return (
				parseFloat(a.getElementsByClassName("game-price")[0].innerHTML) -
				parseFloat(b.getElementsByClassName("game-price")[0].innerHTML)
			);
		});
		
		divsArray.forEach(el => {
			document.getElementById("games").appendChild(el);
		});

	} else if (sortBy === "name") {
		const divs = document.getElementsByClassName("game");
		const divsArray = Array.prototype.slice.call(divs);

		divsArray.sort((a, b) => {
			return a
				.getElementsByClassName("game-name")[0]
				.innerHTML.localeCompare(
					b.getElementsByClassName("game-name")[0].innerHTML
				);
		});

		divsArray.forEach(el => {
			document.getElementById("games").appendChild(el);
		});
	}
}

function filterByName() {
	const input = document.getElementById("search");
	const filter = input.value.toUpperCase();
	const divs = document.getElementsByClassName("game");
	const divsArray = Array.prototype.slice.call(divs);

	divsArray.forEach(el => {
		if (el.getElementsByClassName("game-name")[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	});
}