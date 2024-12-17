import React from "react";
import { faqsList } from "../utils/constants";
import FaqCard from "./FaqCard";

function FaqContainer() {
  return (
    <div>
      {faqsList.map((faq, index) => (
        <FaqCard key={index} faq={faq} isOpenByDefault={index === 0} />
      ))}
    </div>
  );
}

export default FaqContainer;
