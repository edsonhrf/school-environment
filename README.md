# School Environment
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/edsonhrf/school-environment/blob/main/LICENSE) 

# About the project

School Environment is a full stack mobile application built by me aimed at improving school processes for activities such as publishing news, posting/consulting attendances and grades, issuing payment slips, important notifications, class content, viewing student ID cards, etc. .

The application consists of two different access types: teacher and student.

For "Student" type access, the grades, attendances, news and class content screens are for reference only.

As for the "Teacher" type access, editing and recording of new information is allowed on all application screens according to the subject that is released for the logged-in profile.

Both users can update profile information, view notifications and go to menu.

## Commom screens for both access type
![Web 2](https://github.com/acenelio/assets/raw/main/sds1/web2.png)

## Screens for access type "Student"
![Mobile 1](https://github.com/acenelio/assets/raw/main/sds1/mobile1.png) ![Mobile 2](https://github.com/acenelio/assets/raw/main/sds1/mobile2.png)

## Screens for access type "Teacher"
![Web 1](https://github.com/acenelio/assets/raw/main/sds1/web1.png)

# Technologies used
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- Java Validation
- Swagger
- Spring Security
- Spring MVC
## Front end
- HTML / CSS / JS / TypeScript
- React Native
- Expo
- React Native Paper
- Material UI
## Deployment
- Heroku
- Database: MySQL
## Other tools
- Figma
- MySQL Workbench
- Postman
- VSCode
- IntelliJ IDEA
- GitBash

# How to run the project

## Back end
- Java SDK 1.8

```bash
# clone repository
git clone https://github.com/edsonhrf/school-environment.git

# enter the back end project folder
cd school-app-backend

# run the project
./mvnw spring-boot:run
```

## Front end mobile - using Expo Managed Workflow (Expo GO)
- Node.js (LTS)
- npm (already installed with Node)
- git
- expo-cli
- Expo GO (app to be installed on Android and/or iOS device)

```bash
# clone repository
git clone https://github.com/edsonhrf/school-environment.git

# enter the front end project folder
cd school-app-frontend

# install dependencies
yarn install

# run the project
yarn start
```

# Author

Edson Henrique Ramos Figueiredo

https://www.linkedin.com/in/edson-henrique-052b60140/


