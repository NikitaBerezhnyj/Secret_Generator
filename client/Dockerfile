# Specify the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the client code
COPY . .

# Expose the port that Vite runs on
EXPOSE 5173

# Start the client application
CMD ["npm", "run", "dev"]
