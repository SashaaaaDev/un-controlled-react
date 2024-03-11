import React, {useState, useEffect} from "react";

const ControlledComponent = () => {
  const [text, setText] = useState('');
  const [user, setUser] = useState(null);

  const handleForm = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/10  ')
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
  },[]);

  return(
    <>
    <form action="">
        <p>Your typed text: {text}</p>
        <input type="text" placeholder={text} onChange={handleForm} />
    </form>

    {/*useEffect*/}
    <div className="userData">
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
    </>
  )
}

export default ControlledComponent