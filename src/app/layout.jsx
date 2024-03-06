import "./app.scss";
import "./globals.css";

export const metadata = {
  title: "Debashis Roy",
  description:
    "A personal website of Debashis Roy. A Web Developer from Bangladesh. A passionate Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
