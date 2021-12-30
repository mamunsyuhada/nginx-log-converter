const fs = require('fs');

module.exports = (src, output) => {
	try {
		fs.writeFileSync(output, fs.readFileSync(src, 'utf8'), 'utf8');
	} catch (error) {
		let message = error.message;
		if(error.code==='ENOENT'){
			message = `${error.path} is not exist`;
		}
		console.log(message);
		process.exit();
	}
};