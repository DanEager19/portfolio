#sudo docker build -t web .
#sudo docker run -d web --name web
FROM node:16 as builder

WORKDIR $HOME/portfolio/.

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder $HOME/portfolio/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 3000:80