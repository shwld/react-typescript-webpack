/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
