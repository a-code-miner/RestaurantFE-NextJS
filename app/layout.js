import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gradient-to-bl from-cyan-100/50 to-gray-400 min-h-screen">
        {children}
      </body>
    </html>
  );
}
