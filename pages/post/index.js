import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import HeaderComponent from "../../components/header";
import FooterComponent from "../../components/footer";
import BodyComponent from "../../components/body";

export default function index({ textProp }) {
  return (
    <div className={styles.container}>
      <div className={styles.main_container}>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </div>
    </div>
  );
}
