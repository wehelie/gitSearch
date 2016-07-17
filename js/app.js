function init() {

	var username = document.getElementById('name');
	var userid = username.value;
	if (userid == '') {
		console.log('empty string');
	} else { 
			console.log(userid);
			var url = 'https://api.github.com/users/'+userid;
			var xhr = new XMLHttpRequest();
			xhr.onload = function (e) {
				var data = JSON.parse(xhr.responseText);
				console.log(data.name);
			}
			
			xhr.open("GET", url);
			xhr.send();

			// clear input
			function reset() {
				document.getElementById('name').value = '';
			}

			reset();
		}

}


// let's try it in another pattern, the literal objec pattern
// (function() {
// 	var gitSearch = {
// 		input: document.getElementById('name');
// 	};
// })();