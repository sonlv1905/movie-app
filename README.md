# Movie Website

## **Overview**

This is a movie website built using \*\*React, Vite, Redux Toolkit, Redux Saga. The project aims to provide a user-friendly interface for users to explore and discover information about movies.

This is a React application built with Vite and TypeScript, aiming to provide a platform for movie enthusiasts to explore and discover their favorite shows. The project leverages **Redux** for state management, **Redux-Saga** for handling asynchronous actions, **SCSS** for styling, **Jest** for testing.

Styling is achieved using **SCSS** to enhance maintainability and provide a more structured approach to CSS. The styles are modularized and organized in the respective component folders.

The application uses **Redux** for state management. The state logic is divided into actions, reducers, and sagas to handle asynchronous operations. The Redux store is configured in **`redux/store.ts`**.

## **Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Testing](#testing)

## **Installation**

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

```bash

# Change directory to the project folder
cd MOVIE-PROJECT

# Install dependencies
npm install

```

## **Usage**

```bash
# Start the development server
npm run dev
```

Visit [Movie Website](http://localhost:5173) in your browser to see the application.

## **Features**

- **Browse Movies:** Explore the world of cinema with thousands of movies of diverse genres.
- **Detailed Information:** View comprehensive details about each movies.
- **Now play list:** The movies you've been watching recently
- **Popular:** Update popular movies recently.
- **Top Rated:** Rate movies based on imdb.
- **Upcoming Movie:** Updated list of upcoming movies
- **Watch list:** Display the list of movies that have been added to the watchlist.
- **State Management:** Redux and Redux-Saga for efficient state management.
- **Styling:** SCSS for a modular and maintainable styling approach.
- **Testing:** Jest for unit testing to ensure code reliability.

## **Testing**

Unit tests are written using Jest. You can run the tests with the following command:

```bash
npm run test
```
