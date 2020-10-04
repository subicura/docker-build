FROM ubuntu
LABEL maintainer "subicura"

RUN apt-get update \
    && apt-get install -yqq net-tools iputils-ping \
    && rm -rf /var/lib/apt/lists/*
