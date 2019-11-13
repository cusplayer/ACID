'use strict';

function $(qs) {
	return document.querySelector(qs);
}

var popup = $(".popup");
var shadow = $("#shadow");
var closeBtn = $(".popup > button");

closeBtn.addEventListener('click', () => {
	popup.style.display = "none";
	shadow.classList.add('hide');
});

var petData = [
"position is id",

{name: 'Charly',
breed: 'Pooch',
descript: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, nulla perspiciatis perferendis rem unde excepturi mollitia illum veritatis ex autem! Voluptatem ut ullam consectetur odio distinctio reprehenderit hic minus similique eaque, tenetur maxime quos, ea aperiam, ab laboriosam repudiandae! Cupiditate!',
age: '4 month',
inoculations: 'none',
diseases: 'none',
parasites: 'none',
img: 'i/charly.jpg'},

{name: 'Cliff',
breed: 'Pooch',
descript: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, nulla perspiciatis perferendis rem unde excepturi mollitia illum veritatis ex autem! Voluptatem ut ullam consectetur odio distinctio reprehenderit hic minus similique eaque, tenetur maxime quos, ea aperiam, ab laboriosam repudiandae!',
age: '6 month',
inoculations: 'none',
diseases: 'none',
parasites: 'none',
img: 'i/cliff.jpg'},
];

var pets = $('.pets');

pets.addEventListener('click', (e) => {
	let petID = e.target.value;
	if (petID && petData[petID]) {
		let pet =  petData[petID];
		$(".popup > .textbox > h2").innerHTML = pet.name;
		$(".popup > .textbox > h4").innerHTML = pet.breed; 
		$(".popup > .textbox > p").innerHTML = pet.descript; 

		$(".popup > .textbox .age").innerHTML = "Age:" + pet.age;
		$(".popup > .textbox .inoculations").innerHTML = "Inoculations:" + pet.inoculations;
		$(".popup > .textbox .diseases").innerHTML = "Diseases:" + pet.diseases;
		$(".popup > .textbox .parasites").innerHTML = "Parasites:" + pet.parasites;

		$(".popup > .imgbox img").setAttribute('src', pet.img);
		$(".popup > .imgbox img").setAttribute('alt', pet.name);

		popup.style.display = "grid";
		shadow.classList.remove('hide');
	}
});