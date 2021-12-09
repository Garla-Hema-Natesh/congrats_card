const element = (
  <div className="card">
    <h1 className="greeting">Congratulations</h1>
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-images"
      />
      <h1 className="profile-text">Kiran V</h1>
      <p className="profile-text">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="profile-images"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
