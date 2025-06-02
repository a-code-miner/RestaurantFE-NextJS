// app/layout.js
import { BasketProvider } from './components/BasketContext';
import { AuthProvider } from './components/AuthContext';
import { ModalProvider } from './components/ModalContext';
import ModalManager from './components/ModalManager';
import "./globals.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import WalletButton from './components/WalletButton';
import AuthTestComponent from './components/AuthTestComponent';

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <AuthProvider>
        <BasketProvider>
          <ModalProvider>
            <body className="bg-gradient-to-bl from-cyan-100/50 to-gray-400 min-h-screen">
              <AuthTestComponent /> {/* فقط برای تست - بعداً حذف کنید */}
              <Header />
              <Navbar />
              {children}
              <ModalManager />
              <WalletButton />
              <Footer />
            </body>
          </ModalProvider>
        </BasketProvider>
      </AuthProvider>
    </html>
  );
}