const http = require("node:http");
const fs = require("node:fs/promises");

const server = http.createServer();

server.on("request", async function (req, res) {
	// console.log(process.cwd() + req.url);
	// console.log(res);

	const file_name = process.cwd() + req.url;
	const ext = file_name.split(".").slice(-1)[0];

	// index.html > ["index", "html"].slice(-1) > ["html"][0] > "html"

	const ext_mime_dict = {
		js: "text/javascript",
		json: "application/json",
		html: "text/html",
		css: "text/css",
		png: "image/png",
		txt: "text/plain",
		jpg: "image/jpg",
		jpeg: "image/jpeg",
		gif: "image/gif",
	};

	res.setHeader("Content-Type", ext_mime_dict[ext]);

	fs.readFile(file_name).then(data => res.end(data)).catch(error => {
		console.error(error)
		res.end(error.message);
	});
});

server.once("listening", () => console.log(`Server is listening at http://${server.address().address}:${server.address().port}`));

server.listen(8000, "127.0.0.1");
