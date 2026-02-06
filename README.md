# 🌷 Cronx Academy

An interactive homeschool learning platform built with Next.js, React, and TypeScript.

## Overview

Cronx Academy is a comprehensive homeschooling curriculum platform designed for Sheena to teach Thalia (Age 14, Croydon). It features interactive learning modules across multiple subjects including mathematics, history, cultural studies, and wellbeing.

## Features

- **🔢 Maths Interactive**: Daily maths lessons covering algebra, geometry, number work, and statistics with progress tracking
- **📚 History Quest**: Interactive journey through Caribbean and world history with multiple modules:
  - **🌍 World War II**: Comprehensive WW2 education (14 lessons)
  - **👑 Tudor England & Caribbean**: Tudor era and Caribbean colonization (8 lessons)
  - **🏴‍☠️ Pirates of the Caribbean**: Golden age of piracy (11 lessons)
  - **✨ African & Caribbean Spirituality**: Cultural and spiritual traditions (10 lessons)
  - **🗽 American Revolution**: Birth of a nation and global impact (11 lessons)
- **🌈 Whisper Garden**: Gentle voice therapy app for children with selective mutism (in development)
- **📖 Comprehensive Teaching Guide**: Resources and tips for home educators

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React Hooks + localStorage
- **Deployment Ready**: Static site generation

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
cronx-academy/
├── app/                              # Next.js app directory
│   ├── modules/                      # Learning module pages
│   │   ├── maths/                   # Maths interactive module
│   │   ├── history/                 # History Quest hub page
│   │   ├── ww2/                     # World War II module
│   │   ├── tudor/                   # Tudor England & Caribbean module
│   │   ├── pirates/                 # Pirates of the Caribbean module
│   │   ├── spirituality/            # African & Caribbean Spirituality module
│   │   ├── revolution/              # American Revolution module
│   │   ├── orishas/                 # Orishas learning module
│   │   └── wellbeing/               # Whisper Garden module
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Home page
│   └── globals.css                  # Global styles
├── components/                       # React components
│   ├── ui/                          # UI components
│   │   └── ModuleCard.tsx           # Module card component
│   └── modules/                     # Module-specific components
│       ├── MathsInteractive.tsx     # Maths interactive component
│       ├── WW2Interactive.tsx       # World War II component
│       ├── TudorInteractive.tsx     # Tudor England component
│       ├── PiratesInteractive.tsx   # Pirates of the Caribbean component
│       ├── SpiritualityInteractive.tsx  # African & Caribbean Spirituality component
│       └── RevolutionInteractive.tsx    # American Revolution component
├── lib/                             # Utility functions and data
│   └── data/                        # Static data files
│       ├── mathLessons.ts           # Maths lesson data
│       ├── ww2Lessons.ts            # World War II lesson data
│       ├── tudorLessons.ts          # Tudor England lesson data
│       ├── piratesLessons.ts        # Pirates lesson data
│       ├── spiritualityLessons.ts   # Spirituality lesson data
│       ├── revolutionLessons.ts     # American Revolution lesson data
│       └── modules.ts               # Module metadata
├── types/                           # TypeScript type definitions
│   └── index.ts                     # All module type definitions
├── old-html/                        # Original HTML files (backup)
└── public/                          # Static assets
```

## Development

### Adding New Lessons

**Maths Lessons**: Edit `/lib/data/mathLessons.ts` and add entries to the appropriate category (algebra, geometry, number, or statistics).

**History Lessons**: Each history module has its own data file in `/lib/data/`:
- `ww2Lessons.ts` - World War II lessons
- `tudorLessons.ts` - Tudor England & Caribbean lessons
- `piratesLessons.ts` - Pirates of the Caribbean lessons
- `spiritualityLessons.ts` - African & Caribbean Spirituality lessons
- `revolutionLessons.ts` - American Revolution lessons

Each lesson includes: title, era, objectives, key dates, introduction, main content, primary sources, discussion questions, activities, key figures, vocabulary terms, and further reading.

### Creating New Modules

1. Create a new folder in `app/modules/[module-name]/`
2. Add a `page.tsx` file with your module content
3. Update `lib/data/modules.ts` to include the new module
4. Create any necessary components in `components/modules/`

### TypeScript Types

All types are defined in `/types/index.ts`. Update this file when adding new features that require type definitions.

## Features

### Progress Tracking

All interactive modules use localStorage to track completed lessons. Progress persists across browser sessions. Each module tracks progress independently:
- `completedTopics` - Maths lessons
- `completedWW2Lessons` - World War II lessons
- `completedTudorLessons` - Tudor England lessons
- `completedPiratesLessons` - Pirates lessons
- `completedSpiritualityLessons` - Spirituality lessons
- `completedRevolutionLessons` - American Revolution lessons

### Responsive Design

All modules are fully responsive and work on desktop, tablet, and mobile devices.

### Accessibility

Built with semantic HTML and ARIA labels for screen reader compatibility.

## Migration from HTML

This project was refactored from standalone HTML files into a modern Next.js application. The original files are preserved in the `old-html/` directory and can be accessed directly for modules still in development.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Static Export

```bash
# Build static site
npm run build

# The output will be in the .next directory
# Serve the static files with any static hosting provider
```

## Contributing

This is a personal educational project. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

© 2025 Oris John-Baptiste. All rights reserved.

Built with love for Thalia's learning journey 💛

## Acknowledgments

- Curriculum design and materials compiled by Oris John-Baptiste
- Built for homeschool education in Croydon, UK
- Inspired by the needs of modern home education

## Support

For questions or support, please open an issue in the repository.
