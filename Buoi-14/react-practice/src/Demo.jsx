import { useEffect, useState } from "react";

const AgeComponent = ({ age }) => {
  const increaseAge = () => {
    age = age + 1;
  };

  return (
    <p>
      <span>Age:{age}</span>
      <span> </span>
      <button onClick={increaseAge}>+++++</button>
    </p>
  );
};

const Profile = ({ name, age, gender, school = "HCMUS" }) => {
  const [newAge, setNewAge] = useState(age);

  const increaseAge = () => {
    setNewAge(newAge + 1);
  };

  return (
    <div>
      <p>{name}</p>
      <AgeComponent age={newAge} />
      <button onClick={increaseAge}>IncAge</button>
      <p>{gender}</p>
      <p>{school}</p>
    </div>
  );
};

export default function Demo() {
  return (
    <div>
      <Profile name="Thien" age={30} gender="Male" school="FTU" />
    </div>
  );
}
