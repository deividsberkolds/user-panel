# Admin Panel (React + TypeScript + Vite)

A simple responsive admin panel to display and filter users fetched from an external API.

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS

## Features

- Fetch and display users from JSONPlaceholder
- Real-time client-side filtering by name
- Loading spinner and error handling
- User detail modal with extended information

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/    # UI components (SearchBar, UserList)
├── hooks/         # Custom hooks (useUsers)
├── services/      # API calls (userService)
├── types/         # TypeScript interfaces (User)
├── styles/        # Tailwind CSS and global styles
└── App.tsx        # Main application layout
```
