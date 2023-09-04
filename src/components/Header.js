import meme from "../images/meme.png";

export default function Header() {
  return (
    <nav className="nav">
      <img src={meme} alt="nav logo" className="nav__logo" />
      <h1 className="nav__header">Generate your meme</h1>
    </nav>
  );
}
