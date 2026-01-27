import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ChatLauncher from "./components/chat/ChatLauncher";

export const metadata = {
  title: "Automatizaciones Praxis",
  description: "Automatización, IA y soluciones digitales para negocios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <ChatLauncher />
        <Footer />
      </body>
    </html>
  );
}
