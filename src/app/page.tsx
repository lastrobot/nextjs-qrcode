import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     

      <div className={styles.card}>
        <div className={styles.qrWrapper}>
          <Image
            className={styles.qrcode}
            src="/qr-code.svg"
            alt="QR code"
            width={160}
            height={160}
            priority
          />
        </div>
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
      </div>

    </main>
  );
}
