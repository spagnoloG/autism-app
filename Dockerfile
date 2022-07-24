FROM node:14-alpine AS development
# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .

# Generate js.minified files
RUN yarn build
RUN yarn global add serve

# Expose port
EXPOSE 3000

# Start the app
CMD [ "serve", "-s", "/app/build"]
