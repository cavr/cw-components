import React from 'react';
import PropTypes from 'prop-types';

import ButtonsListSelectOption from './ButtonsListSelectOption';

const ButtonsListSelectOptions = props => {
  const { options, selectedOptions, onClick, onClickHelp, accordion } = props;

  return (
    <ul className="buttons-list-select-options">
      {options.map(option => (
        <ButtonsListSelectOption
          key={option.value}
          value={option.value}
          label={option.label}
          iconClass={option.iconClass}
          infoText={option.infoText}
          onClick={onClick}
          onClickHelp={onClickHelp}
          selected={selectedOptions.includes(option.value)}
          accordion={accordion}
        />
      ))}
    </ul>
  );
};

ButtonsListSelectOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired).isRequired,
  onClick: PropTypes.func,
  onClickHelp: PropTypes.func,
  accordion: PropTypes.bool,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
};

export default ButtonsListSelectOptions;
