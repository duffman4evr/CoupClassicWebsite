# CoupClassicWebsite

What to install so that you can develop
---
* Maven
* Java 8 SDK
* Git (duh)
* Yarn

How to start the CoupClassicWebsite application
---
1. Run `mvn clean package` to build your application
1. `cd target`
1. Start application with `java -jar website-1.0-SNAPSHOT.jar server ../dropwizard-config/config-development.yml`
1. To check that your application is running enter url `http://localhost:8080`

If you want to do rapid web development 
---
1. Run `mvn clean package` to build your application
1. `cd target`
1. Start application with `java -jar website-1.0-SNAPSHOT.jar server ../dropwizard-config/config-development.yml`
1. Start the react development web server with `cd ../src/web && yarn start`
1. Access your application via `http://localhost:3000`
1. Now you can edit js and reload to see the changes instantly.
