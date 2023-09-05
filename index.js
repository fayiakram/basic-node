
const MamaliaController = require(`./class/controllers/mamalia.controller`)

// ini import module HTTP
const http = require("http")
// const url = require("url")
const { parse } = require("querystring")

const server = http.createServer(async (req, res) => {
    const method = req.method;
    const mamaliaController = new MamaliaController();
    switch (method) {
        case "GET":
            const mamalias = await mamaliaController.getAll()
            // console.log(mamalias);
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify(mamalias, null, 2))

            break;
        case "POST":
            let requestBody = '';
            // Listen for data events to accumulate the request body
            req.on('data', (chunk) => {
                requestBody += chunk;
            });

            // When all data has been received
            req.on('end', async () => {
                try {
                    // Parse the JSON data if applicable (adjust as needed)
                    const jsonData = JSON.parse(requestBody);
                    await mamaliaController.store(jsonData);
                    // Respond with the parsed data
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end("Mamalia Berhasil ditambahkan");
                } catch (error) {
                    // Handle parsing errors or other issues
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('Error parsing JSON data');
                }
            });
            break;

        default:
            break;
    }

});

server.listen(3000, () => {
    console.log("server berjalan diport 3000!");
})

// async function main() {
//     try {
//         const mamalia = { name: "Lumba-Lumba", type: "Mamalia", habitat: "Laut" }
//         const mamaliaController = new MamaliaController();
        // mamaliaController.getSound();
        // await mamaliaController.store(mamalia);
//         const mamalias = await mamaliaController.getAll()
//         console.log(mamalias);

//     } catch (error) {
//         console.error(error);

//     }
// }

// main()