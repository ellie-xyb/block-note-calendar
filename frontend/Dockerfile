FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update
RUN apt install -y nodejs npm

WORKDIR /frontend
COPY ./ ./

RUN npm install
CMD ["npm", "run", "start"]
