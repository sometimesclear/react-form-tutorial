import React, {Component} from 'react';
// 컴포넌트 안에 함수와 렌더가 다 들어가야함.
class Form extends Component {
  initialState = {
    name: '',
    job: '',
  };

  state = this.initialState


  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
      </form>
    );
  }
}
export default Form;