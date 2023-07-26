# Quizit Frontend

This is the frontend application for the Quiz Platform. Quizit allows users to take quizzes, view their reports, and manage exams. It provides a user-friendly interface for interacting with the backend API.

## Features

- User registration and authentication
- Take quizzes with a specified time limit
- View and analyze quiz reports

## Technologies Used

- Angular 16.0.0
- Angular Material 16.1.5
- RxJS 7.8.0

## Getting Started

### Prerequisites

To run this application, you need to have Node.js and Angular CLI installed on your system.

### Installation

1. Clone this repository to your local machine:

git clone https://github.com/<vishnu-prasath-005>/quizit-frontend.git
cd quizit-frontend

2. Install the required dependencies:

npm install

### Development Server

To run the development server, use the following command:

ng serve

The application will be accessible at `http://localhost:4200/`.

### Building the Application

To build the application for production, use the following command:

ng build

The production build will be stored in the `dist/` directory.

## Routing

The application uses Angular Router for handling different views:

- `/app/login`: Login page for user authentication.
- `/app/signup`: Sign-up page for new user registration.
- `/app/user`: User dashboard to take quizzes, view reports,.
- `**`: Error page shown for any unknown routes.

## Authentication and Guards

The application uses JWT (JSON Web Tokens) for user authentication. It includes the following guards to protect routes:

- `loginGuard`: Guards the login and sign-up pages to prevent authenticated users from accessing them.
- `authGuard`: Guards the user dashboard to prevent unauthorized access.

## Dependencies

The application relies on the following key dependencies:

- Angular Material: Provides pre-built UI components and styles for a consistent look and feel.
- RxJS: Handles asynchronous operations and data stream management.

## Contribution Guidelines

If you would like to contribute to this project, feel free to fork the repository and create a pull request. Please ensure to follow the existing code style and add appropriate test cases for any new features or bug fixes.

## Acknowledgments

Thank you to all the contributors who have helped in developing and testing this application.

For any questions or issues, please create an issue in the GitHub repository. Happy quizzing!