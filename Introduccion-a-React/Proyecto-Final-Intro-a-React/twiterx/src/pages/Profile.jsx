import { Link } from "react-router-dom";

function Profile({
  user,
  tweets,
  setTweets
}) {

  const userTweets = tweets.filter(
    tweet =>
      tweet.username === user.username
  );

  const deleteTweet = (id) => {

    const updatedTweets =
      tweets.filter(
        tweet => tweet.id !== id
      );

    setTweets(updatedTweets);

    localStorage.setItem(
      "tweets",
      JSON.stringify(updatedTweets)
    );
  };

  return (
    <div className="container">

      <div
        style={{
          fontSize:"100px",
          marginBottom:"15px"
        }}
      >
        🐧
      </div>

      <h1>Perfil</h1>

      <h2>{user.username}</h2>

      <p>
        Explorador oficial de TwitterX
      </p>

      <p>
        Tweets publicados:
        <strong>
          {" "}
          {userTweets.length}
        </strong>
      </p>

      <h3
        style={{
          marginTop:"20px",
          marginBottom:"20px"
        }}
      >
        Mis Tweets
      </h3>

      {userTweets.length === 0 ? (

        <p>
          No has publicado nada aún.
        </p>

      ) : (

        userTweets.map((tweet) => (

          <div
            key={tweet.id}
            className="tweet-card"
            style={{
              marginBottom:"15px"
            }}
          >

            <p>
              {tweet.content}
            </p>

            <button
              className="delete-btn"
              onClick={() =>
                deleteTweet(tweet.id)
              }
            >
              🗑 Eliminar
            </button>

          </div>

        ))
      )}

      <br />

      <Link
        to="/"
        className="link-btn home-btn"
      >
        Volver al Inicio
      </Link>

    </div>
  );
}

export default Profile;