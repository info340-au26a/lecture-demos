import { DogComponent } from './Dogs.jsx';

export function MainContent(props) {
  const dayOfWeek = "Friday";

  return (
    <main>
      <p>It's {dayOfWeek.toUpperCase()}!</p>
      <p>Can't wait until the weekend! {1+1} days</p>
      <div className="flex-container">
        <DogComponent name="Fido" isPuppy={true} />
        <DogComponent name="Rover" isPuppy={false} />
        <DogComponent name="Buddy" isPuppy={true} />
      </div>      
    </main>
  )
}
