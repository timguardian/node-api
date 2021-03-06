# Environment

* OS: Windows 10 Home  
* kubectl => Client/Server: 1.19.7
* docker engine => 20.10.5
* docker desktop => 3.2.2
* Kubernetes context: docker-desktop

# Installation

1) Clone app code:

```sh
$ git clone `https://github.com/timguardian/node-api.git`
```

2) Go to the directory path-to-project/node-api/manifests/

3) Execute command:

```sh
$ kubectl apply -f .
```

> To pull from hub.docker.com and run the app, execute command in terminal:

```sh
$ docker container run --name node-api-container -d -p 8000:8000 timguardian/node-api:latest
```

# Usage

> To access via hostname add to `/etc/hosts` or `C:\Windows\System32\drivers\etc\hosts` set of rules:

```sh
127.0.0.1   sa.homework
127.0.0.1   api.sa.homework
```

> To apply yaml manifests follow the steps below:  
> 1) Go to `/manifests` folder
> 2) Run command:  

```sh
$ kubectl apply -f .
```

> To health check the service, go to `http://api.sa.homework/health` from browser, Postman or other similar tool.
You should get message:
```json
{"status": "OK"}
```
> If you are KBTU student and want to get greeting, go to `http://api.sa.homework/kbtu/your-name`
You should get message:
```json
{"message": "Hello, your-name", "status": "OK"}
```

> [DEV ONLY] To test one of the pods of deployment on port 8000 use command below:

```sh
$ kubectl port-forward pod-name 8000:8000
```

Then you will be able to access the resource by going to `http://127.0.0.1:8000`  

> To enable ingress run:
```sh
$ minikube addons enable ingress
```

> To deploy ingress-nginx (using Docker Desktop Windows):
```sh
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.2/deploy/static/provider/cloud/deploy.yaml
```