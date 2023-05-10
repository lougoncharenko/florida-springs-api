# Florida Springs API

## Purpose of this API
The purpose of this API is to fetch data related to springs in Florida.

## To use the API
To use the API please use the [sign in route](http://localhost:3000/sign-up) for authentication

## Current Spring Data:
- Rainbow Spring
- Weeki Wachee Springs
- Silver Springs
- Ichetucknee Springs

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


### Authentication

| Route | Method | Description |
| ----------- | ----------- | ----------- |
|http://localhost:3000/users |GET | Gets all users |
|http://localhost:3000/sign-up |POST | User signs up for API key |
|http://localhost:3000//login | POST | User logs in for API key |
|http://localhost:3000/logout | GET | User logs out of API account |



