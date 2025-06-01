// app/layout.js
import { BasketProvider } from './components/BasketContext';
import { AuthProvider } from './components/AuthContext';
import { ModalProvider } from './components/ModalContext';
import ModalManager from './components/ModalManager';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <AuthProvider>
        <BasketProvider>
          <ModalProvider>
            <body className="bg-gradient-to-bl from-cyan-100/50 to-gray-400 min-h-screen">
              {children}
              <ModalManager />
            </body>
          </ModalProvider>
        </BasketProvider>
      </AuthProvider>
    </html>
  );
}