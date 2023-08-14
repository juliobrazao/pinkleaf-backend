FROM node:alpine
WORKDIR /src
COPY package.json ./
COPY ./ ./
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]