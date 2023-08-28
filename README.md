# Mini POS

`frontend/` contains frontend code and `Dockerfile`
`backend/` contains backend code and `Dockerfile`

---

## Build with docker

First make sure your machine is installed **Docker** and run it.

### build the frontend

- Change the directory to frontend and run `docker build -t <your-username/project-name> .`. Don't forget the `.` behind the tag name.
    - For example, I run this in my machine. `docker build -t oungseik/mini-pos-fe .`

- Run the container with `docker run -p 4173:4173 -t <your-username/project-name>`
    - For example, I run this in my machine. `docker run -p 4173:4173 -t oungseik/mini-pos-fe`

The app can be visit on the `http://localhost:4173`.
The frontend is configured to make API call from `http://localhost:3000`. But you can configure.
For more information, Please read [frontend/README.md](frontend/README.md)

### build the backend

- Change the directory to frontend and run `docker build -t <your-username/project-name> .`.  Don't forget the `.` behind the tag name.
    - For example, I run this in my machine. `docker build -t oungseik/mini-pos .`

- Run the container with `docker run -p 3000:3000 -t <your-username/project-name>`
    - For example, I run this in my machine. `docker run -p 3000:3000 -t oungseik/mini-pos`

The server will on the `http://localhost:3000/`.
For more information, Please read [backend/README.md](backend/README.md)

