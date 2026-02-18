import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ChatLauncher from "./components/chat/ChatLauncher";
import BackgroundScene from "./components/background/BackgroundScene";

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
      <body className="antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <ChatLauncher />
        <Footer />
      </body>
      <BackgroundScene />
    </html>
  );
}
