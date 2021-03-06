import React, { useState } from "react";

function LiquorFormInputs() {
  const [style, setStyle] = useState();

  return (
    <div id="form-drink-specific-info">
      <label>
        Style:
        <input
          type="text"
          name="typeOfLiquor"
          value={style}
          placeholder="Bourbon"
          onChange={e => setStyle(e.target.value)}
        />
      </label>
    </div>
  );
}

export default LiquorFormInputs;
