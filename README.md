# nielsbik.nl

## Running Locally

```bash
$ git clone https://github.com/nielsrowinbik/nielsbik.nl
$ cd nielsbik.nl
```

### With Docker:

```bash
$ docker-compose up --build
$ docker-compose exec nielsbik.nl sh # Run this to run commands within the container
```

### Without Docker:

```bash
$ npm i
$ npm run dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/nielsrowinbik/nielsbik.nl/blob/master/.env.example).
