import React from 'react';
var Slider = React.createClass({ displayName: "Slider",

  getInitialState: function () {
    return {
      slider: ["first", "second", "third", "fourth", "fifth"],
      activeIndex: 1,
      left: 0 };

  },

  prevSlide: function () {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + 400 // this.props.sliderWidth not working for some reason
    });
    if (this.state.activeIndex === 1) {
      this.setState({
        activeIndex: this.state.activeIndex + this.state.slider.length - 1,
        left: this.state.left - this.props.sliderWidth * (this.state.slider.length - 1) });

    }
  },

  nextSlide: function () {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.props.sliderWidth });

    if (this.state.activeIndex === this.state.slider.length) {
      this.setState({
        activeIndex: this.state.activeIndex - this.state.slider.length + 1,
        left: 0 });

    }
  },

  clickIndicator: function (e) {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left: this.props.sliderWidth - parseInt(e.target.textContent) * this.props.sliderWidth });

  },

  render: function () {
    var style = {
      left: this.state.left,
      width: this.props.sliderWidth,
      height: this.props.sliderHeight };

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "slider-wrapper" }, /*#__PURE__*/
      React.createElement("ul", { className: "slider" },
      this.state.slider.map(function (item, index) {
        return /*#__PURE__*/(
          React.createElement("li", { style: style, className: index + 1 === this.state.activeIndex ? 'slider-item' : 'hide' }, item));


      }, this))), /*#__PURE__*/



      React.createElement("div", { className: "buttons-wrapper" }, /*#__PURE__*/
      React.createElement("button", { className: "prev-button", onClick: this.prevSlide }), /*#__PURE__*/
      React.createElement("button", { className: "next-button", onClick: this.nextSlide })), /*#__PURE__*/

      React.createElement("div", { className: "indicators-wrapper" }, /*#__PURE__*/
      React.createElement("ul", { className: "indicators" },
      this.state.slider.map(function (item, index) {
        return /*#__PURE__*/(
          React.createElement("li", { className: index + 1 === this.state.activeIndex ? 'active-indicator' : '', onClick: this.clickIndicator }, index + 1));

      }, this)))));





  } });


export default Slider;