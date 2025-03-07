FROM node:16.10.0-alpine
ARG  REST_API_URL
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn

# Bundle app source
COPY . /usr/src/app
ENV  BLOG_INDEX_ID=$BLOG_INDEX_ID
ENV  NOTION_TOKEN=$NOTION_TOKEN
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]