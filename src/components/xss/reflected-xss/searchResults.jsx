import React, { useState } from "react";

const SearchResults = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("query"); // ❌ Potential XSS

  return (
    <div>
      <h2>Search Results for:</h2>
      <p dangerouslySetInnerHTML={{ __html: searchQuery }} />{" "}
      {/* ❌ XSS risk  */}
      {/* http://localhost:3000?query=<script>alert('Hacked!')</script> */}
    </div>
  );
};

export default SearchResults;
