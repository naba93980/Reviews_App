import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nxtPerson = () => {
    setIndex((index) => {
      if (index === people.length - 1) return 0;
      else return index + 1;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      if (index === 0) return people.length - 1;
      else return index - 1;
    });
  };

  const randomPerson = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * people.length);
      if (newIndex === index) {
        if (newIndex === people.length - 1) return 0;
        else return index + 1;
      } else return newIndex;
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container" onClick={prevPerson}>
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nxtPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};
export default Review;
