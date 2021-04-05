# Installation

To pull from hub.docker.com and run the app, execute command in terminal:
```sh
$ docker container run --name node-api-container -d -p 8000:8000 timguardian/node-api:latest
```

1) Clone app code:

```sh
$ git clone `https://github.com/timguardian/node-api.git
```

2) Go to /path/to/project/node-api/ and build docker image:

```sh
$ docker image build -t node-api .
```

3) Run the container:

```sh
$ docker container run --name node-api-container -d -p 8000:8000 node-api
```

4) Go to the browser and open `localhost:8000\health` to check is app running. You should see JSON formatted message:

```json
{"status": "OK"}
```