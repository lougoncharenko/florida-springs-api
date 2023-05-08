# Florida Springs API

## Purpose of this API
The purpose of this API is to fetch data related to springs in Florida

## To use the API
To use the API please use the sign in route for authentication

## API Endpoints:

### Springs

| Route | Method | Description |
| ----------- | ----------- | ----------- |
|http://localhost:3000/springs |GET | Gets all springs |
|http://localhost:3000/springs/{springId} |GET | Get one spring by id|
|http://localhost:3000/springs | POST | add a new spring |
|http://localhost:3000/springs/{springId}| PUT | update an exisiting spring|
|http://localhost:3000/springs/{springId} | DELETE | delete a spring |

{springId} = Route parameter = `:springId`

### Users

| Route | Method | Description |
| ----------- | ----------- | ----------- |
|http://localhost:3000/users |GET | Gets all users |
|http://localhost:3000/users/{userId} |GET | Get one user by id|
|http://localhost:3000/users | POST | add a new user |
|http://localhost:3000/users/{userId}| PUT | update an exisiting user|
|http://localhost:3000/users/{userId} | DELETE | delete a user |

{userId} = Route parameter = `:userId`

### Authentication

| Route | Method | Description |
| ----------- | ----------- | ----------- |
|http://localhost:3000/sign-up |POST | User signs up for API key |
|http://localhost:3000//login | POST | User logs in for API key |
|http://localhost:3000/logout | GET | User logs out of API account |



