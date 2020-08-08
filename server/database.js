const fs = require('fs');

let appUsers = {};

const load = (path) => {
	console.log('attempt to load database...');
	let data = { appUsers: {} };
	if (fs.existsSync(path)) {
		data = JSON.parse(fs.readFileSync(path).toString());
	}
	appUsers = data.appUsers;
	console.log('database successfully loaded!');
}

const save = (path) => {
	console.log('attempt to save database...');
	fs.writeFileSync(path, JSON.stringify({ appUsers }, null, 4));
	console.log('database successfully saved!');
}

const getUserData = (user) => {
	if (!appUsers[user.id]) {
		appUsers[user.id] = {
			vk_id: user.vk_id,
			vk_access_token: user.access_token
		}
	}
	return appUsers[user.id];
}


module.exports = {
	load,
	save,
	getUserData
}
