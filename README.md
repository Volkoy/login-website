# login-test

This is a project to test out a login feature in a website.
This project was made with:

- React
- Node
- Express
- MongoDB

## Local deployment

- Clone the repo
  ```sh
  git clone https://github.com/Volkoy/login-test.git
  ```
- This project assumes you have MongoDB running locally and connected to:
  `mongodb://localhost:27017`

![MongoDB] (https://imgur.com/a/j7slPQI)

### For the server

- Change into the server directory.

  ```sh
  cd server
  ```

- then run

  ```sh
  npm install
  ```

- and finally start the server on `http://localhost:3001`

  ```sh
  npm start
  ```

### For the client

- Change into the client directory.

  ```sh
  cd ../client
  ```

- then run

  ```sh
  npm install
  ```

- and finally start the client server on `http://localhost:3000`

  ```sh
  npm start
  ```

## Testing the login feature

- The database is initialized with 2 users when starting the server

  - First user:

    `email: user1@example.com`

    `password: password1`

  - Secound user:

    `email: user2@example.com`

    `password: password2`

- Head to `htttp:localhost:3000/login` or click on the login button in the navbar

- Fill out the login form with either of the two users.

- It will redirect the user to the profile page with the user info and the option to logout.
