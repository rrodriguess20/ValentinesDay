function scrollToSection(sectionId){

	document.getElementById(sectionId).scrollIntoView({

		behavior: 'smooth'
	});
}

const track = document.querySelector('.slide-track');
let imagens = document.querySelectorAll('.slide-track img');
let atual = 0;

setInterval(()=>{

	atual = (atual + 1) % imagens.length;
	track.style.transform = `translateX(-${atual * 500}px)`;
},6000);

function finalMessage(){

	setTimeout(() =>{

		alert('Obrigada por todos os dias me ensinar mais sobre o amor! Que esse seja o primeiro de muitos Dias dos Namorados ao seu lado! Te amo muito! Da sua \"Nesse\", Rebeca!💕');
	}, 1000);
}