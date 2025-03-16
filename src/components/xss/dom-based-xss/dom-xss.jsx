import React, { useEffect } from "react";

const DOMXSS = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    document.getElementById("output").innerHTML = hash; // ❌ XSS risk
    // http://localhost:3000#<script>alert('Hacked!')</script>
  }, []);

  return (
    <div>
      <h2>DOM-Based XSS</h2>
      <div id="output"></div>
    </div>
  );
};

export default DOMXSS;
