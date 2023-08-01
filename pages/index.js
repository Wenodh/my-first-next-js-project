import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
export default function Home() {
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Hello, I'm <strong>Wenodh</strong> a professional front end
            developer.This is my first next.js project. Hope you like this. You
            can contact me on <a href="https://github.com/wenodh">Github</a>.
          </p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
          <p>
            Read <Link href="/posts/first-post">this Post!</Link>
          </p>
        </section>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Wenodh
          </a>
        </footer>
      </div>
    </Layout>
  );
}
