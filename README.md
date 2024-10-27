# Secret Generator

#### Repository translates: [українська :ukraine:](#meganom-poligraph-ukraine), [english :uk:](#meganom-poligraph-uk)

## Secret Generator :ukraine:

Простий React-додаток для генерації JWT-секретів та безпечних паролів.

## Можливості

- Генеруйте криптографічно безпечні JWT-секрети
- Генеруйте надійні випадкові паролі
- Копіюйте згенеровані значення в буфер обміну одним кліком
- Візуальний зворотній зв'язок при успішному копіюванні
- Чистий та інтуїтивно зрозумілий користувацький інтерфейс

## Встановлення

1. Клонуємо репозиторій:

```bash
git clone https://github.com/NikitaBerezhnyj/Secret_Generator.git
```

2. Встановіть залежності:

```bash
npm install
```

3. Запустіть сервер розробки:

```bash
npm start
```

## Використання

1. Виберіть тип секрету, який ви хочете згенерувати:

   - JWT Secret: генерує безпечний 32-байтовий шістнадцятковий рядок
   - Пароль: генерує 12-символьний пароль зі змішаними регістровими літерами, цифрами і спеціальними символами

2. Натисніть кнопку «Згенерувати», щоб створити новий секрет

3. Використовуйте кнопку копіювання (📋), щоб скопіювати згенероване значення в буфер обміну

## Відкритий API

Додаток пропонує простий і зрозумілий API для генерації JWT-секретів та паролів. Ви можете використовувати цей API для інтеграції функцій генерації секретів у ваші власні програми чи сервіси.

### Ендпоінти API

1. Генерація JWT секрету

   - **_URL:_** /api/jwt-secret
   - **_Метод:_** GET
   - **_Опис:_** Генерує новий криптографічно безпечний JWT-секрет.
   - **_Відповідь:_**
     ```json
     {
       "token": "your_generated_jwt_secret_here"
     }
     ```

2. Генерація пароля

   - **_URL:_** /api/password
   - **_Метод:_** GET
   - **_Опис:_** Генерує новий безпечний пароль.
   - **_Відповідь:_**
     ```json
     {
       "password": "your_generated_secure_password_here"
     }
     ```

### Використання API

- Для отримання JWT-секрету, просто надішліть запит до ендпоінту /api/generate-jwt.
- Для отримання пароля, надішліть запит до ендпоінту /api/generate-password.
- API повертає згенеровані значення у форматі JSON.

### Примітки

- API є відкритим і доступним для використання в будь-яких проектах, тому ви можете легко інтегрувати його у свої додатки.
- Генерація значень відбувається на сервері, що забезпечує безпеку та конфіденційність.

## Функції безпеки

- Використовує `crypto.getRandomValues()` для криптографічно безпечної генерації випадкових чисел
- Генерує секрети JWT як 32-байтові шістнадцяткові рядки
- Паролі включають великі та малі літери, цифри та спеціальні символи
- Згенеровані значення не зберігаються і не передаються

---

## Secret Generator :uk:

Simple React application for generating JWT secrets and secure passwords.

## Features

- Generate cryptographically secure JWT secrets
- Generate strong random passwords
- Copy generated values to clipboard with one click
- Visual feedback when copying is successful
- Clean and intuitive user interface

## Installation

1. Clone the repository:

```bash
git clone https://github.com/NikitaBerezhnyj/Secret_Generator.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## Usage

1. Select the type of secret you want to generate:

   - JWT Secret: Generates a secure 32-byte hexadecimal string
   - Password: Generates a 12-character password with mixed case letters, numbers, and special characters

2. Click the "Generate" button to create a new secret

3. Use the copy button (📋) to copy the generated value to your clipboard

## Open API

The application offers a simple and straightforward API for generating JWT secrets and passwords. You can use this API to integrate the secret generation features into your own applications or services.

### API endpoints.

1. JWT secret generation.

   - **_URL:_** /api/jwt-secret
   - **_Method:_** GET
   - **_Description:_** Generates a new cryptographically secure JWT secret.
   - **_Response:_**
     ```json
     {
       "token": "your_generated_jwt_secret_here"
     }
     ```

2. Generating a password

   - **_URL:_** /api/password
   - **_Method:_** GET
   - **_Description:_** Generates a new secure password.
   - **_Response:_**
     ```json
     {
       "password": "your_generated_secure_password_here"
     }
     ```

### Using the API

- To get the JWT secret, just send a request to the /api/generate-jwt endpoint.
- To get the password, send a request to the /api/generate-password endpoint.
- The API returns the generated values in JSON format.

### Notes

- The API is open and available for use in any project, so you can easily integrate it into your applications.
- Values are generated on the server, which ensures security and privacy.

## Security Features

- Uses `crypto.getRandomValues()` for cryptographically secure random number generation
- Generates JWT secrets as 32-byte hexadecimal strings
- Passwords include uppercase letters, lowercase letters, numbers, and special characters
- Generated values are not stored or transmitted
