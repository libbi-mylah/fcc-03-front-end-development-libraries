const initialText = `# Welcome!
---

## This is my React Markdown Previewer!
---
### Here are some fun things you can do with code:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

Some text attributes: *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ , [links](https://www.freecodecamp.org), and 
> Block Quotes

Bulleted Lists:

  * Pool
  * Snooker
  * 3 Cushion

Numbered list:

  1. Predator
  2. Cuetec
  3. Meucci

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

Coded by [**Libbi Damian**](https://codepen.io/Libbi-Mylah/pens/showcase), 2022 for [freeCodeCamp](https://www.freecodecamp.org)`;

marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: initialText,
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const markdown = marked(this.state.text);
    return (
      <React.Fragment>
        <h1 className="text-center p-3 text-light">React Markdown Previewer</h1>

        <div id="wrapper">
          <div className="row row-grid">
            <div className="col-md-6">
              <div id="leftPanel" className="col-md-12">
                <h4 className="panelTitle">Editor</h4>
                <textarea
                  id="editor"
                  className="form-control"
                  value={this.state.text}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div id="rightPanel" className="col-md-12">
                <h4 className="panelTitle">Preview</h4>
                <div
                  id="preview"
                  dangerouslySetInnerHTML={{ __html: markdown }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));