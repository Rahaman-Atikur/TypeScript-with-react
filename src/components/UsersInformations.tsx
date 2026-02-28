// import React from 'react';
import React from "react";
type userInformationsProps = {
  user1: {
    name: string;
    age: number;
    isRegister: boolean;
    language: string[];
}
};

const UsersInformations = ({
  user
}: userInformationsProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{isRegister}</h3>
      <p>
        {language.map((lang) => (
          <h2>{lang}</h2>
        ))}
      </p>
    </div>
  );
};

export default UsersInformations;
