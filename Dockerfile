# Install dependencies:
FROM node:alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package*.json ./

RUN npm ci

# Build production code:
FROM node:alpine AS builder

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build


# Run server:
FROM node:alpine as runner
USER node

ENV NODE_ENV "development"

WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "run", "dev"]