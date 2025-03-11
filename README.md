# SolidStart Project with TanStack Router

A modern web application built with SolidStart, enhanced with TanStack Router, authentication, Tailwind CSS, DaisyUI, SolidQuery, and powered by Bun.

## 🚀 Features

- **SolidStart**: A meta-framework for SolidJS
- **TanStack Router**: Type-safe routing for your SolidJS app
- **Authentication**: Secure user authentication system
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind CSS
- **SolidQuery**: Data synchronization for SolidJS
- **Bun**: Fast JavaScript runtime and package manager

## 📋 Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or higher)
- Node.js (v18.0.0 or higher)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/Abdelrahmanaman/solid-start.git
cd solid-start

# Install dependencies
bun install
```

## 🚀 Development

Start the development server:

```bash
bun run dev
```

Your application will be available at `http://localhost:3000`.

## 📦 Building for Production

Build your application for production:

```bash
bun run build
```

Preview the production build:

```bash
bun run preview
```

## 🔧 Project Structure

```
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable components
│   ├── routes/             # Application routes
│   ├── lib/                # Utility functions and helpers
│   ├── services/           # API services and external integrations
│   ├── styles/             # Global styles
│   ├── types/              # TypeScript type definitions
│   ├── hooks/              # Custom hooks
│   ├── auth/               # Authentication related files
│   ├── app.tsx             # Main application entry
│   └── root.tsx            # Root component
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json
├── tsconfig.json
└── vite.config.ts          # Vite configuration
```

## 🔐 Authentication

This project uses a custom authentication solution. To configure authentication:

1. Set up your environment variables (see `.env.example` for required variables)
2. Configure authentication providers in `src/auth/config.ts`
3. Use the authentication hooks provided in `src/auth/hooks.ts`

## 🎨 UI Components

This project uses DaisyUI with Tailwind CSS for styling. To use:

1. Import components from DaisyUI
2. Use Tailwind utility classes for custom styling
3. Add custom components in the `src/components` directory

## 📝 TanStack Router Setup

This project uses TanStack Router for routing. Key files:

- `src/routes/index.ts`: Route definitions
- `src/routes/root.ts`: Root route configuration

## 📊 Data Fetching with SolidQuery

SolidQuery is used for data fetching and state management:

```typescript
import { createQuery } from '@tanstack/solid-query';

function MyComponent() {
  const query = createQuery(() => ({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  }));

  return (
    <div>
      {query.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {query.data.map(todo => (
            <li>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## 📄 License

[MIT](LICENSE)

## 🙏 Acknowledgements

- [SolidJS](https://www.solidjs.com/)
- [SolidStart](https://start.solidjs.com/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Bun](https://bun.sh/)
