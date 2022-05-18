
let client_id = "qjAaxEi5ANKtVODcylyhSCiAOg3R7dL0ORU6GJW3At4"
let endpoint = 'https://api.unsplash.com/photos/?client_id=${client_id}';

fetch(endpoint)
    .then(function (response) {
        console.log(response.json());
        })