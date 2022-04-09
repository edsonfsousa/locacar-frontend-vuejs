# _Dockerized Application_

![Docker Compose](https://miro.medium.com/max/770/1*YE-fApWn9PXN9B3k7DY4FA.png)

Application contains a Dockerfile and a docker-compose.
Docker can build images automatically by reading the instructions from a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.
Docker Compose is a tool for running multi-container applications on Docker
defined using the [Compose file format](https://compose-spec.io).
A Compose file is used to define how the one or more containers that make up
your application are configured.
Once you have a Compose file, you can create and start your application with a
single command: `docker compose up`.

# _- Deploy instructions_

## Command used to remove image:

```
docker iamge rm -f edsonfsousa/locacar-frontend:v1
```
## Command used to remove container:

```
docker container rm -f locacar-frontend
```
## Commands used to deploy the application with just Dockerfile:

---

```
docker image build -t edsonfsousa/locacar-frontend:v1 .
```

```
docker container run -d -p 8089:80 --name locacar-frontend edsonfsousa/locacar-frontend:v1
```

## Commands used to deploy the application with docker-compose:

---

```
docker-compose build
```

```
docker compose up
```

# _- Contributing_

---

If you want, you can contribute in
[issue tracker](https://github.com/edsonfsousa/locacar-frontend-vuejs/issues/new).

Developed by
[Edson Fernandes](https://github.com/edsonfsousa).