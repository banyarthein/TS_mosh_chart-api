# Use an existing docker image as a base
FROM node:16-alpine

# Create an App Dir
WORKDIR /usr/src/app

# Copy Package.json

COPY package*.json ./

# Download and install a dependency
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

#Copy all working files
COPY . .

#Open Port
EXPOSE 8000

# Tell the image what to do when it starts as a container
CMD ["npm", "start"]