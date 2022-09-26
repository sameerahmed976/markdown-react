import { useState } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
function App() {
  const [markdownText, setMarkdownText] = useState("# here is a markdown");

  const previewText = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className="app">
      <div className="markdown__container">
        <div className="text__area">
          <form onSubmit={(e) => e.preventDefault()}>
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="10"
              value={markdownText}
              onChange={(e) => previewText(e)}
            >
              This is a markdown image
            </textarea>
          </form>
        </div>
        <div className="markdown__preview">
          {/* {markdownText} */}
          <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </div>
  );
}

export default App;
