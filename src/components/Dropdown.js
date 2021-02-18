import React, { Component } from 'react';
import data from '../provinces.json';
import {classnames} from 'tailwindcss-classnames';

class Dropdown extends Component {
  constructor(props) {
    super();
  }
  state = {
    selectedValue: "NONE",
    data: data
  };

  handleSelectValue = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    console.log("You have submitted:", this.state.selectedValue);
  };

  render() {
    return (
      <div className={classnames(`max-w-xs rounded-xl overflow-hidden bg-${this.props.bgColor} my-6 mx-2  shadow-${this.props.shadow} transform -skew-x-3`)}>
        <div>
          <div className="px-6 py-4">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="paymentMethod">Provinces</label>
                <select
                  value={this.state.selectedValue}
                  onChange={this.handleSelectValue}
                  className="rounded-full bg-gray-200"
                  id="provinces"
                >
                  {data.map(item => (
                    <option className="bg-white"
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="bg-cyan-500 rounded-md font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-emerald-600 mr-6"
                disabled={this.state.selectedValue === "NONE"}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Dropdown;
