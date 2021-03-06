import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Highlighter from 'react-highlight-words';
import { isIOS } from '../utils/deviceDetector';
import escapeSpecialCharacters from '../utils/string-helper';

function OnlyClickListOption(props) {
  const {
    id,
    value,
    label,
    addition,
    checked,
    tooltipKey,
    typedValue,
    highlight,
    highlightSanitizer,
    listType,
    onClick,
    onHelpClick,
    itemClasses,
    disabled,
    optionComponent,
  } = props;
  const optionClass = classNames(
    'oc-options-list__item oc-list-option',
    itemClasses,
    { 'oc-list-option--checked': checked },
    { 'oc-list-option--no-touch': !isIOS() },
    { 'oc-list-option--with-addition': addition },
    { 'oc-list-option--disabled': disabled }
  );

  const messageClass = classNames('oc-option__message');
  const multiSelectIconClass = classNames('oc-option__checked-icon', { 'oc-option__checked-icon--checked': checked });
  const tooltipIconClass = classNames('oc-option__help-icon', { 'oc-option__help-icon--checked': checked });

  return (
    <li id={id} className={optionClass} onClick={() => !disabled && onClick(value)} disabled={disabled}>
      {optionComponent ? (
        <span>{optionComponent(props)}</span>
      ) : (
        <span className="oc-list-option__container">
          {listType === 'multiSelect' && <span className={multiSelectIconClass} />}
          <span className={messageClass}>
            {highlight ? (
              <Highlighter
                highlightClassName={'oc-option__search-term'}
                searchWords={escapeSpecialCharacters(typedValue.trim()).split(' ')}
                textToHighlight={label}
                sanitize={highlightSanitizer}
              />
            ) : (
              label
            )}
            {addition && <div className="oc-option__addition">{addition}</div>}
          </span>
          {tooltipKey && (
            <span className={tooltipIconClass} id={tooltipKey} onClick={onHelpClick && onHelpClick.bind(null, tooltipKey)} tabIndex="-1" />
          )}
          {listType !== 'multiSelect' && <span className="oc-option__next-icon" />}
        </span>
      )}
    </li>
  );
}

OnlyClickListOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  addition: PropTypes.string,
  tooltipKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  typedValue: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  highlight: PropTypes.bool,
  highlightSanitizer: PropTypes.func,
  listType: PropTypes.string,
  itemClasses: PropTypes.string,
  onClick: PropTypes.func,
  onHelpClick: PropTypes.func,
  optionComponent: PropTypes.func,
};

export default OnlyClickListOption;
