# nielsbik.nl

## Running locally

```bash
$ git clone https://github.com/nielsrowinbik/nielsbik.nl
$ cd nielsbik.nl
```

### With Docker:

```bash
$ docker compose run --rm nielsbik.nl npm ci # Only on first run to install dependencies
$ docker compose up # To start development server
$ docker compose exec nielsbik.nl sh # Run this to run commands within the container
```

### Without Docker:

```bash
$ npm i # To install dependencies
$ npm run dev # To start development server
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/nielsrowinbik/nielsbik.nl/blob/master/.env.example).
