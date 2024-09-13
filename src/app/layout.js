import styles from "./page.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        {children}
      </body>
    </html>
  );
}
