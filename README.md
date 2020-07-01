# SimpleReg
 
## Installation:
1. Make sure you have [Node](https://nodejs.org/en/), [ReactJs](https://reactjs.org/), [Yarn](https://yarnpkg.com/), and a MySQL Database server (the most easy to set up probably [XAMPP](https://www.apachefriends.org/index.html).
2. Find database .sql file in database folder. Use that to setup database.
3. Open service folder in command prompt / terminal, type `yarn install` to install all dependency.
4. Open ui folder in command prompt / terminal, type `yarn install` to install all dependency.
5. Run database server, make sure it's running properly.
6. open service/connection.js, edit createConnection parameters with you host, user, password. If you use my .sql file, keep the database name. 
7. Open service folder in command prompt / terminal, type `yarn start` to run the service. Open `http://localhost:3006/users` in browser. You should get json with empty user list. Congrats, the service is running properly.
8. Open ui folder in command prompt / terminal, type `yarn start` to run the React App. Open `http://localhost:3000/` in browser. You should see the login page. Congrats, the React App is running properly.
