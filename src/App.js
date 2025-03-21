import "./styles.css";
import Comments from "./components/xss/stored-xss/Comments";
import SearchResults from "./components/xss/reflected-xss/searchResults";

export default function App() {
  console.log("Window chk:", window.self.location, window.top.location);
  return (
    <div className="App">
      <h1>Web Security Practises</h1>
      {/* Persistent XSS */}
      <Comments />
      {/* ReflectedXSS */}
      <SearchResults />
    </div>
  );
}
