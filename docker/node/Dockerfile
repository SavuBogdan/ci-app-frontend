# Use the official Node.js base image
FROM node:19.8.1

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files into the container

#RUN cat ./package.json
# Install dependencies
RUN yarn install
#RUN yarn build

# Copy the rest of the application code into the container

# Expose the port for the application
EXPOSE 3000


# Start the application
CMD ["yarn", "run", "start"]
#CMD ["ls", "-al"]


