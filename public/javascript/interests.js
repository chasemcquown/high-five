async function interests() {
	var template = Handlebars.templates['interests'];

	var context = {
		interests: [
			{ item: 'Reading', value: 'Reading' },
			{ item: 'Eating', value: 'Eating' },
			{ item: 'Drinking', value: 'Drinking' },
			{ item: 'Sports', value: 'Sports' },
			{ item: 'Games', value: 'Games' },
			{ item: 'Coding', value: 'Coding' },
			{ item: 'Exercise', value: 'Exercise' },
			{ item: 'Movies', value: 'Movies' },
			{ item: 'Travel', value: 'Travel' },
			{ item: 'Animals', value: 'Animals' },
		],
	};

	var templateData = template(context);
}

document.getElementById('contentDiv').innerHTML += templateData;
