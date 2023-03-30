import Image from "next/image";
import styles from "../../styles/Home.module.css";
import ComponentText from "../text/text.js";
export default function index() {
  const styleInfo = {
    marginTop: 5,
    fontSize: 14,
  };
  const infor = [
    {
      text: "29/02/2000",
      style: { ...styleInfo },
    },
    {
      text: "Số liên hệ: 0987565139",
      style: { ...styleInfo },
    },
    {
      text: "Gmail: hieu424122@gmail.com",
      style: { ...styleInfo },
    },
    {
      text: "Facebook: https://www.facebook.com/tranvanhieu.van",
      style: { ...styleInfo },
    },
  ];
  return (
    <header style={{ display: "flex" }}>
      <div style={{ flex: 1 }} className={styles.flex_justify_center}>
        <Image
          className={styles.radius_avatar}
          src="/img/50d0501203c0cf9e96d1.jpg"
          width={190}
          height={190}></Image>
      </div>
      <div style={{ flex: 2 }}>
        <div>
          <style jsx>{`
            h3,
            h2,
            p {
              margin: 0;
              margin-top: 4px;
              font-size: 18px;
            }
          `}</style>
          <p style={{ fontWeight: 500, fontSize: 30 }}>Trần Văn Hiếu</p>
          <p className={styles.color_cc3d30}>LẬP TRÌNH VIÊN WEB</p>
        </div>
        <div>
          <style jsx>{`
            p {
              font-size: 15px;
              font-weight: 400;
            }
          `}</style>
          <ComponentText data={infor} />
        </div>
      </div>
    </header>
  );
}
