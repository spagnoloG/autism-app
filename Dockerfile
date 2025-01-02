# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
RUN yarn install 

COPY . .

RUN yarn build

# Stage 2: Serve
FROM node:18-alpine AS serve

WORKDIR /app

COPY --from=build /app/build ./build

RUN yarn global add serve

EXPOSE 3000

CMD [ "serve", "-s", "build" ]
