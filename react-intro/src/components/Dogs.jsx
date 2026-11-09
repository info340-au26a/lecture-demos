export function DogComponent(props) {
  console.log(props);
  const {name, isPuppy} = props; //shortcut destructuring

  let imageUrl;
  if(isPuppy) {
    imageUrl = "puppy.jpg";
  }
  else {
    imageUrl = "husky.jpg";
  }

  return (
    <figure>
      <img src={"img/"+imageUrl} alt="a cute puppy" />
      <caption>A dog named {name}</caption>
    </figure>
  )
}
