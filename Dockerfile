FROM node:8-alpine

# App Dir
WORKDIR /app

# Copy needed files to start image
COPY ./package.json package.json

RUN yarn
