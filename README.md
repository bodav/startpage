# Startpage

A customizable browser startpage built with React, TypeScript, and Vite. Features a clean, responsive design with configurable links and keyboard navigation.

## Features

- **Configurable Links**: Easily customize your favorite websites and services
- **Keyboard Navigation**: Type to filter links, use Escape to clear, Backspace to delete
- **Responsive Design**: Adapts to different screen sizes with mobile-friendly layout
- **Custom Background**: Set your own background image with brightness control
- **Icon Support**: Built-in icons for popular services (GitHub, Reddit, YouTube, etc.)
- **Theme Support**: Clean, modern design with customizable themes

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Customize your links**: Edit `src/config.json` to add your favorite websites

## Configuration

Edit `src/config.json` to customize your startpage:

```json
{
  "background": {
    "url": "https://your-background-image-url.jpg",
    "brightness": 80
  },
  "internalUrl": "http://your-internal-server",
  "links": [
    {
      "title": "GitHub",
      "url": "https://github.com",
      "icon": "github"
    }
  ]
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
