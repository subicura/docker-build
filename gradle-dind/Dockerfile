FROM docker:24.0-dind

# install jdk11
RUN apk --no-cache add openjdk11

# install gradle
ENV GRADLE_VERSION 6.9.4
ENV GRADLE_HOME /usr/local/gradle
ENV PATH ${PATH}:${GRADLE_HOME}/bin
ENV GRADLE_USER_HOME /gradle

# Install gradle
WORKDIR /usr/local
RUN wget  https://services.gradle.org/distributions/gradle-$GRADLE_VERSION-bin.zip && \
  unzip gradle-$GRADLE_VERSION-bin.zip && \
  rm -f gradle-$GRADLE_VERSION-bin.zip && \
  ln -s gradle-$GRADLE_VERSION gradle
