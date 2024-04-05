FROM node:carbon-slim

# Create app directory
WORKDIR /graphqlpet_ag

# Install app dependencies
COPY package.json /graphqlpet_ag/
RUN npm install

# Bundle app source
COPY . /graphqlpet_ag/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
