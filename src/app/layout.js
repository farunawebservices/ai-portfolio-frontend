import ChatWidget from '../components/ChatWidget.jsx';
import Navigation from '../components/Navigation.jsx';
import './globals.css';

export const metadata = {
  title: 'Godwin Portfolio',
  description: 'AI Engineer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
