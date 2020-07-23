import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Regex from "./regex";
class Url extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInvalidUrl: false,
    };
  }
  /**
   * This method is used for handle input change
   * @param {*} event
   */
  handleInput(event) {
    this.setState(
      {
        isInvalidUrl: false,
      },
      () => {}
    );
    this.props.onChange(event, this.state.isInvalidUrl);
  }
  /**
   * This method is used for handle input focus
   * @param {*} event
   */
  handleFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }
  /**
   * This method is used for handle input blur
   * @param {*} event
   */
  handleBlur(event) {
    let isError = false;
    if (this.props.value !== "") {
      debugger;
      let regex = "";
      switch (this.props.urltype) {
        case "facebook":
          regex = Regex.FACEBOOK_URL_REGEX;
          break;
        case "instagram":
          regex = Regex.INSTAGRAM_URL_REGEX;
          break;
        case "linkedin":
          regex = Regex.LINKEDIN_URL_REGEX;
          break;
        case "web":
          regex = Regex.WEB_URL_REGEX;
          break;
        case "other":
          regex = this.props.regex;
          break;
        default:
          regex = this.props.regex;
          break;
      }
      if (regex !== "") {
        if (!regex.test(this.props.value)) {
          this.setState(
            {
              isInvalidUrl: true,
            },
            () => {}
          );
          isError = true;
        } else {
          this.setState(
            {
              isInvalidUrl: false,
            },
            () => {}
          );
          isError = false;
        }
      }
    } else {
      isError = false;
    }
    this.props.onBlur(event, isError);
  }
  /**
   * This method is used for handle input key down
   * @param {*} event
   */
  handleKeyDown(event) {
    if (this.props.onKeyDown()) {
      this.props.onKeyDown(event);
    }
  }
  /**
   * This method is used for handle input key up
   * @param {*} event
   */
  handleKeyUp(event) {
    if (this.props.onKeyUp()) {
      this.props.onKeyUp(event);
    }
  }
  /**
   * This method is used for handle input key press
   * @param {*} event
   */
  handleKeyPress(event) {
    if (this.props.onKeyPress()) {
      this.props.onKeyPress(event);
    }
  }
  render() {
    return (
      <div>
        <input
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          tabIndex={this.props.tabIndex}
          placeholder={this.props.placeholder}
          hide={this.props.hide}
          disabled={this.props.disabled}
          type={this.props.type}
          maxLength={this.props.maxLength}
          autoComplete={this.props.autoComplete}
          className={this.props.className}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onChange={this.handleInput.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        ></input>
      </div>
    );
  }
}
/**
 * Define Props
 */
Url.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  tabIndex: PropTypes.number,
  hide: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  autoComplete: PropTypes.string,
  className: PropTypes.object,
  regex: PropTypes.any,
  urltype: PropTypes.string,
};
/**
 * Define default props value
 */
Url.defaultProps = {
  onFocus: function () {},
  onBlur: function () {},
  onKeyDown: function () {},
  onKeyPress: function () {},
  onChange: function () {},
  onKeyUp: function () {},
  placeholder: "Enter Url",
  value: "",
  id: "",
  name: "",
  tabIndex: 0,
  hide: false,
  disabled: false,
  type: "text",
  maxLength: 255,
  autoComplete: "",
  className: {},
  regex: "",
  urltype: "facebook",
};
export default Url;
