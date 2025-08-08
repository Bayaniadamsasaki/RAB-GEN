# Contributing to RAB Generator

Thank you for your interest in contributing to RAB Generator! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
- **Search existing issues** before creating new ones
- **Use the issue template** when reporting bugs
- **Provide detailed information** including steps to reproduce
- **Include screenshots** for UI-related issues

### Suggesting Features
- **Check the roadmap** in CHANGELOG.md first
- **Describe the use case** and benefits
- **Consider implementation complexity**
- **Provide mockups** for UI changes

### Code Contributions

#### 1. Fork & Clone
```bash
# Fork the repository on GitHub
git clone https://github.com/YOUR_USERNAME/RAB-GEN.git
cd RAB-GEN
```

#### 2. Create Branch
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Or bug fix branch  
git checkout -b bugfix/issue-description
```

#### 3. Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint
```

#### 4. Make Changes
- **Follow coding standards** (see below)
- **Write descriptive commit messages**
- **Add comments** for complex logic
- **Test your changes** thoroughly

#### 5. Submit Pull Request
```bash
# Add and commit changes
git add .
git commit -m "feat: add new feature description"

# Push to your fork
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

## 📋 Coding Standards

### JavaScript/React
```javascript
// Use modern ES6+ syntax
const MyComponent = () => {
  const [state, setState] = useState(initialValue);
  
  // Use descriptive variable names
  const handleUserInputChange = (newValue) => {
    setState(newValue);
  };
  
  return (
    <div className="component-container">
      {/* JSX content */}
    </div>
  );
};

export default MyComponent;
```

### CSS/Tailwind
```css
/* Use Tailwind utility classes */
.my-component {
  @apply flex items-center justify-between p-4 bg-gray-800 rounded-lg;
}

/* Custom CSS when needed */
.custom-animation {
  animation: slideIn 0.3s ease-out;
}
```

### File Organization
```
components/
├── ComponentName/
│   ├── index.jsx          # Main component
│   ├── ComponentName.jsx  # Implementation
│   └── styles.module.css  # Component styles
```

### Naming Conventions
- **Components**: PascalCase (`MyComponent.jsx`)
- **Files**: camelCase (`utilityFunction.js`)
- **CSS Classes**: kebab-case (`my-class-name`)
- **Variables**: camelCase (`myVariableName`)

## 🧪 Testing

### Before Submitting
- [ ] **Run development server** - Ensure app starts without errors
- [ ] **Test core functionality** - RAB calculations work correctly
- [ ] **Check responsive design** - Works on mobile/desktop
- [ ] **Verify export feature** - Excel export functions properly
- [ ] **Test browser compatibility** - Chrome, Firefox, Safari, Edge

### Manual Testing Checklist
- [ ] Project CRUD operations (Create, Read, Update, Delete)
- [ ] RAB calculations and terbilang conversion
- [ ] Excel export with proper formatting
- [ ] Responsive layout on different screen sizes
- [ ] Toast notifications display correctly
- [ ] LocalStorage persistence works

## 📦 Project Structure

```
RAB-GEN/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── ExcelWorkspace.jsx  # Main RAB interface
│   │   └── HeaderNew.jsx       # Navigation header
│   ├── globals.css         # Global styles
│   ├── layout.jsx          # Root layout
│   └── page.jsx            # Home page
├── public/                 # Static assets
├── docs/                   # Documentation (if needed)
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
├── CHANGELOG.md           # Version history
└── CONTRIBUTING.md        # This file
```

## 🎨 Design Guidelines

### Color Palette
```css
/* Primary Colors */
--gray-900: #111827;  /* Background dark */
--gray-800: #1f2937;  /* Container background */
--gray-700: #374151;  /* Border/divider */
--gray-300: #d1d5db;  /* Text light */
--white: #ffffff;     /* Text primary */

/* Accent Colors */
--blue-600: #2563eb;  /* Primary actions */
--green-600: #16a34a; /* Success states */
--red-600: #dc2626;   /* Error states */
```

### Typography
- **Headers**: Font weight 600-700
- **Body text**: Font weight 400
- **Interactive text**: Font weight 500
- **Font family**: Inter, sans-serif

### Spacing
- **Component padding**: 1rem (16px)
- **Element margin**: 0.5rem (8px)
- **Section spacing**: 1.5rem (24px)

## 🔧 Development Tools

### Required Extensions (VS Code)
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint

### Recommended Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

## 🚀 Performance Guidelines

### React Best Practices
- Use `useState` and `useEffect` appropriately
- Avoid unnecessary re-renders with `useMemo` when needed
- Keep components small and focused
- Use proper key props in lists

### CSS Optimization
- Prefer Tailwind utilities over custom CSS
- Use responsive design patterns
- Minimize use of `!important`
- Optimize for mobile-first

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Design References
- [Tailwind UI Components](https://tailwindui.com/)
- [Headless UI](https://headlessui.dev/)
- [Lucide Icons](https://lucide.dev/)

## 🏆 Recognition

Contributors will be recognized in:
- **README.md** - Contributors section
- **CHANGELOG.md** - Credit for significant features
- **GitHub Contributors** - Automatic recognition

### Hall of Fame
- [Bayani Adamsasaki](https://github.com/Bayaniadamsasaki) - Creator & Maintainer

## ❓ Questions?

- **Create an issue** for project-related questions
- **Check existing discussions** before asking
- **Be specific** about your question or problem

## 📄 License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

**Thank you for making RAB Generator better! 🚀**
