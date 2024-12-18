# Zytologue_API_LDF
API pour zytologue app

## 1) Set up the environment for the project

First, make sure to download docker desktop from their site [Docker](https://www.docker.com/).
Then you need to run the docker-compose script to create the postgres database server container.

The comand is: `docker-compose up --build`
## 2) Connection to DBeaver

Make sure to download the cross-platform database tool [DBeaver](https://dbeaver.io/)

Create a connection to your DB server.

## 3) Create the dabase tables
The docker-compose file will create for you the database, so it's time for you to create the tables.
Use the *creation_tables.sql* script to do it.

The command you can use is: `docker exec -i postgres_container_API psql -U postgres_user -d zytologue_API < /Users/user/simplon/brief_zytologue_API/Zytologue_API_LDF/sql-scripts/creation_tables.sql`

NOTE: Make sure to run the command from the root repository of the project

## 4) Populate your tables
You can fill the tables with some mock data provided in the *mock_data.sql* file.

The command you can use is: `docker exec -i postgres_container_API psql -U postgres_user -d zytologue_API < /Users/user/simplon/brief_zytologue_API/Zytologue_API_LDF/sql-scripts/mock_data.sql`

## 5) Run the querys

On the *querys.sql* file you're going to find all the querys to run and test.

The command you can use is: `docker exec -i postgres_container_API psql -U postgres_user -d zytologue_API < /Users/user/simplon/brief_zytologue_API/Zytologue_API_LDF/sql-scripts/querys.sql`


