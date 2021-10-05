FROM node AS builder
ENV LANG=en_US.UTF-8
WORKDIR /app

ARG BASE_PATH=/
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build -- --base=$BASE_PATH

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/ ./
