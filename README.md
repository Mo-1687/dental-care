# Dental Care Management System

A modern, full-stack dental appointment booking and management platform built with cutting-edge web technologies. Streamline your dental practice with automated scheduling, AI-powered voice assistance, and comprehensive patient management.

---

## 🚀 Features

### Patient-Facing Features

- **Smart Appointment Booking** - Intuitive multi-step appointment scheduling with real-time doctor availability
- **AI Voice Assistant** - Leverage Vapi AI for natural voice-based appointment booking
- **Professional Dashboard** - View and manage your upcoming appointments
- **Email Notifications** - Automatic confirmation emails powered by Resend
- **Responsive Design** - Seamless experience across all devices

### Admin Features

- **Doctor Management** - Add, edit, and manage dental professionals
- **Analytics Dashboard** - Real-time insights into appointments and practice metrics
- **Appointment Management** - Monitor and manage all bookings
- **Pro Plan Features** - Enhanced capabilities for premium users

---

## 🛠️ Technology Stack

### Frontend

- **Framework**: [Next.js 16](https://nextjs.org) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org) - Type-safe development
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com) - Accessible component library
- **State Management**: [TanStack React Query](https://tanstack.com/query/latest) - Server state management
- **Icons**: [Lucide React](https://lucide.dev) - Beautiful icon library
- **Email Preview**: [React Email](https://react.email) - Email component library
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify) - Toast notifications

### Backend & Database

- **ORM**: [Prisma](https://www.prisma.io) - Modern database ORM
- **Database**: Configured with Prisma schema
- **Authentication**: [Clerk](https://clerk.com) - Complete user authentication

### AI & Integration

- **Voice AI**: [Vapi AI](https://vapi.ai) - Voice assistant integration
- **Email Service**: [Resend](https://resend.com) - Email delivery platform

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ and npm/yarn/pnpm
- Git
- A code editor (VS Code recommended)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mo-1687/dental-care.git
cd dental-care
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory and add your configuration:

```env
# Database
DATABASE_URL=your_database_url

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# Resend Email Service
RESEND_API_KEY=your_resend_key

# Vapi AI Voice
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_key

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Setup Database

```bash
npx prisma migrate dev
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📦 Available Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the development server with hot-reload |
| `npm run build` | Build the application for production         |
| `npm start`     | Start the production server                  |
| `npm run lint`  | Run ESLint to check code quality             |

---

## 📁 Project Structure

```
dental-care/
├── app/                          # Next.js app directory
│   ├── admin/                    # Admin dashboard pages
│   ├── appointments/             # Appointment booking
│   ├── dashboard/                # User dashboard
│   ├── api/                      # API routes
│   └── voice/                    # Voice assistant features
├── components/                   # Reusable React components
│   ├── admin/                    # Admin-specific components
│   ├── appointments/             # Booking flow components
│   ├── ui/                       # Radix UI components
│   └── landing/                  # Landing page sections
├── lib/                          # Utility functions & services
│   ├── actions/                  # Server actions
│   ├── prisma.ts                 # Prisma client
│   └── resend.ts                 # Email service
├── hooks/                        # Custom React hooks
├── prisma/                       # Database schema
└── public/                       # Static assets
```

---

## 🔐 Authentication

This application uses [Clerk](https://clerk.com) for authentication. Users can sign up, log in, and manage their profiles seamlessly. Admin access is controlled through role-based permissions.

---

## 📧 Email Services

Appointment confirmations and notifications are sent via [Resend](https://resend.com). Email templates are built with React Email for a modern, maintainable approach.

---

## 🎤 Voice AI Integration

Patients can book appointments using natural voice commands powered by [Vapi AI](https://vapi.ai). This feature enhances accessibility and user experience.

---

## 🗄️ Database Schema

The application uses Prisma ORM with a comprehensive schema for managing:

- Users and authentication
- Doctors and specialties
- Appointments and scheduling
- Pricing plans

See `prisma/schema.prisma` for the complete schema.

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy with one click

### Deploy on Other Platforms

The application is built with Next.js and can be deployed on any platform supporting Node.js:

- Docker
- Railway
- Render
- AWS EC2
- DigitalOcean

---

## 📝 Environment Variables Reference

| Variable                            | Description                | Required |
| ----------------------------------- | -------------------------- | -------- |
| `DATABASE_URL`                      | Database connection string | ✓        |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key           | ✓        |
| `CLERK_SECRET_KEY`                  | Clerk secret key           | ✓        |
| `RESEND_API_KEY`                    | Resend email API key       | ✓        |
| `NEXT_PUBLIC_VAPI_PUBLIC_KEY`       | Vapi AI public key         | ✓        |
| `NEXT_PUBLIC_APP_URL`               | Application URL            | ✓        |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 📞 Support & Contact

For questions, issues, or suggestions:

- Open a [GitHub Issue](https://github.com/Mo-1687/dental-care/issues)
- Contact: [Your Contact Information]

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React framework
- [Prisma](https://www.prisma.io) - Database ORM
- [Clerk](https://clerk.com) - Authentication
- [Resend](https://resend.com) - Email service
- [Vapi AI](https://vapi.ai) - Voice AI
- [Radix UI](https://www.radix-ui.com) - UI Components
- [Tailwind CSS](https://tailwindcss.com) - Styling

---

**Built with ❤️ by Mohamed Ehab**
