Node.js Backend Project
This project is a backend application developed with Node.js, utilizing various libraries to handle CRUD operations, authentication, and route management.

Prerequisites
Before starting, make sure you have the following installed on your machine:

Node.js
npm (included with Node.js)
Installation
Follow the steps below to install the necessary dependencies and set up the project.

1. Clone the Repository
Clone this repository to your local machine:


git clone https://github.com/your-username/your-repo.git
2. Navigate to the Project Directory
Go to the project directory:


cd your-repo
3. Install Dependencies
Install all the necessary dependencies with npm:


npm install
4. Install Prisma
Prisma is used as the ORM in this project. Install it with the following command:


npm install prisma --save-dev
5. Install bcrypt
Bcrypt is used for password hashing:


npm install bcrypt
6. Install uuid
UUID is used to generate unique identifiers:


npm install uuid
7. Install nodemon
Nodemon is used to automatically reload the application when code changes:


npm install nodemon --save-dev
8. Install express
Express is the web framework used to handle routes and HTTP requests:


npm install express
9. Install cors
Cors is used to handle cross-origin requests:


npm install cors
Prisma Configuration
After installing Prisma, initialize it with the following command to set up the schema.prisma file:


npx prisma init
Running the Project
Once all dependencies are installed and Prisma is configured, you can start the project using the following command:


npm start
This command will start the backend server using nodemon, allowing the server to automatically reload with each code change.

Notes
Ensure that Prisma is correctly configured with your database before launching the project.
Use bcrypt to hash passwords before storing them in the database.
Frontend Link
The frontend for this project can be found here: https://github.com/The-Snobe/crud-flutter
