# Use the official Node.js image
FROM node:14

# Create and change to the app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Specify the command to run your app using nodemon
CMD ["yarn", "start"]

# Expose the port the app runs on
EXPOSE 8888
