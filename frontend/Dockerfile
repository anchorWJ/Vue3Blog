FROM node:latest

COPY ./ /app
WORKDIR /app
ENV DEBCONF_NOWARNINGS yes
RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y \
        build-essential -y \
        curl \
        nmap \
        git \
        nano \