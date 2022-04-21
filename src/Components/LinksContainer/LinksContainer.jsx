import Link from "./Link";

import "./LinksContainer.css";

const LinksContainer = ({ links }) => (
  <div className="LinksContainer">
    {links.map(({ icon, text, link }) => (<Link icon={icon} text={text} link={link} />))}
  </div>
)

export default LinksContainer;