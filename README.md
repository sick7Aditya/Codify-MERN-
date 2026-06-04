# Codify

Codify is a full-stack MERN web application designed to help developers learn, practice, and improve their programming skills through an interactive and user-friendly platform.

## Features

- User Authentication and Authorization
- Secure Login and Registration
- Responsive User Interface
- Coding Resources and Learning Materials
- Modern MERN Stack Architecture
- RESTful API Integration
- Scalable Project Structure

## Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Tools & Technologies
- Git
- GitHub
- Postman
- npm

## Project Structure

```text
Codify/
│
├── Client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/sick7Aditya/Codify-MERN-.git
```

### Navigate to Project Directory

```bash
cd Codify-MERN-
```

### Install Frontend Dependencies

```bash
cd Client/my-client
npm install
```

### Install Backend Dependencies

```bash
cd ../../Server
npm install
```

## Environment Variables

Create a `.env` file inside the backend directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Running the Application

### Start Backend Server

```bash
npm start
```

### Start Frontend

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## Future Enhancements

- Online Code Compiler
- Coding Challenges
- Contest System
- User Profiles
- Progress Tracking
- Discussion Forums
- Leaderboards

## Screenshots

Add screenshots of your application here.

```md
![Home Page](screenshots/home.png)
```

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

## Author

Aditya

GitHub: https://github.com/sick7Aditya

## License

This project is licensed under the MIT License.
