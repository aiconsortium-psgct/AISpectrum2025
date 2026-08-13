FROM node:22-slim

WORKDIR /app

COPY .  .

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 4731

CMD ["npm", "run", "preview"]
