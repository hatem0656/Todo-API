# Todo API

<nobr><img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <nobr/>
<nobr><img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" /> <nobr/>
<nobr><img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" /> <nobr/>
<nobr><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" /> <nobr/>

## Table of contents

- [Overview](#overview)
- [The Challenge](#the-challenge)
- [Built with](#built-with)
- [Endpoints](#endpoints)
- [Deployment](#deployment)
- [Author](#author)

## Overview

I made this API for my Todo App to handle user registration, authentication, CRUD operations of todo items and saving data in MongoDB.

## The Challenge

API should handle the following:

- Create a new user and save user data in the database
- User Sign in Process & sending authentication token
- User Sign out Process & deleting authentication token
- Create a new todo for a user and save it in the database
- Get all todo items of the user
- Delete a todo item from the database

## Built with

- [Node JS](https://nodejs.org/en) - JavaScript runtime environment
- [Express JS](https://expressjs.com/) - Web Framework for Node JS
- [JWT](https://jwt.io/)
- [MongoDB](https://www.mongodb.com/) - No-SQL Database

## Endpoints

### Create New User

```bash
[POST] "http://localhost:4000/sign_up"
```

| Method | POST                                                                  |
| ------ | --------------------------------------------------------------------- |
| Body   | {"name": "Hatem" , "email": "hatem@gmail.com" , "password": "123456"} |

### Sign in a user

```bash
[POST] "http://localhost:4000/sign_in"
```

| Method | POST                                                |
| ------ | --------------------------------------------------- |
| Body   | {"email": "hatem@gmail.com" , "password": "123456"} |

### Sign out a user

```bash
[GET] "http://localhost:4000/sign_out"
```

| Method | GET |
| ------ | --- |

### Get a user information (name and email)

```bash
[GET] "http://localhost:4000/user"
```

| Method | GET |
| ------ | --- |

### Get all todo items of a user

```bash
[GET] "http://localhost:4000/1"
```

| Method     | GET     |
| ---------- | ------- |
| Parameters | User Id |

### Create a new todo item

```bash
[POST] "http://localhost:4000/1"
```

| Method     | POST                                |
| ---------- | ----------------------------------- |
| Parameters | User Id                             |
| Body       | {"content": "learn a new language"} |

### Delete a todo item

```bash
[DELETE] "http://localhost:4000/1/2"
```

| Method     | DELETE           |
| ---------- | ---------------- |
| Parameters | User Id, Todo Id |

## Deployment

- Deployed on [Cyclic](https://cyclic.sh/), API Endpoint: (https://todo-api-nodejs.cyclic.app/)

## Author

- Linkedin - [Hatem Mohamed](https://www.linkedin.com/in/hatem-mohamed-85346916a/)
