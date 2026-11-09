function Message({ avatar, altText, username, text, liked }) {
  const heartClass = liked ? 'text-danger' : 'text-secondary';
  const heartSymbol = liked ? '♥' : '♡';

  return (
    <article className="message d-flex mb-3">
      <img className="me-2" src={avatar} alt={altText} />
      <div>
        <p className="user-name">{username}</p>
        <p>{text}</p>
        <span className={heartClass} aria-label={liked ? 'Liked' : 'Like'}>
          {heartSymbol}
        </span>
      </div>
    </article>
  );
}

export default Message;
