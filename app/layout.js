import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'LaunchWeb Studio - Diseños Web Premium',
  description: 'Estudio de diseño web. Compra plantillas exclusivas para tu negocio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
