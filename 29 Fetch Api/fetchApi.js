const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const p = document.createElement("p");
body.appendChild(p);
let s = "";


btn.addEventListener('click',()=>{
    let id = input.value ;

    fetch(`https://dummyjson.com/products/${id}`, { method: "GET" })
	.then((res) => res.json())
	.then((data) => {

		s = "";
		for (const key in data) {
			console.log();
			s += `${key} : ${data[key]} <br>`;
		}
        p.innerHTML = s;
	});
})

