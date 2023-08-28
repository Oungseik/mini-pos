# Mini POS System Backend

Mini pos system create with **TypeScript**, **NodeJS**, **Express** and **Prisma**.
For simple sake, I use **SQLite3**. If you prefer other database, please check the [prisma documentation](https://www.prisma.io/docs).
Data for products are copied from the products list of [https://dummyjson.com/](https://dummyjson.com/).

Please check

- [How to run](#how-to-run)
- [API List](#api-list)

---

## How to run

Development environment specifications.

- Ubuntu 22.04.3 LTS
- Node v18.16
- pnpm v8.6.11

This is the list of dependencies currently using.

```json
  "dependencies": {
    "@prisma/client": "5.1.1",
    "bcrypt": "^5.1.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "helmet": "^7.0.0",
    "jsonwebtoken": "^9.0.1",
  }
```

To run the server, make sure you are in the backend directory.
there must be `.env` file with `JWT_SECRET` environment variable.

Then execute these commands in terminal.

```bash
# generate prisma client
npx prisma generate

# run in live reload mode
pnpm run dev

# start as a server
pnpm run start
```

or 

**Use the `Dockerfile` to build docker image**

---

## API List

- `POST http://localhost:3000/signin`

  - send post request with `email` and `password` will response the **JSON Web Token** which is needed to add to the `Authorization` header for further request.
    The header must prefix with `Bear` word. Eg. `Authorization: Bear <token>`
  - Check [api-tests/signin.rest](./api-tests/signin.rest)

- `GET http://localhost:3000/api/products`

  - Return 10 products by default. Accept query parameter `search`, `category`, `take` and `skip`
  - if query parameter contains `search` the title which contains the text in that query will return. `catgory` can work together with `search`
  - `take` and `skip` are support to do pagination.
  - Check [api-tests/products.rest](./api-tests/products.rest)

- `GET http://localhost:3000/api/products/:id`

  - query product by specific id

- `POST http://localhost:3000/api/products`
  - create new product

> Don't forget to add JSON token in the authorization header.
