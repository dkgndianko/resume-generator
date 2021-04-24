import React, { ChangeEvent } from 'react';
import {Remarkable} from 'remarkable'

class MarkdownEditor extends React.Component {
  md: Remarkable;
  state: {value: string};
  constructor(props: any) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ value: e.target!.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className='MarkdownEditor'>
        <h3>Input</h3>
        <label htmlFor='markdown-content'>Enter some markdown</label>
        <textarea
          id='markdown-content'
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className='content'
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

export default MarkdownEditor;
