
const onClickAdd = ()=>{
	const inputText = document.getElementById("add-text").value;
	document.getElementById("add-text").value = "";

	const div = document.createElement("div");
	div.className = "list-row";


	const li = document.createElement("li");
	li.innerText = inputText;

	div.appendChild(li);

	const completeButton = document.createElement("button");
	completeButton.innerText = "完了";
	completeButton.addEventListener("click", ()=>{
		const completeTarget = completeButton.parentNode;

		deleteFromIncompleteList(completeTarget);

		completeTarget.removeChild(deleteButton);
		completeTarget.removeChild(completeButton);
		const returnButton = document.createElement("button");
		returnButton.innerText = "戻す";
		returnButton.addEventListener("click", ()=>{
			const returnTarget = returnButton.parentNode;
			document.getElementById("complete-list").removeChild(returnTarget);
			returnTarget.removeChild(returnButton);
			returnTarget.appendChild(completeButton);
			returnTarget.appendChild(deleteButton);


			createIncompleteList(returnTarget);
		});

		completeTarget.appendChild(returnButton);
		document.getElementById("complete-list").appendChild(completeTarget)

	});


	const deleteButton = document.createElement("button");
	deleteButton.innerText = "削除";
	deleteButton.addEventListener("click", ()=>{
		const deleteTarget = deleteButton.parentNode;
		deleteFromIncompleteList(deleteTarget);
	});


	div.appendChild(completeButton);
	div.appendChild(deleteButton);
	createIncompleteList(div);
}



const createIncompleteList = (target)=>{
	document.getElementById("incomplete-list").appendChild(target);
}



const deleteFromIncompleteList = (target)=>{
	document.getElementById("incomplete-list").removeChild(target);
}



document.getElementById("add-button").addEventListener("click", ()=> onClickAdd());




