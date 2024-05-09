# Specify a Node.js image to use
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json /app/
RUN npm install --production

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . /app

# Set environment variable to skip linting
ENV SKIP_LINT=true

# Build your Next.js application
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
