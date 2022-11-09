const handleJsonWebToken = (user) => {
  const jwt = async () => {
    const response = await fetch(
      "https://travelin-server.vercel.app/api/v1/user",
      {
        method: "POST",
        body: JSON.stringify({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    return await response.json();
  };

  jwt().then((token) => {
    localStorage.setItem("token", JSON.stringify(token.token));
  });
};

export default handleJsonWebToken;
