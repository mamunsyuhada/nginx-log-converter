const fs = require('fs');

module.exports = (src, output='output.json') => {
	console.log(output);
	try {
		const logs = fs.readFileSync(src, 'utf8').split('\n');
		const result = [];
		for(const log of logs){
			if(!log.length){
				continue;
			}
			const level = log.split(' ')[2].replace('[', '').replace(']', '');
			const resultLog = {
				date: log.split(' ')[0],
				time: log.split(' ')[1],
				level,
			};
			switch (level) {
			case 'crit':
				resultLog.message = `${log.split(' ')[6]} ${log.split(' ')[7]} ${log.split(' ')[8]} ${log.split(' ')[9]} ${log.split(' ')[10]}`;
				break;
			case 'error':
				resultLog.from_clinet = log.split(',')[1].replace(' client: ', '');
				resultLog.to_domain = log.split(',')[2].replace(' server: ', '');
				resultLog.url_path = log.split(',')[3].replace(' request: ', '').replace('"', '');
				// resultLog.request_url_path = log.split(' ')[6];
				resultLog.request_status = log.split(' ')[7];
				break;
			default: break;
			}
			result.push(resultLog);
		}
		fs.writeFileSync(output, JSON.stringify(result, true, 2), 'utf8');
	} catch (error) {
		let message = error.message;
		if(error.code==='ENOENT'){
			message = `${error.path} is not exist`;
		}
		console.log(message);
		process.exit();
	}
};