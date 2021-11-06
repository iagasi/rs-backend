FROM node:alpine as Builder
WORKDIR /app
COPY package.json  ./
RUN npm install

COPY . .
RUN npm run build

FROM node:alpine

COPY  --from=Builder /app/package.json  ./
RUN  npm install --only=production
RUN npm install pm2 -g
COPY --from=Builder /app/dist ./dist

EXPOSE 4000
CMD [ "pm2-runtime","dist/main.js"]  