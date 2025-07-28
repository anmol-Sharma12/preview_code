import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [html, setHtml] = useState('<h1>Hello World</h1>');
  const [css, setCss] = useState('h1 { color: blue; }');
  const [js, setJs] = useState('console.log("JS loaded")');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head><style>${css}</style></head>
          <body>
            ${html}
            <script>${js}<\/script>
          </body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="container">
      <div className="pane top-pane">
        <div>
          <h3>HTML</h3>
          <textarea value={html} onChange={(e) => setHtml(e.target.value)} />
        </div>
        <div>
          <h3>CSS</h3>
          <textarea value={css} onChange={(e) => setCss(e.target.value)} />
        </div>
        <div>
          <h3>JS</h3>
          <textarea value={js} onChange={(e) => setJs(e.target.value)} />
        </div>
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="Live Preview"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
