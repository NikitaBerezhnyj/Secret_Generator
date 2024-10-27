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

# Будуємо проект
RUN npm run build

# Виставляємо порт
EXPOSE 5173

# Команда для запуску клієнта
CMD ["npm", "run", "dev"]
