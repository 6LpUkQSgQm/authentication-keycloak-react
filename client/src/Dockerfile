FROM node:18.14-slim
WORKDIR /usr/app
COPY package*.json ./
RUN npm install -g npm@latest --silent
COPY . .
EXPOSE 3000
CMD ["npm", "start"]