function DessertsList(props) {
  // Implement the component here.
  const lowCalDess = props.data.filter((dessert) => {
    return dessert.calories < 500;
  })
    .sort((a, b) => {
      return a.dessert - b.dessert;
    })
    .map((dessert) => {
      return (
        <li>
          {dessert.name}-{dessert.calories} cal
        </li>
      );
    });

  return <ul>{lowCalDess}</ul>;
}

export default DessertsList;
