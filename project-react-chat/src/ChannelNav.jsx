function ChannelNav() {
  return (
    <nav
      className="channel-nav col-3 h-100 bg-secondary px-0 py-3"
      aria-label="Chat channels"
    >
      <h2 className="h6 text-white px-2">Channels</h2>
      <ul className="p-0">
        <li>
          <a href="chat-general.html" aria-current="page">
            # general
          </a>
        </li>
        <li>
          <a href="chat-social.html"># social</a>
        </li>
        <li>
          <a href="chat-random.html"># random</a>
        </li>
        <li>
          <a href="chat-birds.html"># birds</a>
        </li>
        <li>
          <a href="chat-dank-memes.html"># dank-memes</a>
        </li>
      </ul>
    </nav>
  );
}

export default ChannelNav;
