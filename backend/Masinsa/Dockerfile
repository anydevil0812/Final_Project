#base Docker image
FROM openjdk:8
LABEL maintainer = "sinyubi04@gmail.com"
LABEL version = "1.1"
ADD target/masinsa_project-0.0.1-SNAPSHOT.jar masinsa-docker.jar
ENTRYPOINT ["java","-jar", "masinsa-docker.jar"] 