const fetch = require("cross-fetch");

function getRequest(url, user) {
	return fetch(url, {
		headers: {
      "Authorization": user.username + ":" + user.password
    }
	})
		.then(response => {
			if (response.status === 401) {
				return response.statusText;
			} else {
				return response.json();
			}		
		})
		.catch(err => console.log(err));
};

exports.getRequest = getRequest;