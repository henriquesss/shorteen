# Shorteen

A url shortener for generation z && alpha

## Project setup

```bash
yarn install

cp -r env.example .env
```

Local mysql with Docker
```bash
docker pull mysql

docker run --name shorteen-mysql -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql
```

then, use this address on your enviroment variable
`DATABASE_URL=mysql://root:password@localhost:3306/mysql`

## Compile and run the project

```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

## Run tests

```bash
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn run test:cov
```

## Deployment

Soon...

## Stay in touch

- Author - [Lucas Henriques](https://github.com/henriquesss)
- Author's blog - [Access](https://henriques-io.vercel.app/)