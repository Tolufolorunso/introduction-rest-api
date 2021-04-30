## Getting Started

These instructions will get you a copy of the project up and running on your
local machine.

## Installation

This is node.js API. Installation is done using npm install command:

```
$ npm install
```

All the packages needed for this API to works will be installed with this above
command.

### Clone

- Clone this repo to your local machine using `https://github.com/Tolufolorunso`

### The HTTP verbs used

- GET: To retrive resources
- POST: TO create resources
- PUT: To Update resources

## Handling all the four routes

### Get All Posts Using HTTP GET Method

```
// Endpoint is

 /posts

```

### Get A single Post Using HTTP GET Method

```
//Endpoint is

/posts/:id

```

### Add New Post Using HTTP POST Method

```
//Endpoint is

/posts

{
    "title": "title post",
    "body": "added body post",
    "userId": 5
}

```

### Update a Post Using HTTP PUT Method

```
//Endpoint is

/posts/:id
{
    "title": "title post",
    "body": "added body post"
}

```
