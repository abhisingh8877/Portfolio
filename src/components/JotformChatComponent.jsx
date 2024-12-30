import React, { useEffect } from 'react';

const JotformChatComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          rootId: "JotformAgent-019418b09b9a7ef5b40c7bbff27cb6f2139c",
          formID: "019418b09b9a7ef5b40c7bbff27cb6f2139c",
          queryParams: ["skipWelcome=1", "maximizable=1"],
          domain: "https://www.jotform.com",
          isInitialOpen: false,
          isDraggable: false,
          background: "linear-gradient(180deg, #C8CEED 0%, #C8CEED 100%)",
          buttonBackgroundColor: "#0a1551",
          buttonIconColor: "#fff",
          variant: false,
          customizations: {
            greeting: "Yes",
            greetingMessage: "Hi! How can I assist you?",
            pulse: "Yes",
            position: "right"
          }
        });
      }
    };

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      
      {/* You can optionally render some UI here */}
    </div>
  );
};

export default JotformChatComponent;
