# My account project

This is a simple mobile web page to simulate a user interaction with a fake e-commerce "account".

## Used Technologies
* NextJs (React SSR)
  - Nextjs it's a simple framework that use React including Server Side Rendering.
* Docker
  - We use docker to isolate all project dependencies, save developers time configuring environment and work in a environment similar to production. Devops team love it. <3
* Semantic UI React
  - We use Semantic as UI framework project. It's simple to use and have a lot of components.

## Prerequisites

Before start, you must to have installed in your machine this prerequisites:
* **[Docker](https://www.docker.com/) (docker compose)** -
To install docker, [see official documentation](https://docs.docker.com/engine/installation/) according to you operational system.

## Installing

### Clone this project:
```
git clone https://github.com/joseluizcoe/my-account-project.git
```

### Go to project folder:
```
cd my-account-project
```

### Starting app:

* **dev** - to development mode.
```
docker-compose -f docker-compose.dev.yml up -d
```

Go to your *mobile phone browser* or Chrome Browser in "inspect mode" and access: `http://YOUR_IP:3000`

Enjoy!

## Built With

* [Node 8](https://www.nodejs.org/)
