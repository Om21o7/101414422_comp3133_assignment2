# Stage 1: Build Angular app
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build -- --configuration production

# Stage 2: Serve app with nginx
FROM nginx:alpine
COPY --from=builder /app/dist/101419828_comp3133_assignment2/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
