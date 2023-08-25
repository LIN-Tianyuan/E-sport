import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === "admin" && password === "password") {
      alert("Connexion réussie !");
      navigate("/", {state: {username}});
    } else {
      alert("La connexion a échoué, veuillez vérifier l'identifiant et le mot de passe.");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Identifiant:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
