# Use an official Node.js runtime as a parent image
FROM node:18

# Install nodemon
RUN npm install --global nodemon

# Set the working directory to /app
WORKDIR /app/

# Copy package.json and package-lock.json to the working directory
COPY . /app

WORKDIR /app/

# Install app dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Run your application
CMD ["npm", "run", "dev"]