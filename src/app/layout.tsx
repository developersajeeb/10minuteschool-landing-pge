import type { Metadata } from "next";
import "./globals.css";
import "../styles/app.scss";
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export const metadata: Metadata = {
  title: "Complete IIELTS Course in Bangladesh - Munzereen Shahid [2025]",
  description: "Complete IIELTS Course in Bangladesh",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  );
}