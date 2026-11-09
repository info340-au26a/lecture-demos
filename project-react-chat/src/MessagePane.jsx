import Message from './Message';

function MessagePane(props) {
  const { messages } = props;

  //[{},{},{}] => [<>,<>,<>]

  const messageElemArray = messages.map((message, index) => {
      return (<Message
        key={index}
        avatar={message.avatar}
        altText={message.altText}
        username={message.username}
        text={message.text}
        liked={message.liked}
      />
    )
  })

  return (
    <div className="scrollable-pane pt-2 my-2">
      {messageElemArray}
    </div>
  );
}

export default MessagePane;
