FROM gradle:6-jdk11

RUN apt-get update -yqq
RUN apt-get install -yqq \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg \
  lsb-release
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
RUN add-apt-repository \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"

RUN apt-get update -yqq && \
  apt-get install -yqq docker-ce

RUN /bin/bash -c 'echo -e "{\n \"iptables\": false\n}" > /etc/docker/daemon.json'
