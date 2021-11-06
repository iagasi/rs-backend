FROM node:alpine as Builder
WORKDIR /app
COPY package.json  ./
RUN npm install

COPY . .


FROM node:alpine

COPY  --from=Builder /app/  ./
RUN  npm install --only=production
RUN npm install pm2 -g


EXPOSE 5000
CMD [ "pm2-runtime","index.js"]  