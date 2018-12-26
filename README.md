# test-async-iteration

[![dependencies](https://david-dm.org/piecioshka/test-async-iteration.svg)](https://github.com/piecioshka/test-async-iteration)

:ledger: Testing async iteration with generators and HTTP requests.

## Features

* :white_check_mark: Create "server" with 5 endpoints with hypermedia style
* :white_check_mark: Last endpoint returns `data`
* :white_check_mark: Create "client" which use generators to crawl through
    endpoints to get `data` from lat endpoint

## Usage

1. Start HTTP server: `npm start`
2. Spawn client which crawl through endpoints: `npm run client`

Client will display that results:

```text
REQUEST: /
REQUEST: /qqqqqq
REQUEST: /wwwwww
REQUEST: /eeeeee
REQUEST: /rrrrrr
{ data: 'hello world' }
````

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
