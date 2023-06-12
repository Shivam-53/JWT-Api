# JWT-Api
This is a simple JWT Api , where a JWT token is signed and created by hitting the end "/login" endpoint. The JWT token can be verified by hitting the "/verification" endpoint.

Steps to setup:
1) First install all the required modules by initialising npm, by using the command `npm init`.
2) Next, install all the required modules by using the command `npm i`.
3) The module's which are used in this API are Express, dotenv , jsonwebtoken.
4) Next, make a .env file in the root directory of the project, now add a variable named `Secret_token`, and give whatever token you want.
5) Express is used to setup the server and jsonwebtoken is a package which allows us to deal with JWT, it allows us to create a JWT token as well as verify the token.
6) Now start the server by writing `node index.js` in the terminal, this will start the server.
7) Once the server has started, Open Postman or thunderclient extension on Vs Code, hit the `/login` endpoint by the Post method also specify the body data  in JSON Format.
8) Now hit send, the server will respond with a JSON string which would contain the token, now copy this token.
9) Make a new request on Postman or thunderclient, whichever you are using , now hit the `/verification` endpoint
10) Before making the request, go the the authorization panel and add the token in the bearer section.
11) Once the token is added in the bearer section, hit the endpoint.
12) The Server will return the data back, which was provided in the `/login` endpoint.
13) If the token is not valid, an error will be displaced.

Congratulation!!, You have Successfully created as well as verified your own JWT token.

