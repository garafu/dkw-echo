FROM node:10-alpine

COPY . /usr/lib/echo
RUN cd /usr/lib/echo && \
    npm install

WORKDIR /usr/lib/echo
CMD ["npm", "start"]