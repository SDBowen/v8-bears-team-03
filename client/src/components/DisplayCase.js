import React from "react";
import RatingStars from "./RatingStars";

function DisplayCase(props) {
  let drink = props.displayCaseBeverage;
  const imagePrefix =
    "https://res.cloudinary.com/devbev/image/upload/c_scale,w_300/";

  let drinkTypeInfo;
  switch (drink.type) {
    case "beer":
      drinkTypeInfo = (
        <div>
          <h4>Style:</h4>
          <p>{drink.style}</p>
          <h4>Source:</h4>
          <p>{drink.source}</p>
        </div>
      );
      break;
    case "coffee":
      drinkTypeInfo = (
        <div>
          <h4>Bean Type:</h4>
          <p>{drink.beanType}</p>
          <h4>Brew Time:</h4>
          <p>{drink.brewTime}</p>
          <h4>Strength:</h4>
          <p>{drink.strength}</p>
        </div>
      );
      break;
    case "tea":
      drinkTypeInfo = (
        <div>
          <h4>Leaf Type:</h4>
          <p>{drink.leafType}</p>
          <h4>Steep Time: </h4>
          <p>{drink.steepTime}</p>
        </div>
      );
      break;
    case "liquor":
      drinkTypeInfo = (
        <div>
          <h4>Type:</h4>
          <p>{drink.type}</p>
        </div>
      );
      break;
    default:
      drinkTypeInfo = "";
  }

  return (
    <section id="display-case">
      <div id="DisplayCase">
        <div className="display-case-box">
          <picture>
            <source
              srcSet={imagePrefix + drink.image + ".webp"}
              type="image/webp"
            />
            <source
              srcSet={imagePrefix + drink.image + ".png"}
              type="image/png"
            />
            <img
              id="display-case-image"
              src={imagePrefix + drink.image + ".png"}
              alt={drink.name}
            />
          </picture>
          <div className="display-case-info">
            <h3>{drink.name}</h3>
            <div>{drinkTypeInfo}</div>

            <h4>Tasting Notes:</h4>
            <p>{drink.tastingNotes}</p>
            <p>{drink._id}</p>

            <h4>Comments:</h4>
            <p>{drink.comments}</p>

            <RatingStars rating={drink.rating} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DisplayCase;
