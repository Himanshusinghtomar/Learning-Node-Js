# Learning Node.js with MongoDB and REST API

This repository documents my journey in learning Node.js with MongoDB and creating a REST API to connect both technologies.

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/learning-node-mongodb-rest-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd learning-node-mongodb-rest-api
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Set up your MongoDB database and update the connection string in `app.js` or your preferred configuration file.

5. Run the Node.js server:

   ```bash
   node app.js
   ```

   Or, if you have nodemon installed for development:

   ```bash
   npx nodemon app.js
   ```

## Project Structure

- **app.js:** Entry point of the application, sets up the Express server and MongoDB connection.
- **routes/routes.js:** Defines RESTful API endpoints for handling survey form submissions.
- **models/survey.js:** Defines the Mongoose model for survey form submissions.
- **.env:** Configuration file for environment variables. Remember to create this file and add sensitive information.

## API Endpoints

- **POST /api/surveys:** Submit a survey form.
  Example:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com", "feedback": "Great service!"}' http://localhost:3000/api/surveys
  ```

- **GET /api/surveys:** Get all survey form submissions.

## Learning Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)

## License

This project is licensed under the [MIT License](LICENSE).

Happy coding!
```

Remember to replace placeholders like `your-username` and customize the content based on your project structure and preferences. Additionally, you may want to add more detailed explanations, instructions, or sections as your project progresses.
