# Build stage
FROM node:21.6.2-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Run stage
FROM node:21.6.2-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY package*.json ./
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "start"]
