# PersonalFit AI App

A React Native mobile application for personal fitness tracking and AI-powered workout recommendations.

## 🚀 Technologies Used

- **React Native**: 0.76.7
- **Expo**: 52.0.37
- **React**: 18.3.1
- **TypeScript**
- **State Management**:
  - Zustand
  - React Query (TanStack Query)
- **UI/UX**:
  - NativeWind (TailwindCSS)
  - React Native Reanimated
  - Lottie React Native
- **Storage**:
  - MMKV
- **Networking**:
  - Axios
  - @react-native-community/netinfo
- **Internationalization**:
  - i18next
  - react-i18next
- **Testing**:
  - @testing-library/react-native

## 📦 Installation

⚠️ Note: This project requires **Node.js 18** or later. Please ensure you have the correct version installed before proceeding.

### 1. Clone the repository

```sh
git clone git@github.com:perryhoang2012/personalfit-ai-app.git
cd personalfit-ai-app
```

### 2. Install dependencies

```sh
yarn
```

## ▶️ Run the Application

### 1. Start the development server

```sh
yarn start
```

### 2. Run on iOS

```sh
yarn ios
```

### 3. Run on Android

```sh
yarn android
```

## 🛠 Project Structure

```
personalfit-ai-app/
├── app/                    # Main application code
│   ├── (tabs)/            # Tab-based navigation screens
│   └── _layout.tsx        # Root layout configuration
├── assets/                # Static assets (images, fonts, etc.)
├── components/            # Reusable components
├── constants/             # App constants and configuration
├── hooks/                 # Custom React hooks
├── services/             # API services and external integrations
├── store/                # Zustand stores
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## 🧪 Testing

```sh
yarn test
```

## 📝 Key Features

- **Global Loading State**: Custom hook `useQueryWithLoading` for managing loading states across API calls
- **Network Status**: Real-time network connectivity monitoring
- **Internationalization**: Multi-language support
- **Offline Storage**: Efficient data persistence with MMKV
- **Modern UI**: Built with NativeWind for responsive and beautiful interfaces
- **Type Safety**: Full TypeScript support

## 🔧 Development Guidelines

1. **State Management**:

   - Use Zustand for global state
   - Use React Query for server state
   - Use local state for component-specific state

2. **API Calls**:

   - Use `useQueryWithLoading` hook for automatic loading state management
   - Implement error handling in API services
   - Use TypeScript interfaces for API responses

3. **Styling**:
   - Use NativeWind classes for styling
   - Follow the design system in `constants/Colors.ts`
   - Use responsive units for cross-platform compatibility

## 📱 Supported Platforms

- iOS 13.0+
- Android 9.0+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💡 Support

If you have any questions or need support, feel free to:

- Open an issue on GitHub
- Contact the maintainers
- Check the documentation
