# Specify a base image
FROM node:18-alpine
WORKDIR /usr/app

# Install some dependencies
RUN npm install -g pnpm
COPY ./package.json  ./
RUN pnpm install 
COPY ./ ./
RUN pnpm build


# Default Command
CMD ["pnpm", "preview"]


