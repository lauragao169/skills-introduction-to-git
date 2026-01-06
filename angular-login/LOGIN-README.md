# Angular Login Application

A simple and elegant login page built with Angular technology.

## Features

- Clean and modern UI with gradient background
- User ID and Password input fields
- Form validation (fields are required)
- Login functionality with welcome message
- Logout functionality
- Responsive design

## Technologies Used

- **Angular 21.0.4** - Modern web application framework
- **TypeScript** - Type-safe programming language
- **FormsModule** - For two-way data binding with ngModel
- **CSS3** - For modern styling and animations

## How to Run

1. Navigate to the angular-login directory:
   ```bash
   cd angular-login
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

## How to Build

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist/login-app` directory.

## Usage

1. Enter any user ID and password in the respective fields
2. Click the "Login" button (enabled only when both fields are filled)
3. Upon successful login, a welcome message will be displayed
4. Click "Logout" to return to the login page

## Notes

- This is a simple demonstration login page with client-side validation only
- In a production environment, you would integrate with a backend authentication service
- The password field properly masks the input for security
