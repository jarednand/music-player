# Overview

A simple music player.

## Project Structure

This project is structured as monorepo using npm workspaces.

The monorepo consists of the following packages:
- **@music-player/frontend**: Client-side application built with React, TypeScript, Vite, and Vitest
- **@music-player/backend**: Server-side application built with Node.js and Express.js

## How it Works

The application consists of 2 routes:
- **/**: Home page, which renders a list of songs
- **/songs/:id**: Song page, which renders an individual song with an audio player

When a page is rendered, a request is made to the server to fetch the songs or individual song information.

The audio and cover image files for each song are located here: **music-player/packages/frontend/public/songs**.

## Running Locally

To run the monorepo locally, do the following:
1. Clone the project
2. Navigate to the project directory via: `cd music-player`
3. Install the dependencies via: `npm install`
4. Run the command: `npm run dev`, which will do the following:
  - Start the frontend application at: `http://localhost:8000`
  - Start the backend application at: `http://localhost:8100`
5. Visit `http://localhost:8000` in your browser to view the application