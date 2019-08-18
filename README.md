# CoupClassicWebsite

How to start the CoupClassicWebsite application
---

1. Run `mvn clean install` to build your application
1. `cd target`
1. Start application with `java -jar website-1.0-SNAPSHOT.jar server ../dropwizard-config/config-development.yml`
1. To check that your application is running enter url `http://localhost:8080/about.html`

Health Check
---

To see your applications health enter url `http://localhost:8081/healthcheck`
