const itemInput = document.getElementById('item-input');
const add = document.getElementById('add');
const list = document.getElementById('list');
const remove = document.getElementById('remove');

function addItem() {
	const errorMsg = document.getElementById('error-message').style;
	if (itemInput.value.trim() === "") {
		errorMsg.display = 'inherit'
	} else {
		errorMsg.display = 'none';
		list.innerHTML += `
               <div class="item-container">
                    <input type="checkbox" class="cb td" oninput="setCompleted()">
                    <span class="list-item td">` + itemInput.value + `</span>
               </div>
          `;
		itemInput.value = "";
	}
}

function removeItem() {
	if (list.innerHTML != "") {
		const containers = list.querySelectorAll('.item-container');
		const itemCBs = list.querySelectorAll('.cb');
		const len = itemCBs.length;
		let i;
		for (i = 0; i < len; i++)
			if (itemCBs[i].checked)
				containers[i].remove();
	}
}

function clearList() {
	if (list.innerHTML != "")
		list.innerHTML = "";
}

function addCompletedItem() {
	if (list.innerHTML != "") {
		const items = list.querySelectorAll('.list-item');
		const itemCBs = list.querySelectorAll('.cb');
		const len = items.length;
		let i;
		for (i = 0; i < len; i++) {
			if (itemCBs[i].checked && items[i].style.textDecoration === 'line-through') {
				items[i].style.textDecoration = 'inherit';
				itemCBs[i].checked = false;
			}
		}
	}
}

function markAsCompleted() {
	if (list.innerHTML != "") {
		const items = list.querySelectorAll('.list-item');
		const itemCBs = list.querySelectorAll('.cb');
		const len = items.length;
		let i;
		for (i = 0; i < len; i++) {
			if (itemCBs[i].checked)
				items[i].style.textDecoration = 'line-through';
		}
	}
}
