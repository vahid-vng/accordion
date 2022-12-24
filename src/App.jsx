import React, { useState } from "react";

import Question from "./Question";
import data from "./data";

export default function App() {
  const [datas, setDatas] = useState(data);

  return (
    <div className="container">
      <h3>سوالی برایتان پیش آمده؟</h3>
      <div className="info">
        {datas.map((data) => (
          <Question {...data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
