FROM node:8-alpine

# App Dir
WORKDIR /app

# Copy needed files to start image
COPY ./package.json package.json
COPY ./yarn.lock yarn.lock
COPY ./pages pages
COPY ./layouts layouts
COPY ./data data
COPY ./components components

RUN yarn
