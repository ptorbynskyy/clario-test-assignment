# Authorization Form Test Assignment

This is a test assignment for a Software Engineer position involving React and TypeScript.

## Project Description

The task was to implement an authorization form using **React** and **TypeScript** without relying on third-party libraries for form handling or validation. The form includes input fields for email and password with custom validation based on the provided requirements.

### Features Implemented

- **Email Validation**:
    - Ensures the email contains an `@`, a domain part, and does not include spaces.
- **Password Validation**:
    - Minimum of 8 characters, maximum of 64 characters.
    - Must include at least one uppercase letter, one lowercase letter, and one digit.
    - Spaces are not allowed.
- **Late Validation**:
    - Data is validated only after input is complete (e.g., on blur) or when the user submits the form.
- **UI Design**:
    - The interface was implemented based on a provided Figma design.

## Setup and Run Instructions

### Requirements

- Node.js 16+
- npm

### Installation

1. Clone the repository:
   ```
   git clone <repository_url>
   cd authorization-form
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build locally.
- **`npm run lint`**: Lints the code using ESLint and Biome.
- **`npm run test`**: Runs tests using Vitest.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and reliability.
- **Vite**: As the build tool and development server.

---

## Author

This project was created as part of a test assignment for a software engineering position.