FROM node AS builder
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8
WORKDIR /app

ARG BASE_PATH=/
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build -- --base=$BASE_PATH

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/ ./
