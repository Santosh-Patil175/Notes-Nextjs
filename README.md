# Notes App-Nextjs

Description

This is a simple Notes App built using Next.js that allows users to create, store, and delete notes. The application uses browser localStorage to persist data, so notes remain saved even after refreshing the page.


Features :

Add new notes
Delete existing notes
Persistent storage using localStorage
Instant updates without page reload

Tech Stack:

Next.js (React Framework)
React Hooks (useState, useEffect)
Tailwind CSS (for styling)
Browser localStorage (for data persistence)

How It Works:

. When the app loads, it retrieves saved notes from localStorage.
. When notes are updated, they are automatically saved back to localStorage.
. Users can add or delete notes using UI buttons.

Future Improvements
Add edit functionality for notes
Add authentication (login/signup)
Store notes in a database (MongoDB)

Github:
https://github.com/Santosh-Patil175/Notes-Nextjs/tree/feature-notes


Installation & Setup

Follow these steps to run the project:

git clone https://github.com/Santosh-Patil175/notes-app.git
cd notes-app
npm install
npm run dev

Then open:
http://localhost:3000