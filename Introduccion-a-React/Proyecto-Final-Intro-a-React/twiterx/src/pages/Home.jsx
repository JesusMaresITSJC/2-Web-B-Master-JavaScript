import { useState } from "react";
import { Link } from "react-router-dom";

function Home({
  user,
  logout,
  tweets,
  setTweets
}) {

  const [tweet, setTweet] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!tweet.trim()) return;

    const newTweet = {
      id: Date.now(),
      username: user.username,
      content: tweet
    };

    const updatedTweets = [
      newTweet,
      ...tweets
    ];

    setTweets(updatedTweets);

    localStorage.setItem(
      "tweets",
      JSON.stringify(updatedTweets)
    );

    setTweet("");
  };

  return (
    <div className="container">

      <h1>🐧 TwitterX</h1>

      <h2>
        Hola {user.username}
      </h2>

      <Link
        to="/profile"
        className="link-btn profile-btn"
      >
        Mi Perfil
      </Link>

      <button
        onClick={logout}
        className="logout-btn"
      >
        Salir
      </button>

      <form
        onSubmit={handleSubmit}
        className="tweet-form"
      >

        <textarea
          placeholder="¿Qué está pasando?"
          value={tweet}
          onChange={(e)=>
            setTweet(e.target.value)
          }
        />

        <button type="submit">
          Publicar
        </button>

      </form>

      <div className="timeline">

        {tweets.map((tweet) => (

          <div
            key={tweet.id}
            className="tweet-card"
          >

            <div className="tweet-header">

              <span className="avatar">
                🐧
              </span>

              <strong>
                @{tweet.username}
              </strong>

            </div>

            <p>{tweet.content}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;