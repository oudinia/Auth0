# Stage 1: Build the Angular app
FROM node:21-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build 
# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/auth0/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
