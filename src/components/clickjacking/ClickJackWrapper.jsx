import { useEffect } from "react";

const ClickjackProtection = () => {
  useEffect(() => {
    // OR window.top.location !== window.self.location
    if (window.self !== window.top) {
      document.body.innerHTML = ""; // Remove content if in an iframe
    }
  }, []);

  return <div>Secure Content</div>;
};

export default ClickjackProtection;
