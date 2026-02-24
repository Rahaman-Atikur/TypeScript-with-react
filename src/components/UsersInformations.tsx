// import React from 'react';
import React from "react";
type userInformationsProps = { name: string; age: number; isRegister: boolean };

const UsersInformations = ({ name, age , isRegister }: userInformationsProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{isRegister}</h3>
    </div>
  );
};

export default UsersInformations;
