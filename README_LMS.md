# Global Humanities Institute - Multilingual LMS System

A professional multilingual Learning Management System (LMS) for humanities education, built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## 🌍 Features

### Multilingual Support
- **English** (Base language)
- **Korean** (한국어)
- **Thai** (ไทย)
- Seamless language switching
- Localized content and UI

### Core Functionality
- 📚 **Course Catalog**: Browse and filter humanities courses
- 👨‍🎓 **Student Dashboard**: Track progress, manage courses, view assignments
- 👨‍🏫 **Instructor Dashboard**: Manage courses, grade submissions, track analytics
- 🏠 **Professional Homepage**: Modern academic design with hero section, features, and testimonials
- 📊 **Progress Tracking**: Visual progress indicators for courses and lessons
- 🎯 **Course Management**: Comprehensive course details with syllabus and requirements

### Academic Programs
- Philosophy
- History
- Literature
- Art History
- Cultural Studies
- Linguistics
- Religious Studies
- Classical Studies

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd project_32_global
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
project_32_global/
├── app/
│   ├── [locale]/          # Localized pages
│   │   ├── layout.tsx     # Main layout with i18n
│   │   ├── page.tsx       # Homepage
│   │   ├── courses/       # Course catalog
│   │   └── dashboard/     # Student/Instructor dashboards
│   └── globals.css        # Global styles
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Header & Footer
│   ├── home/             # Homepage sections
│   └── courses/          # Course-related components
├── data/
│   ├── courses.ts        # Mock course data
│   └── users.ts          # Mock user data
├── messages/             # Translation files
│   ├── en.json          # English translations
│   ├── ko.json          # Korean translations
│   └── th.json          # Thai translations
├── lib/                  # Utility functions
└── i18n.ts              # Internationalization config
```

## 🎨 Design Features

- **Professional Academic Theme**: Clean, scholarly interface
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant components
- **Modern UI Components**: Built with shadcn/ui and Radix UI
- **Smooth Animations**: Framer Motion integration

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📚 Available Pages

### Public Pages
- `/` - Homepage with hero, features, programs overview
- `/courses` - Course catalog with filtering
- `/courses/[id]` - Individual course details

### Dashboard Pages
- `/dashboard` - Student dashboard
- `/dashboard/instructor` - Instructor dashboard

### Language Routes
All pages are available in three languages:
- `/en/*` - English
- `/ko/*` - Korean
- `/th/*` - Thai

## 🔄 Mock Data

The system includes comprehensive mock data for:
- 10+ humanities courses with full details
- Student and instructor profiles
- Course progress tracking
- Enrollment statistics

## 🎯 Key Components

### UI Components
- Button, Card, Badge, Avatar
- Navigation Menu, Dropdown Menu
- Tabs, Progress, Select
- Dialog, Alert, Toast

### Custom Components
- CourseCard - Display course information
- CourseFilters - Filter courses by category/level
- LanguageSwitcher - Change interface language
- Header/Footer - Global navigation

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Internationalization

The app uses `next-intl` for internationalization:
- Automatic locale detection
- URL-based language routing
- Comprehensive translation coverage
- Cultural adaptation for each language

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎓 Educational Focus

This LMS is specifically designed for humanities education with:
- Philosophy courses
- Historical studies
- Literature programs
- Art history
- Cultural and linguistic studies

## 🚦 Development Status

✅ Completed:
- Multilingual infrastructure
- Homepage design
- Course catalog
- Student dashboard
- Instructor dashboard
- Mock data generation
- Professional styling

## 📄 License

This project is for educational purposes.

---

Built with ❤️ for global humanities education