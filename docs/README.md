# Florida Springs API

## Purpose of this API
The purpose of this API is to fetch data related to springs in Florida


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
