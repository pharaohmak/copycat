import React from 'react';
import CopyCat from '../components/CopyCat';

export class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copying: true,
      input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }

  handleChange(e) {
    console.log(e.target);
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <CopyCat
        copying={this.state.copying}
        toggleTape={this.toggleTape}
        handleChange={this.handleChange}
        input={this.state.input}
        name={this.props.name} // Optional: Pass name prop if needed
      />
    );
  }
}