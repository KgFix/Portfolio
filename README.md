# React Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Sass. It's designed to showcase projects, skills, and professional experience in a clean, modern interface.

## Features

- **Dark/Light Mode:** Toggle between dark and light themes.
- **Smooth Animations:** Components fade in smoothly for a better user experience.
- **Component-Based Architecture:** Built with reusable React components for different sections:
  - Main Section
  - Expertise/Skills
  - Experience Timeline
  - Project Showcase
- **Responsive Design:** Adapts to different screen sizes.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Sass](https://sass-lang.com/) for styling.
- **UI Libraries & Components:**
  - [Material-UI](https://mui.com/) for UI components and icons.
  - [Font Awesome](https://fontawesome.com/) for icons.
  - [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component) for the experience timeline.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](httpss://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/KgFix/Portfolio.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd master
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

To run the app in development mode, use:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### Building the Application

To build the app for production, use:

```sh
npm run build
```

This will create a `build` folder in the project directory with the static files.

## Deployment

This project is set up for easy deployment to GitHub Pages.

To deploy the website, run:

```sh
npm run deploy
```

This command will build the application and push the `build` folder to the `gh-pages` branch of your repository.
