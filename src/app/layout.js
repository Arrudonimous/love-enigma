import "./globals.css";

export const metadata = {
  title: "Enigma de amor",
  description: "Eu te vivo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="h-[100vh] bg-[#0E0E12] text-[#F8F9FA] p-8 flex flex-col">
        {children}
      </body>
    </html>
  );
}
