import React from 'react';

export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  const partnerPhrase = isMarried
    ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married';

  return (
    <div className="Person">
      <h2 className="Person__name">{name}</h2>
      {age && <p className="Person__age">Age: {age}</p>}
      <p className="Person__partner">{partnerPhrase}</p>
    </div>
  );
};
