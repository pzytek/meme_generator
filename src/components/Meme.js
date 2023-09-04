import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    upperText: "",
    lowerText: "",
    imageUrl: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  function getMeme(event) {
    const randNum = Math.floor(Math.random() * allMeme.length);
    const newUrl = allMeme[randNum].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        imageUrl: newUrl,
      };
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form__input"
          placeholder="Upper text"
          name="upperText"
          value={meme.upperText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Lower text"
          name="lowerText"
          value={meme.lowerText}
          onChange={handleChange}
        />
        <button type="submit" className="form__button" onClick={getMeme}>
          Get new meme
        </button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{meme.upperText}</h2>
        <h2 className="meme--text bottom">{meme.lowerText}</h2>
      </div>
    </main>
  );
}
