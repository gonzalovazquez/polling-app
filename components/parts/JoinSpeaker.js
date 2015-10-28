var React = require('react');

var JoinSpeaker = React.createClass({
  start() {
    var speakerName = React.findDOMNode(this.refs.name).value;
    var title = React.findDOMNode(this.refs.title).value;
    console.log({ name: speakerName, title: title });
    this.props.emit('start', { title: title, name: speakerName });
  },
  render() {
    return(
      <form action="javascript:void(0)" onSubmit={this.start}>
        <label>Full Name</label>
        <input ref="name"
              className="form-control"
              placeholder="enter your full name..."
              required />

          <label>Presentation Title</label>
          <input ref="title"
                className="form-control"
                placeholder="enter a title for this presentation"
                required />

        <button className="btn btn-primary">Join</button>
      </form>
    );
  }
});

module.exports = JoinSpeaker;
