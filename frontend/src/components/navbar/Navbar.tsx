import styles from "./Navbar.module.css";
import type { NavLink } from "../../config/links";
import { NAV_LINKS } from "../../config/links";

const Navbar = () => {
  const primaryLink: NavLink | undefined = NAV_LINKS.find(
    (link) => link.id === "navbar-live-app"
  );

  const linkAttributes = primaryLink?.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarItem}>Video Walkthrough</div>
        <ul className={styles.navbarLinks}>
          {primaryLink && (
            <li key={primaryLink.url}>
              <a href={primaryLink.url} {...linkAttributes}>
                {primaryLink.label}
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
