import firebase from './firebase';
import { useState, useEffect } from 'react';

// to access our database, we must import the corresponding firebase modules
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';

function App() {
  const [books, setBooks] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Check if render is in the initial render
  useEffect( () => {
    // create a variable that holds our database details
    const database = getDatabase(firebase);
    // we then create a variable that makes a reference to our database
    const dbRef = ref(database);
    // add an event listener to the variable that will fire from the database, naming the data we get back "response"
    onValue(dbRef, (response) => {
      // create a variable to store the new state to our app
      const newState = [];

      // store the response values from our onValue return
        // .val() is a Firebase method that parses the response values into the way we like it
      const data = response.val();

      // push each book title to our new state array
      for (let key in data) {
        // inside our loop we will push each book title into the newState array
        newState.push({key: key, name: data[key]});
      }

      // call setBooks and update our state to be the new array
      setBooks(newState);

    })

  }, []);

  // this event will fire every time there is a change to the value of an input it is attached to
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  // this event will fire when the user clicks the Add Book button
  const handleSubmit = (event) => {
    // event.preventDefault stops the default action of refreshing the page
    event.preventDefault();
    // create a reference to out database
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    // push the value of 'userInput' to the database
    push(dbRef, userInput);

    // reset the state to an empty string
    setUserInput('');
  }

  const handleRemoveBook = (bookId) => {
    // create a reference to the database
    const database = getDatabase(firebase);
    // instead of pointing to the WHOLE database, we're going to point to a specific node of the book we want to remove
    const dbRef = ref(database, `/${bookId}`);
    // using the remove() method we will remove the specific node we have created a reference to.
    remove(dbRef);
  }

  return (
    <div>
      <form action="submit">
       <label htmlFor="newBook">Add a book to your bookshelf</label>
       <input 
        type="text" 
        id="newBook" 
        onChange={handleInputChange}
        value={userInput}
      />
       <button onClick={handleSubmit}>Add Book</button>
     </form>
      <ul>
        {
          // Loop over our "books" state to return an LI for each one, putting it on the page.
          books.map( (book) => {
            return (
              <li key={book.key}>
                <p>{book.name}</p>
                <button onClick={() => handleRemoveBook(book.key)}>Remove Book</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
