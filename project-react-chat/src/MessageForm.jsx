function MessageForm({ avatar, altText }) {
  return (
    <div className="input-group my-2" aria-label="Message composer example">
      <img src={avatar} alt={altText} />
      <textarea
        className="form-control"
        rows="2"
        aria-label="Example message"
        placeholder="Type a new message"
      />
      <button
        className="btn btn-secondary"
        type="button"
        disabled
        aria-label="Send message"
      >
        ➤
      </button>
    </div>
  );
}

export default MessageForm;
