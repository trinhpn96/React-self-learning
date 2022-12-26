import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Videos = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate(); //function

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/video/${text}`);
  };
  // <Link> tag must go with "to"

  return (
    <>
      <div>This is Videos pages</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Video ID:"
          value={text}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Videos;
