// app/layout.js
'use client';
import { usePathname } from 'next/navigation';
import { BasketProvider } from './components/BasketContext';
import { AuthProvider } from './components/AuthContext';
import { ModalProvider } from './components/ModalContext';
import ModalManager from './components/ModalManager';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import WalletButton from './components/WalletButton';
import AuthTestComponent from './components/AuthTestComponent';
import "./globals.css";

export default function RootLayout({ children }) {
	const pathname = usePathname();
	return (
		<html lang="fa" dir="rtl">
			<AuthProvider>
				<BasketProvider>
					<ModalProvider>
						<body className="bg-gray-200 min-h-screen">
							<AuthTestComponent /> {/* فقط برای تست - بعداً حذف کنید */}
							{pathname.startsWith('/dashboards') || pathname.startsWith('/login') || pathname.startsWith('/signup') ? (
								children
							) : (
								<>
									<Header />
									<Navbar />
									{children}
									<ModalManager />
									<WalletButton />
									<Footer />
								</>
							)}

						</body>
					</ModalProvider>
				</BasketProvider>
			</AuthProvider>
		</html>
	);
}