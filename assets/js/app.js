const cl = console.log;

const allAcchead = [...document.querySelectorAll(".acco-head")]


const onaccoheadclick = (eve) => {
	
	let getclassname = event.target.className;
	cl(getclassname);//if active class is present then remove or not present then add
	
	let activehead= document.querySelector(".acco-head.active")
	
	activehead.classList.remove("active");
	eve.target.classList.add("active")
	
	if(getclassname.toLowerCase().includes("active")){
		eve.target.classList.remove("active")
	}else{
		eve.target.classList.add("active")
	}
	
	
}

allAcchead.forEach(acco => {
	acco.addEventListener("click", onaccoheadclick)
});