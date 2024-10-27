# Встановлюємо базовий образ
FROM node:16

# Встановлюємо робочу директорію
WORKDIR /usr/src/app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь код
COPY . .

# Виставляємо порт
EXPOSE 3001

# Команда для запуску сервера
CMD ["npm", "run", "dev"]
