import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header-content">
        <h1 className="gradient_text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          GPT-3 is a language model with 175 billion parameters and trained on 8
          million web pages. It can generate text, write poems, create images,
          and even complete programming codes. It is the most powerful NLP model
          available today.
        </p>
        <div className="gpt3_header-content_input">
          <input type="email" placeholder="your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3_header-content_people">
          <img src={people} alt="people" />
          <p>
            100,000+ people have used GPT-3 to create something amazing.
          </p>
        </div>
      </div>
        <div className="gpt3_header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
