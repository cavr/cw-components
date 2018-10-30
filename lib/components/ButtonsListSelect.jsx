import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonsListSelectOptions from './ButtonsListSelectOptions';

class ButtonsListSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.values,
      selectedValues: props.selectedValues,
      lastItemToShow: props.viewMoreEnabled ? props.itemsToShowFirstRender : undefined,
      isViewMoreEnabled: props.viewMoreEnabled,
    };
  }

  getOptionsToRender = () => {
    const { lastItemToShow, isViewMoreEnabled } = this.state;
    const { options } = this.props;
    return isViewMoreEnabled ? options.slice(0, lastItemToShow) : options;
  };

  calculateLastItemToShow = () => {
    const { lastItemToShow } = this.state;
    const { itemsPerPage, options } = this.props;
    let result;

    if (this.props.viewMoreEnabled) {
      const optionsMaxIndex = options.length - 1;
      const nextPageMaxIndex = lastItemToShow + itemsPerPage;

      result = Math.min(nextPageMaxIndex, optionsMaxIndex);
    }
    return result;
  };

  areOptionsLeft = (lastItemShown) => {
    if (!this.state.isViewMoreEnabled) {
      return this.state.isViewMoreEnabled;
    }

    return lastItemShown < this.props.options.length - 1;
  };

  renderNext = () => {
    const areOptionsLeft = this.areOptionsLeft.bind(this);
    const calculateLastItemToShow = this.calculateLastItemToShow.bind(this);

    this.setState(() => {
      const lastItemToShow = calculateLastItemToShow();
      const isViewMoreEnabled = areOptionsLeft(lastItemToShow);

      return {
        lastItemToShow,
        isViewMoreEnabled,
      };
    });
  }

  render() {
    const { options, selectedValues, viewMoreEnabled, ...rest } = this.props;
    const { isViewMoreEnabled } = this.state;
    const optionsToShow = this.getOptionsToRender();

    return (
      <div>
        <ButtonsListSelectOptions
          options={optionsToShow}
          selectedValues={selectedValues}
          {...rest}
        />
        {isViewMoreEnabled &&
          <button onClick={this.renderNext}>
            View more
          </button>}
      </div>
    );
  }
}

ButtonsListSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.array,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onClickHelp: PropTypes.func,
  viewMoreEnabled: PropTypes.bool,
  itemsToShowFirstRender: PropTypes.number,
  itemsPerPage: PropTypes.number,
};

ButtonsListSelect.defaultProps = {
  itemsToShowFirstRender: 6,
  itemsPerPage: 12,
  values: [],
  viewMoreEnabled: true,
};

export default ButtonsListSelect;