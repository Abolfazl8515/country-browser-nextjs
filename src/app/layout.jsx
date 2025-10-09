import { DarkModeProvider } from "@/providers/DarkModeProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";

export const metadata = {
  title: "Countries information",
  description: "a website to browse all countries information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
