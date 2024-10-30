FROM node:18-alpine

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо файли package.json та package-lock.json для встановлення залежностей
COPY package.json package-lock.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проект у контейнер
COPY . .

# Будуємо Next.js проект
RUN npm run build

# Запускаємо контейнер на порту 3000 для Next.js
EXPOSE 3000

# Вказуємо команду запуску Next.js серверу
CMD ["npm", "run", "start"]
