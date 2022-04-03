FROM mcr.microsoft.com/playwright:next

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD npm run test