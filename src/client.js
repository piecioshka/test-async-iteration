const fetch = require('axios');

function * alwaysTrue() {
    while (true) {
        yield true;
    }
}

function makeRequest(url) {
    const service = 'http://localhost:3000';
    return fetch(service + url);
}

async function bootstrap() {
    let url = '/';

    while (alwaysTrue()) {
        console.log(`REQUEST: ${url}`);
        const { data } = await makeRequest(url);
        url = data.url;

        if (!url) {
            console.log(data);
            break;
        }
    }
}

bootstrap()
    .catch((err) => console.error(err));
