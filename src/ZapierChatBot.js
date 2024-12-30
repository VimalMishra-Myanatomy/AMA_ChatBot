import React, { useEffect } from "react";

const ZapierChatbotPopup = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    script.async = true;
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <zapier-interfaces-chatbot-embed
      is-popup="true"
      chatbot-id="cm5ar7z0e000sttbf31e4qtug"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "9999",
      }}
    ></zapier-interfaces-chatbot-embed>
  );
};

export default ZapierChatbotPopup;
