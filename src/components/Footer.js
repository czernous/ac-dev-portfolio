import { Github, Behance, Linkedin } from './Icons';
const Footer = () => {
  const date = new Date();
  const template = `
    <div class="footer">
    <ul class="social">
  <li>
    <a
      rel="noopener"
      target="_blank"
      class="icon"
      href="https://github.com/czernous"
    >
    ${Github()}
    </a>
  </li>
  <li>
  <a
    rel="noopener"
    target="_blank"
    class="icon"
    href="https://www.behance.net/antonchernous"
  >
  ${Behance()}
  </a>
</li>
  <li>
  <a
    rel="noopener"
    target="_blank"
    class="icon"
    href="https://www.linkedin.com/in/anton-chernous-42309525/"
  >
  ${Linkedin()}
  </a>
</li>
    </ul>
    <span class="copyright">&copy${date.getFullYear()}</span>
    </div>
  `;
  return template;
};
export default Footer;
