# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the `package.json` and `package-lock.json` (or `yarn.lock` if you use Yarn) to the container's working directory
COPY package*.json ./

# Install the app dependencies inside the container
RUN npm install

# Copy the rest of the application to the container's working directory
COPY . .

# Build the application
RUN npm run build

# Use a static server to serve the built application. We use serve as an example, but you can use others if preferred.
RUN npm install -g serve

# Expose port 3000 (default for serve). If you use a different server or port, adjust as necessary.
EXPOSE 3000

# Command to run the application using serve
CMD ["serve", "-s", "dist"]
