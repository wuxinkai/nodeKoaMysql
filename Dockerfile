FROM node
LABEL name="node-koa-mysql"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 9000
CMD npm start