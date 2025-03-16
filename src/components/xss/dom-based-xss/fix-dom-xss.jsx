import React, { useEffect } from "react";

const DOMXSS = () => {
  //   useEffect(() => {
  //     const hash = window.location.hash.substring(1);
  //     document.getElementById("output").innerHTML = hash; // ❌ XSS risk
  //   }, []);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    document.getElementById("output").textContent = hash; // ✅ Safe!
  }, []);

  return (
    <div>
      <h2>DOM-Based XSS</h2>
      <div id="output"></div>
    </div>
  );
};

export default DOMXSS;
