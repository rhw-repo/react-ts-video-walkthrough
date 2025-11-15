import styles from "./Footer.module.css";
import type { NavLink } from "../../config/links";
import { NAV_LINKS } from "../../config/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const footerLinks: NavLink[] = NAV_LINKS.filter((link) =>
    ["footer-github", "footer-linkedin"].includes(link.id ?? "")
  );

  const renderedFooterLinks = footerLinks.map((link) => {
    const linkAttributes = link.external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    const icon =
      link.id === "footer-github"
        ? faGithub
        : link.id === "footer-linkedin"
        ? faLinkedin
        : null;

    return (
      <li key={link.id || link.url}>
        <a href={link.url} {...linkAttributes}>
          {icon && <FontAwesomeIcon icon={icon} className={styles.icon}/>}
          {link.label}
        </a>
      </li>
    );
  });

  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.footerLinks}>{renderedFooterLinks}</ul>
      </footer>
    </>
  );
};

export default Footer;
