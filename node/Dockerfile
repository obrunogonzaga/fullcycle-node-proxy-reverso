FROM node:18

WORKDIR /usr/src/app

# Wait-for-it script into the image
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Application files
COPY index.js .
COPY package.json .
RUN npm install

EXPOSE 3000

# Command to run app
CMD ["/wait-for-it.sh", "db:3306", "--", "node", "index.js"]