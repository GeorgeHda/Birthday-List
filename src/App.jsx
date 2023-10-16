import React, { useState } from "react";
import data from "./data";
import { List } from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  const [newPerson, setNewPerson] = useState({
    name: "",
    age: "",
    picture: null,
  });
  const [showInputFields, setShowInputFields] = useState(false);

  const addNewBirthday = () => {
    if (newPerson.name && newPerson.age) {
      // Create a new person object
      const newBirthday = {
        name: newPerson.name,
        age: newPerson.age,
        picture: newPerson.picture,
      };

      // Update the state with the new person
      setPeople([...people, newBirthday]);

      // Clear the input fields and uploaded picture
      setNewPerson({ name: "", age: "", picture: null });
    }
  };

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    setNewPerson({ ...newPerson, picture: file });
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays Today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
        <div className="button-container">
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setShowInputFields(!showInputFields)}
          >
            {showInputFields ? "Hide" : "Add a new Birthday"}
          </button>
          {showInputFields && (
            <div className="input-container">
              <input
                type="text"
                placeholder="Name"
                value={newPerson.name}
                onChange={(e) =>
                  setNewPerson({ ...newPerson, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Age"
                value={newPerson.age}
                onChange={(e) =>
                  setNewPerson({ ...newPerson, age: e.target.value })
                }
              />
            </div>
          )}
        </div>
        {showInputFields && (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureUpload}
            />
            <button
              type="button"
              className="btn btn-block"
              onClick={addNewBirthday}
            >
              Add a new Birthday
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
