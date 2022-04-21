import "./LinksContainer.css";

const Link = ({ icon, text, link }) => (
  <a className="Link" href={link}>
    <img src={icon} alt={link} />
    <p>{text}</p>
  </a>
)

export default Link;