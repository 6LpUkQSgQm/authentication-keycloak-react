FROM node:18.7.0-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@latest --silent
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]