FROM tomcat

MAINTAINER warleyvods@gmail.com

COPY dist/hashtag-tracker /usr/local/tomcat/webapps/tracker

EXPOSE 8080

CMD ["catalina.sh", "run"]
