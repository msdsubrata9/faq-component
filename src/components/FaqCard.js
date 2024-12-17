import React, { useState } from "react";

function FaqCard({ faq, isOpenByDefault }) {
  const [showCard, setShowCard] = useState(isOpenByDefault || false);

  function handleClick() {
    setShowCard(!showCard);
  }
  return (
    <div className="bg-green-500 m-4 p-4 text-center">
      <div className="cursor-pointer" onClick={handleClick}>
        <span className="text-4xl text-black m-2">
          {showCard ? "🔽" : "▶️"}
        </span>
        <span className="text-3xl text-red-500">{faq.question}</span>
      </div>
      {showCard && <div className="text-2xl text-blue-500">{faq.answer}</div>}
    </div>
  );
}

export default FaqCard;
