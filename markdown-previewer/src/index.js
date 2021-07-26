import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked'
import './index.css'

const renderer = new marked.Renderer();

renderer.options.breaks= true;

let defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`< div ></div> \`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
class MarkdownPreview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: defaultText,
        };
        this.markdownUpdate = this.markdownUpdate.bind(this);
    }
    markdownUpdate = (updatedText) => this.setState({text: updatedText});
    render(){
        return(
        <div id="wrapper">
            <h2>Editor</h2>
            <textarea rows="10" id="editor" class="box-shadow" value={this.state.text} onChange={(e) => this.markdownUpdate(e.target.value)}/>
            <h2>Preview</h2>
                <div id="preview" class="box-shadow" dangerouslySetInnerHTML={{__html: marked(this.state.text, {renderer})}}></div>
        </div>
        );
    }
}
ReactDOM.render(<MarkdownPreview/>,document.getElementById('root'));
