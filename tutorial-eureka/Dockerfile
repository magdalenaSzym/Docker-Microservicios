FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
openjdk-17-jdk \
maven \
wget \
curl \
gnupg \
&& rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN mvn clean package

EXPOSE 8761

CMD ["java","-jar", "target/tutorial-eureka-0.0.1-SNAPSHOT.jar"]