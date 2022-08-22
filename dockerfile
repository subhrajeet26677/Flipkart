FROM node:14-alpine AS client_build
WORKDIR /app
COPY ./Flipkart /app/

RUN npm install

RUN node_modules/.bin/ng build --configuration production

#build backend
FROM node:14-alpine AS server_build
WORKDIR /app
COPY ./server2 /app/
COPY  --from=client_build /app/dist/Flipkart /app/dist/Flipkart

RUN npm install --production

#build docker --optional

FROM alpine 
WORKDIR /app
RUN apk add --no-cache nodejs
COPY --from=server_build /app ./

EXPOSE 4040

CMD ["node","app"]

