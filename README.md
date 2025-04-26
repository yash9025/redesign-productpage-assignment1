# Front-End Development Internship Assignment

## Project Setup

Before starting, make sure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

To set up the project:

1. Clone this repository
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application should now be running on `http://localhost:5173` (or another port if 5173 is in use).

## Assignment Tasks

### Task 1: Redesign the Home Page

The current home page needs a redesign. The home page is located in `src/views/Home/index.tsx` and its related components are in `src/views/Home/components/`.

Requirements:
- Improve the visual appeal of the home page while maintaining the core functionality
- Ensure the page is responsive and works well on mobile, tablet, and desktop devices
- Optimize performance where possible
- Maintain the existing component structure, but feel free to add new components as needed

### Task 2: Create Shared Routes Configuration

Currently, routes are defined in two separate files:
- `src/configs/routes.config/authRoute.ts` - for unauthorized users
- `src/configs/routes.config/routes.config.ts` - for authorized users

Your task is to:

1. Create a new configuration file named `src/configs/routes.config/sharedRoutes.ts`
2. This file should export an array of route objects with the same structure as in the existing config files
3. Implement the system so that routes defined in this new file are accessible to both authorized and unauthorized users
4. Ensure that when you add a new route to this shared config, it works without any additional configuration

### Task 3: Change Default Path

Currently, the application uses `/hello` as the default path (defined in `src/configs/app.config.ts`).

Requirements:
- Modify the configuration files to change the default path from `/hello` to `/`
- This should be done by only changing the configuration files, not by modifying the actual components
- Ensure that the home page is properly rendered at the root path (`/`)
- The change should work for both authorized and unauthorized users

## Submission Guidelines

1. Fork this repository
2. Complete the assignments
3. Push your changes to your forked repository
4. Submit the URL of your repository

## Evaluation Criteria

Your submission will be evaluated based on:
- Code quality and organization
- Visual design and user experience
- Proper implementation of routing configurations
- Attention to detail
- Performance considerations
- Ability to follow instructions

Good luck!
