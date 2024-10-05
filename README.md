# GraphQL Practice

This is a simple project to demonstrate how GraphQL works, it's a simple API to query data about videogames.

# Getting Started

Before running the project you need to put the database online and migrate it with the commands below:

```sh
# Run the database container
docker compose up -d

# Install dependencies
yarn

# Run the migrations and seeders
yarn migrate && yarn seed
```

Then, you can run the API using `yarn start`.

# Environment

The service uses `8080` as the default port, you can change the port value at [.env](./.env) file