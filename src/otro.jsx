import PropsTypes from "prop-types";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const elementList = [
  {
    id: 1,
    name: "Elide",
    age: 30,
    country: "Mexico",
  },
  {
    id: 2,
    name: "Maria",
    age: 25,
    country: "Venezuela",
  },
];

// eslint-disable-next-line react/prop-types
export const Otro = ({ title, subtitule, name }) => {
  if (!title) {
    throw new Error("El titulo es necesario");
  }

  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h3>{name}</h3>
      <p>{subtitule}</p>
      <p>{subtitule}</p>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {elementList.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.country}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

Otro.propTypes = {
  title: PropsTypes.string.isRequired,
  subtitule: PropsTypes.string,
  name: PropsTypes.string,
};

Otro.defaultProps = {
  title: "",
  subtitule: "No tenemos nigun subtitulo",
  name: "Elide Zavala Vinagre",
};
