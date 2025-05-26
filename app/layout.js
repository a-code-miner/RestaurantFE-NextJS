import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
