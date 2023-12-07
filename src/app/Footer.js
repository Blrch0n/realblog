import styles from "@/app/page.module.css";
export const Footer = () => {
  return (
    <div id={styles.lastpart}>
      <div id={styles.footer}>
        <div className={styles.footer_child}>
          <div className={styles.grid1}>
            <h2 className="font-bold mb-4">About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-4">Email : info@jstemplate.net</p>
            <p className="mt-2">Phone : 880 123 456 789</p>
          </div>
          <div className={styles.grid2}>
            <div>
              <p>Home</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>
          <img src="Socials.svg" />
        </div>{" "}
        <div className="flex  relative items-center mt-16">
          <img src="Logo.svg" />

          <div className="flex absolute right-0 gap-5">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
