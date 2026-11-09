function ChatHeader() {
  return (
    <header className="text-light bg-primary px-1 d-flex flex-wrap justify-content-between align-items-center">
      <h1>React Chat - Live!</h1>
      <nav aria-label="Main navigation">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="chat-general.html" aria-current="page">
              Chat
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="profile.html"
              aria-label="Parrot profile"
            >
              <img src="img/Parrot.png" alt="Parrot avatar" />
            </a>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-secondary ms-2"
              type="button"
              disabled
            >
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ChatHeader;
