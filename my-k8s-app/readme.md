


## Running the applicaiton locally
1. Build the application
2. Run the application


## Run the dev application in docker
1. Build the docker images:
```bash 
docker-compose build
```
2. Run the application:
```bash
docker-compose up
```

or build and run in one command:
```bash 
docker-compose -f docker-compose.dev.yml up --build
```

3. Access the application at `http://localhost:3000` in your web browser.
