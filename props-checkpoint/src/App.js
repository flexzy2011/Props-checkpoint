import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const handleName = (name) => alert(name);

  return (
    <div className="App">
      <div
        style={{
          maxWidth: "55%",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <Profile
          fullName={"Felix Akinloye"}
          bio="A Frontend Developer with experience in Javascript, React, HTML, CSS, DOM, GIT and GitHub."
          profession={"Frontend Developer"}
          handleName={handleName}
        >
          <img
            src="https://avatars.githubusercontent.com/u/112817528?v=4"
            alt="flexzy"
            style={{ borderRadius: "15px", width: "300px" }}
          />
        </Profile>
      </div>
    </div>
  );
}

export default App;
