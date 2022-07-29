import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Logo from "../public/thebeerhouse_logo2.webp";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beer House</title>
        <meta name="description" content="BeerHouse（恵比寿＆渋谷）" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/thebeerhouse_logo2.webp" width={470} height={65} />
        <h1>Access</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.229445032455!2d139.7078890156114!3d35.646718239470594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4046e3f71d%3A0x85ab1d92ef294edf!2z5oG15q-U5a-_6aeF!5e0!3m2!1sja!2sjp!4v1659069477171!5m2!1sja!2sjp"
          width="250"
          height="250"
          style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </div>
  );
}
