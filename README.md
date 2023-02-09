# movie-backend

# p2-cms-integration-server

CMS Integration - Server

## Endpoints :

- `GET /movie`
- `GET /actor`
- `GET /author`

- `POST /author`

- `DELETE /author/:id`

- `PUT /movie/:id`

## 1. GET /movie

_response_

```json
{
  "data": [
    {
      "id": INTEGER,
      "title": STRING,
      "synopsis": STRING,
      "trailerUrl": STRING,
      "imgUrl": STRING,
      "genre": STRING,
      "AuthorId": INTEGER,
      "createdAt": STRING,
      "updatedAt": STRING
    }
  ]
}
```

## 2. GET /actor

_response_

```json
{
  "data": [
    {
      "id": INTEGER,
      "MovieId": INTEGER,
      "name": STRING,
      "profilePict": STRING,
      "createdAt": STRING,
      "updatedAt": STRING
    }
  ]
}
```

## 3. GET /author

_response_

```json
{
  "data": [
    {
      "id": INTEGER,
      "name": STRING,
      "nationality": STRING,
      "age": STRING,
      "createdAt": STRING,
      "updatedAt": STRING
    }
  ]
}
```

## 4. POST /author

_request_

```json
{
  "name": STRING,
  "nationality": STRING,
  "age": STRING,
}
```

_response_

```json
{
  "message": "Author create succesfully"
}
```

## 5. DELETE /author:id

Params

```json
{
   "key": STRING,
   "value": INTEGER,
}
```

_response_

```json
{
  "message": "Author #7 has been deleted"
}
```

## 6. PUT /author:id

_request_

```json
{
  "genre": STRING,
}
```

_response_

```json
{
  "message": "Update Success"
}
```
