FROM node:20.11.0 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /app/dist /opt/site
COPY nginx.conf /etc/nginx/nginx.conf
