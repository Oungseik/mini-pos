# Specify a base image
FROM node:18-alpine
WORKDIR /usr/app


# Install some dependencies
RUN apk add --update sqlite
RUN npm install -g pnpm
COPY ./package.json  ./
RUN pnpm install 
COPY ./ ./
RUN npx prisma generate
RUN pnpm build


# Default Command
CMD ["pnpm", "start"]

