# QuickRent

QuickRent is a web application that allows users to rent high-end tech gadgets like laptops, cameras, and gaming consoles without the long-term commitment of purchasing.

## Features

- Browse available gadgets with detailed specifications
- Rent gadgets on daily, weekly or monthly basis
- List your own gadgets for rent
- User authentication with Google
- Dark/Light theme support
- Responsive design

## Tech Stack

- **Frontend**
  - React with TypeScript
  - Vite
  - Tailwind CSS
  - Shadcn UI Components
  - Framer Motion
  - Firebase Authentication
  - React Router DOM
  - React Hook Form
  - Zod for form validation

## Prerequisites

- Node.js 16+
- npm or yarn
- Git

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/amandeeeo02/quick-rent.git
cd quick-rent/client
npm install
npm run dev
```

2. Set up environment variables:
```bash
VITE_SERVER_URL=http://localhost:YOUR_PORT
VITE_CLIENT_URL=http://localhost:5173
```

3.Available Scripts

npm run dev - Start development server
npm run build - Build for production
npm run lint - Run ESLint
npm run preview - Preview production build locally


## Project Structure

client/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   └── sections/     # Page sections
│   ├── context/         # React Context providers
│   ├── data/           # Static data
│   ├── firebase/       # Firebase configuration
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── router/        # Route configurations
│   └── styles/        # Global styles
