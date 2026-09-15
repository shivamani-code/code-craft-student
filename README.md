# 🎓 Code Craft Student

**Code Craft Student** is a modern web-based learning platform designed to help students build programming and software-development skills through structured learning paths.

The platform organizes learning into **Beginner, Intermediate, and Advanced** levels and provides dedicated paths for courses, resources, notes, and coding practice.

The current project focuses on building the complete student-facing experience and frontend architecture, with the foundation ready for real courses, authentication, progress tracking, and backend services to be integrated.

## ✨ Features

### 🏠 Landing Experience

The platform includes a structured landing page with:

* Hero section
* Clear call-to-action
* How-it-works section
* Testimonials
* Login and signup access
* Responsive navigation

The landing experience is separated from the authenticated student dashboard.

### 🔐 Authentication UI

Code Craft Student includes a dedicated authentication modal supporting:

* Login
* Account creation
* Name, email and password inputs
* Switching between login and signup modes
* Form validation through required fields
* Success notifications

The current authentication is frontend-only and simulates successful login/signup using React state rather than a real authentication backend.

### 📚 Personalized Learning Paths

After logging in, students are presented with three learning levels:

#### 🚀 Start — Beginner

Designed for students starting from the fundamentals.

Includes:

* Free Courses
* Paid Courses
* Resources
* Notes
* Practice Problems

#### 🧭 Explore — Intermediate

Designed for students with some programming experience.

Includes:

* Intermediate courses
* Advanced resources
* Study materials
* Coding challenges

#### 📖 Go — Advanced

Designed for more experienced learners.

Includes:

* Advanced courses
* Professional/paid learning paths
* Professional resources
* Expert-level documentation
* Industry-level practice problems

These learning paths are defined in the dashboard and presented through an interactive UI.

### 🗺️ Visual Learning Flow

The platform uses a step-by-step flow interface.

Each learning path displays a sequence such as:

```text
Free Courses
     ↓
Paid Courses
     ↓
Resources
     ↓
Notes
     ↓
Practice Problems
```

Each item can be opened individually, with navigation back to the learning path or dashboard.

### 📊 Student Dashboard

The dashboard provides:

* Personalized welcome message
* Three learning-level cards
* Animated transitions
* Interactive learning path selection
* Structured content navigation
* Responsive layout

The dashboard dynamically renders the selected learning path using reusable React components.

### ⚙️ Additional Sections

The application currently includes:

* Feedback section
* Rating interface
* Settings section
* Account settings UI
* Notification settings UI
* Privacy settings UI
* Logout flow
* Sidebar navigation

These sections are currently frontend interfaces and do not yet persist data to a backend.

## 🏗️ Architecture

```text
Code Craft Student
│
├── Landing Page
│   ├── Header
│   ├── Hero
│   ├── How It Works
│   └── Testimonials
│
├── Authentication
│   └── Auth Modal
│       ├── Login
│       └── Signup
│
├── Student Dashboard
│   ├── Beginner Path
│   ├── Intermediate Path
│   └── Advanced Path
│
├── Learning Flow
│   ├── Courses
│   ├── Resources
│   ├── Notes
│   └── Practice Problems
│
├── Feedback
│
└── Settings
```

The root application uses React Router, TanStack Query providers, tooltip support, and toast notifications before routing into the main page.

## 📁 Project Structure

```text
code-craft-student/
│
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/
│   │
│   ├── components/
│   │   ├── AuthModal.tsx
│   │   ├── Dashboard.tsx
│   │   ├── FlowLayout.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TestimonialSection.tsx
│   │   └── ui/
│   │       └── Reusable UI components
│   │
│   ├── hooks/
│   │   └── Custom React hooks
│   │
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   │
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── components.json
├── eslint.config.js
├── package.json
├── postcss.config.js
├── tailwind configuration
├── TypeScript configuration
└── Vite configuration
```

## 🛠️ Technology Stack

