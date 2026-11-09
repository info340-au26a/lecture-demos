import ChatHeader from './ChatHeader';
import ChannelNav from './ChannelNav';
import MessagePane from './MessagePane';
import MessageForm from './MessageForm';

export function ChatPage() {
  const messages = [
    {
      avatar: 'img/Parrot.png',
      altText: 'Parrot avatar',
      username: 'Parrot',
      text: "I'm not a duck!",
      liked: true,
    },
    {
      avatar: 'img/Eagle.png',
      altText: 'Eagle avatar',
      username: 'Eagle',
      text: 'Lucky duck',
      liked: false,
    },
    {
      avatar: 'img/Parrot.png',
      altText: 'Parrot avatar',
      username: 'Parrot',
      text: "It's warm over here",
      liked: false,
    },
    {
      avatar: 'img/Penguin.png',
      altText: 'Penguin avatar',
      username: 'Penguin',
      text: "It's so cold out today!",
      liked: false,
    },
  ];

  return (
    <div className="container-fluid d-flex flex-column h-100">
      <ChatHeader />
      <main className="row flex-grow-1 overflow-hidden">
        <ChannelNav />
        <section className="col d-flex flex-column overflow-hidden">
          <h2># general</h2>
          <MessagePane messages={messages} />
          <MessageForm avatar="img/Parrot.png" altText="Parrot avatar" />
        </section>
      </main>
    </div>
  );
}

export default ChatPage;
