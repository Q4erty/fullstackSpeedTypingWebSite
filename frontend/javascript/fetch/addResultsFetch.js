export function addResults(duration, number_of_words, number_of_characters, mistakes, accuracy, wpm, csp){
	const token = localStorage.getItem('token');

	fetch('https://speed-typing-backend.onrender.com/profile/addResults', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({duration, number_of_words, number_of_characters, mistakes, accuracy, wpm, csp})
	})
	.then(res => {
		if (res.ok){
			console.log("Your results recorded!");
		} else {
			console.error("Something went wrong when recording.");
		};
	})
	.catch(error => {
		console.error(error);
	});
};