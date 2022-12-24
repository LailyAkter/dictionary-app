import { useState } from "react";
import css from './Counter.module.css';

const Counter = () => {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);

  const countWord = (e) => {
    var length = e.target.value;
    var words = 0;
    for (var i = 0; i < length.length; i++) {
      if (length.charAt(i) === " " && length.charAt(i) !== "  ") {
        words++;
        console.log(words);
      }
    }
    setWord(words);
    console.log(words);
  };
  return (
    <>
      <div className={css.counter_comtainer}>
        <div className={css.numbers_holder}>
          <div className={css.counter_box}>
            <p>📝Word</p>
            <p>{text.length > 0 ? word : ""}</p>
          </div>

          <div className={css.counter_box}>
            <p>✍️Letter</p>
            <p>{text.length > 0 ? text.split(" ").join("").length : null}</p>
          </div>

          <div className={css.counter_box}>
            <p>📜Paragraph</p>
            <p>{text.length > 0 ? text.split(/\r\n|\r|\n/).length : " "}</p>
          </div>
        </div>

        <div className={css.text_box}>
          <textarea
            className={css.textarea}
            value={text}
            placeholder="Enter/Paste Your Text Here"
            onChange={(e) => {
              setText(e.target.value);
              countWord(e);
            }}
          />
        </div>

        <div className={css.button_box}>
          <button onClick={() => setText(text.toUpperCase())}>
            Click to Uppercase
          </button>
          <button style={{marginLeft:'20px'}} onClick={() => setText(text.toLowerCase())}>
            Click to Lowercase
          </button>
        </div>

        {text.length > 0 ? (
          <div className={css.preview}>
            <h4>Preview</h4>
            <p>{text}</p>
          </div>
        ) : (
          " "
        )}
      </div>
    </>
  );
};

export default Counter;
