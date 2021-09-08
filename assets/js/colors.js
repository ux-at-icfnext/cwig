// JavaScript Document
/**
*Creates an element based on the tag name and classes given.
* @param{string} tagName The tag name of the element (i.e "div", "img", etc.)
* @param{string}classes  Sets the class attribute. Multiple separated by a space.
*
* @returns {HTMLElement}
*/

function createElementWithClass(tagName, classes){
	const el = document.createElement(tagName);
	
	el.setAttribute("class", classes);
	
	return el;
}


/**
*Creates a palette item based on the given color information.
* @param{string} color The value of the color (i.e hex, rgb)
* @param{string} desc  The description/ nameof the color
*
* @returns {HTMLElement}
*/
function createItem(color, desc){
	
	const elmItem = createElementWithClass("div", "palette__item");
	const elmColor = createElementWithClass("div", "palette__color");
	const elmDesc = createElementWithClass("div", "palette__desc");
	const elmInput = createElementWithClass("input", "palette__input");
	
	
	elmColor.style.backgroundColor = color;
	elmInput.value = color;
	elmDesc.textContent = desc;
	
	elmItem.appendChild(elmColor);
	elmItem.appendChild(elmInput);
	elmColor.appendChild(elmDesc);
	
	elmInput.onfocus = () => elmInput.select();
	
	return elmItem;
}


const paletteContainer = document.querySelector(".palette");

fetch("https://4000-yellow-stork-jq32lmff.ws-us16.gitpod.io/assets/json/colors.json").then(response => {
	return response.json();
}).then(colorList => {
	for(const{desc, color} of colorList){
		console.log(desc, color);
		paletteContainer.appendChild(createItem(color, desc));
	}
})