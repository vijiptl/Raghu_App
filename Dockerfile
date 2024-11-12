FROM node:18.20.4
WORKDIR /apps
ADD . .
RUN npm install
CMD ["node"]