| Technology      | Purpose                                  |
| --------------- | ---------------------------------------- |
| React           | Frontend application                     |
| TypeScript      | Type-safe development                    |
| Vite            | Development and production build tooling |
| Tailwind CSS    | Styling                                  |
| shadcn/ui       | UI component system                      |
| Radix UI        | Accessible UI primitives                 |
| React Router    | Client-side routing                      |
| TanStack Query  | Application/query state infrastructure   |
| Lucide React    | Icons                                    |
| React Hook Form | Form handling                            |
| Zod             | Validation                               |
| Recharts        | UI/data visualization support            |

The project's dependency configuration contains the React, TypeScript, Vite, Tailwind, Radix, shadcn-related and supporting libraries used by the application.

## 🔄 User Flow

```text
Visitor
  │
  ▼
Landing Page
  │
  ├── Login
  │
  └── Sign Up
          │
          ▼
     Student Dashboard
          │
          ├── Beginner
          │
          ├── Intermediate
          │
          └── Advanced
                  │
                  ▼
             Learning Flow
                  │
          ┌───────┼────────┐
          ▼       ▼        ▼
       Courses Resources Notes
                  │
                  ▼
             Practice
```

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/shivamani-code/code-craft-student.git
cd code-craft-student
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

### Run linting

```bash
npm run lint
```

### Preview the production build

```bash
npm run preview
```

These commands are defined in the repository's package configuration.

## 🎯 Project Goal

The goal of Code Craft Student is to create a structured environment where students can progress through software-development learning material according to their experience level.

Instead of presenting every resource at once, the platform organizes the learning journey into progressive levels:

```text
Beginner
   ↓
Intermediate
   ↓
Advanced
```

Each level then exposes the learning resources relevant to that stage.

## 🚧 Current Status

This project is currently a **frontend prototype / learning-platform foundation**.

The main interface, navigation, authentication screens, dashboard, learning-path flow and supporting UI are implemented.

However, several parts are still placeholders.

### Current limitations

**Authentication**

Login and signup currently simulate authentication using local React state. There is no real user database or persistent authentication system yet.

**Learning Content**

The individual learning items currently open a placeholder page stating that the lesson content is still under development.

**Feedback**

The feedback form currently displays a success notification locally instead of sending feedback to a backend service.

**Settings**

Account, notification and privacy settings currently function as interface sections rather than persistent user settings.

## 🔮 Future Development

The architecture can be extended into a complete learning management platform.

### Authentication & User Accounts

Add a real backend such as:

* Firebase Authentication
* Supabase Auth
* Clerk
* Custom authentication API

### Learning Management

Add:

* Real course content
* Video lessons
* Coding exercises
* Quizzes
* Assignments
* Course completion tracking
* Certificates

### Student Progress

Introduce:

* Progress dashboards
* Learning streaks
* Completed lessons
* Skill tracking
* Performance analytics
* Personalized recommendations

### Coding Practice

The practice section could eventually provide:

* Online code editor
* Test cases
* Automatic evaluation
* Problem difficulty levels
* Leaderboards
* Programming-language selection

### Mentor Integration

Future versions could support:

* Mentor profiles
* Student–mentor communication
* Feedback
* Doubt solving
* Guided learning paths

### Backend

A production version could include:

```text
React Frontend
      ↓
Authentication
      ↓
Backend API
      ↓
Database
      ↓
Courses / Users / Progress
```

## 👨‍💻 About the Project

Code Craft Student is a personal project exploring how a modern frontend can be used to create a structured programming-learning environment for students.

The project focuses on **learning-path design, student experience, component architecture, responsive UI, and interactive navigation**, with the foundation prepared for future backend and educational-content integration.

## 📌 Project Status

**Frontend:** 🟢 In development
**Learning paths:** 🟢 Implemented
**Dashboard:** 🟢 Implemented
**Authentication UI:** 🟢 Implemented
**Real authentication:** 🔴 Not implemented
**Course content:** 🟡 Planned
**Backend:** 🔴 Not implemented
**Progress tracking:** 🔴 Planned
**Coding engine:** 🔴 Planned
