# AdonisJS v5 using with Docker Boilerplate

Look at the [AdonisJS documentation](https://docs.adonisjs.com/) to learn more about AdonisJS Framework.

## Setup

Run command for the project (using only npm because docker's setting)

```bash
npm i
```

Run command for copy .env file

```bash
cp .env.example .env
```

Update `.env` file for your configuration

Adonis's Dockerfile reference from `https://docs.adonisjs.com/cookbooks/dockerizing-adonis#document`

Run command for start docker

```bash
docker compose up -d
```

Or if you change config something in Dockerfile or docker-compose.yml

```bash
docker compose up -d --build
```

### Run command `node ace` in Docker's container only

If you don't use Docker Desktop you can access to contianer with command:

```bash
docker exec -it [container_name] sh
# Or
docker exec -it [container_name] bash
```

Run command for database configuration and update `.env` file for your configuration

```bash
node ace configure @adonisjs/lucid
```

Run command for authentication configuration
1. Picked `Lucid`
2. Picked `API Token`
3. `User` for Model's authentication
4. Select `Y` for create migrations
5. Select `Database`
6. Select `Y` for create migrations

```bash
node ace configure @adonisjs/auth
```

Run command for jwt configuation and setting that you want (Optional) [Reference Adonis JWT](https://github.com/maxgalbu/adonis5-jwt)

```bash
node ace configure adonis5-jwt
```

## Faker API

Look at the [Faker API documentation](https://fakerjs.dev/api/) to learn more about Faker API (using for Model Factory).

## Development Server

Start the development server on `http://localhost:8000` or spectific port that you setup in docker-compose.yml

Check out the [deployment documentation](https://docs.adonisjs.com/guides/deployment) for more information. Or using Dockerfile