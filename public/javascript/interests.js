async function interests() {
	var template = Handlebars.templates['interests'];

	var context = {
		interests: [
			{ item: 'Reading' },
			{ item: 'Eating' },
			{ item: 'Drinking' },
			{ item: 'Sports' },
			{ item: 'Games' },
			{ item: 'Coding' },
			{ item: 'Exercise' },
			{ item: 'Movies' },
			{ item: 'Travel' },
			{ item: 'Animals' },
		],
	};

	var templateData = template(context);
}

document.getElementById('contentDiv').innerHTML += templateData;
