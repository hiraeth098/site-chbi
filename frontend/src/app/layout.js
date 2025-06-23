import './globals.css';
import Header from "@/components/Header/Header";

export const metadata = {
  title: 'CHBI - Handebol Itabuna',
  description: 'O site oficial do Clube de Handebol de Itabuna',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}