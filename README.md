# Florida Springs API


## About the Project:

|       |                                                                                                                                                                                                     |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| About | An API about allows users to fetch, post, update and delete data about springs  in Florida.                                                                           |
| Author  | [Louisa Goncharenko](https://github.com/lougoncharenko) |
| Goal  | Build an API using node, mongoDB and express.                                                                                            |
|       |                                                                                                                                                                                                     |

## API Documentation:
[Florida Springs API documentation]()

## Usage
- Clone this repository
- run `npm install` to install all necessary packages.


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



## Project Objectives 
1. Practice the SDLC by **completing a project from proposal to deployment** with a **focus on Test Driven Development** practices.
2. **Utilize all the techniques learned** in class **in a single cohesive project**.
3. Produce a **portfolio-worthy authenticated API** to show off to the world!

### Functional Requirements

1. Project contains a **simple, static single page brochure site** that explains what the API does and a link to the API's documentation.
1. Project **contains documentation** explaining how to use your API.
1. The ability to **CREATE**, **READ**, **UPDATE**, and **DELETE** the object(s) in your API.
1. At least **one of each** endpoint: `GET`, `POST`, `PUT`, and `DELETE`.
1. A **database persistence layer** (e.g. MongoDB)

### Non-Functional Requirements

1. The API must be written using the **appropriate application of RESTful techniques**.
1. The API implementation must **follow the MVC pattern**.
1. The API must be hosted in a **public GitHub repository**.
1. The project repository **should not expose any secrets**!
1. The API must have a discernible theme or **serve a distinct purpose**. See the [Examples](#Example-APIs) for well-themed and purposed APIs.
1. The final project must be **deployed and fully accessible** via the internet and **callable via any consumer**.
1. The final project must be **fully documented**.
1. Must **develop the API using a TDD approach** as discussed in class on [Day 9](Lessons/Lesson09.md).
1. The syntax in the final project deliverable will **adhere to [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)**. You can use the [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) package to lint your syntax.

