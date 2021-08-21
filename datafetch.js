


fetch("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json", {
	headers: {
		'Content-Type': 'text/plain'
	}
}).then((response) => {
	return response.json()
}).then((Json) => {
	Json.forEach((e) => {
		console.log(`${e.sna}(${e.sbi})`);
	})
})