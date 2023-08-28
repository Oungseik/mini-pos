# Mini POS System 

Mini Pos system prototype. The UI is tested on the window with the minimum width of `1583px`. Does not implement for small devices.
To be more realistic I used data from [https://dummyjson.com/](https://dummyjson.com/).

Current state of application is self contains and does not need backend.
You can sign in with any email and password. Email is stored in the local storage and check the local storage when visit the home page.

To run this application. Make sure you are in the `frontend` directory.

---
## Caveat

This application configured to run as stand-alone and make the API call from the `http://localhost:3000`.
If you want to serve as the **static** file from the express project, please change the `src/config/index.ts` like below before build.

```ts
// src/config/index.ts
const DOMAIN = import.meta.env.DEV ? "http://localhost:3000" : "";
export { DOMAIN };
```

---

I used `pnpm` for this project but `npm` and `yarn` should work properly.

Frist install the dependencies.

```pnpm i```

Start development server with

```pnpm run dev```

Start the production server with

```pnpm run build && pnpm run preview```

---
## Usage and Features 

`/` Home route is protected, you must login first. Login is just dummy and you can use any `email` and `password`.
When click the button, the request is sent to the server and a **JSON web token** will be store in the session storage.
That token is used to make api call to the server.


- You can **search** by type and click the search button
- You can also filter by **category** and **search** in the selected category. 
- Add item will increase the count on the cart icon. Second click will unselect the item.
- Drawer is implement without any `Javascript`, used `CSS` only, inspired by [Daisy UI's Drawer](https://daisyui.com/components/drawer/)
- And last but not least **Pagination**
