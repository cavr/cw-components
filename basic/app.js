/* eslint no-console: 'off' */

import React from 'react';
import ReactDOM from 'react-dom';
import objectAssign from 'object-assign';
import {
  InputKeyboard,
  NumberInput,
  BoxRadioGroup,
  IconRadioGroup,
  Loader,
  OnlyClickListOptions,
  OnlyClickSelect,
  OnlyClickMultiSelect,
  CwFlashNotification,
  Checkbox,
  RadioInputGroup,
  CurrencyInput,
  StickyFooter,
} from '../../lib/index';
import industries from './catalog_api_json/industries';
import insuranceTypes from './catalog_api_json/insuranceTypes';

import './app.scss';

const iconRadioGroupOptions = [
  {
    label: 'Yes',
    value: 'Yes',
    iconClass: 'styleguide-icon-onlyclick-yes',
  }, {
    label: 'No',
    value: 'No',
    iconClass: 'styleguide-icon-onlyclick-no',
  },
];

const radioGroupOptions = [
  {
    label: '$500,000',
    value: '$500,000',
    iconClass: null,
  }, {
    label: '$100,000',
    value: '$100,000',
    iconClass: null,
  },
];

const currentYear = new Date().getFullYear();
const BoxRadioGroupYearsOptions = [
  {
    label: `${currentYear}`,
    value: `${currentYear}`,
  }, {
    label: `${currentYear + 1}`,
    value: `${currentYear + 1}`,
  },
];

const BoxRadioGroupMonthsOptions = [
  {
    label: 'Jan',
    value: 'Jan',
  }, {
    label: 'Feb',
    value: 'Feb',
  }, {
    label: 'Mar',
    value: 'Mar',
  }, {
    label: 'Spr',
    value: 'Spr',
  }, {
    label: 'May',
    value: 'May',
  }, {
    label: 'Jun',
    value: 'Jun',
  }, {
    label: 'Jul',
    value: 'Jul',
  }, {
    label: 'Aug',
    value: 'Aug',
  }, {
    label: 'Sep',
    value: 'Sep',
  }, {
    label: 'Oct',
    value: 'Oct',
  }, {
    label: 'Nov',
    value: 'Nov',
  }, {
    label: 'Dec',
    value: 'Dec',
  },
];

const baseRadioGroupOptions = [
  {
    label: 'Yes',
    value: 'Yes',
  }, {
    label: 'No',
    value: 'No',
  }, {
    label: 'I am not sure yet',
    value: 'I am not sure yet',
  }
];

const App = function App() {
  return (
    <div className="example">
      <h1>cw-components</h1>

      <div className="clearfix row">
        <h2>Flash Notifications</h2>
        <CwFlashNotification
          type="info"
          title="Great! Now see your email account."
          titleMobile="Great!"
          onClose={() => console.log('Custom close event handler.')}
        />
      </div>

      <div className="clearfix row">
        <CwFlashNotification
          type="success"
          title="You're almost done."
          titleMobile="Done!"
          onClose={() => console.log('Custom close event handler.')}
        />
      </div>

      <div className="clearfix row">
        <CwFlashNotification
          type="error"
          title="Your payment could not be completed."
          titleMobile="Not Payment"
          onClose={() => console.log('Custom close event handler.')}
        />
      </div>

      <div className="clearfix row">
        <CwFlashNotification
          type="info"
          title="Your account need to be activated."
          titleMobile="Account activated"
          subtitle="Call (646) 844-9933 to purchase this policy."
          subtitleMobile="Purchase Now"
          onClose={() => console.log('Custom close event handler.')}
        />
      </div>

      <div className="clearfix row">
        <CwFlashNotification
          type="info"
          largeTitle="The start date of the original quote already passed. Please recalculate the quote in order to continue with the purchase."
          largeTitleMobile="This is a short description for mobile"
          onClose={() => console.log('Custom close event handler.')}
        />
      </div>

      <div className="clearfix row">
        <CwFlashNotification
          type="info"
          title="Your account need to be activated."
          titleMobile="Account activated"
        >
            <h5 className="cw-flash-notification__description description-desktop">An additional info goes here.</h5>
            <h5 className="cw-flash-notification__description description-tablet">An additional info.</h5>
        </CwFlashNotification>
      </div>

      <div className="clearfix">
        <h2>Default Keyboard input with text type</h2>
        <InputKeyboard type="text" value={0} />
      </div>

      <div className="clearfix">
        <h2>Currency with commas Keyboard input</h2>
        <InputKeyboard currency commas />
      </div>

      <div className="clearfix">
        <h2>Currency with commas and negative values enabled Keyboard input </h2>
        <InputKeyboard currency negatives commas />
      </div>

      <div className="clearfix">
        <h2>Currency Keyboard input with euro currencyType</h2>
        <InputKeyboard currency currencyType="euro" />
      </div>

      <div className="clearfix">
        <h2>Long Keyboard input</h2>
        <InputKeyboard width="100%" />
      </div>

      <hr />

      <div className="clearfix">
        <h2>Number input</h2>

        <div className="clearfix">
          <h3>Default</h3>
          <NumberInput />
        </div>

        <div className="clearfix">
          <h3>Max 20, Min -5, Step 5</h3>
          <NumberInput min={-5} max={20} step={5} />
        </div>

        <div className="clearfix">
          <h3>First increment 2018, First Decrement 2017</h3>
          <NumberInput firstIncrement={2018} firstDecrement={2017} />
        </div>

        <div className="clearfix">
          <h3>Percents</h3>
          <NumberInput
            type="text"
            step={10}
            min={0}
            max={100}
            value={0}
            setValue={(value) => console.log('Changed to ', value)}
            percents
          />
        </div>

        <div className="clearfix">
          <h3>Long with commas</h3>
          <NumberInput width="100%" commas />
        </div>

        <div className="clearfix">
          <h3>Currency</h3>
          <NumberInput width="25%" currency />
        </div>

        <div className="clearfix">
          <h3>Currency with euro currencyType</h3>
          <NumberInput width="25%" currency currencyType="euro" />
        </div>
      </div>

      <div className="clearfix">
        <h2>Currency input</h2>
        <div className="clearfix">
          <h3>Default options</h3>
          <CurrencyInput
            width="25%"
          />
        </div>
        <div className="clearfix">
          <h3>Euro currencyType and decimals</h3>
          <CurrencyInput
            currencyType="euro"
            decimalSplitter=","
            thousandsSplitter="."
            width="25%"
          />
        </div>
      </div>

      <div className="clearfix">
        <div className="clearfix">
          <h3>Base Checkbox</h3>
          <form className="form">
            <Checkbox
              name="check_me"
              label="Check me"
            />
          </form>
        </div>

        <div className="clearfix">
          <h3>Base Radio Group</h3>
          <form className="form">
            <RadioInputGroup
              name="test_name"
              options={baseRadioGroupOptions}
            />
          </form>
        </div>
      </div>

      <hr />

      <div>
        <h2>Box Radio Group</h2>

        <BoxRadioGroup
          options={BoxRadioGroupMonthsOptions}
          rows={2}
          name="test_radio_input"
          value="Not sure"
          style={{ width: 360 }}
          onChange={(value) => console.log('You pick ', value)}
        />

        <BoxRadioGroup
          options={BoxRadioGroupYearsOptions}
          name="test_radio_input"
          value="Not sure"
          style={{ width: 360 }}
          onChange={(value) => console.log('You pick ', value)}
        />
      </div>

      <hr />

      <div>
        <h2>Icon Radio Group 2 options</h2>

        <IconRadioGroup
          options={iconRadioGroupOptions}
          name="test_radio_input"
          value="Not sure"
          onChange={(value) => console.log('You pick ', value)}
        />
      </div>

      <div>
        <h2>Icon Radio Group 3 options</h2>

        <IconRadioGroup
          options={[...iconRadioGroupOptions, {
            label: 'Not sure',
            value: 'Not sure',
            iconClass: 'styleguide-icon-onlyclick-notsure',
          }]}
          name="test_radio_input2"
          value="Not sure"
          onChange={(value) => console.log('You pick ', value)}
        />
      </div>

      <div>
        <h2>Icon Radio Group 3 options (not required icon)</h2>

        <IconRadioGroup
          options={[...iconRadioGroupOptions, {
            label: 'Not required',
            value: 'Not required',
            iconClass: 'coverwallet-general-notrequired',
          }]}
          name="test_radio_input3"
          value="Not required"
          onChange={(value) => console.log('You pick ', value)}
        />
      </div>

      <div>
        <h2>Small Icon Radio Group 3 options without icons</h2>

        <IconRadioGroup
          options={[...radioGroupOptions, {
            label: '$50,000',
            value: '$50,000',
            iconClass: null,
          }]}
          name="test_radio_input"
          value="Not sure"
          size="small"
          onChange={(value) => console.log('You pick ', value)}
        />
      </div>

      <hr />

      <div>
        <h2>Loader</h2>

        <div className="loader__example">
          <Loader />
        </div>

        <div className="loader__example">
          <Loader subtitle="Calculating financing conditions"/>
        </div>
      </div>

      <hr />

      <div>
        <h2>Only Click List Options </h2>

        <div>
          <OnlyClickListOptions
            options={iconRadioGroupOptions}
            onClick={(value) => console.log('You choose ', value)}
            selectedValues={['Yes']}
          />
        </div>
      </div>

      <hr />

      <div>
        <h2>Only Click Select</h2>

        <h4>Icons view with auto focus</h4>

        <div>
          <OnlyClickSelect
            placeholder="or type it here"
            hint="Select your industry"
            type="icons"
            options={industries.map((industry) => objectAssign({},
              industry,
              { label: industry.name, value: industry.name, iconClass: industry.icon_name }
            ))}
            onClick={(value) => console.log('You choose ', value)}
            onDelete={(value) => console.log('You remove ', value)}
            autoFocus
          />
        </div>

        <h4>Normal List view</h4>

        <div>
          <OnlyClickSelect
            placeholder="Search industry subcategory"
            hint="Select your industry subcategory"
            options={industries[0].subindustries.map(subindustry => objectAssign({},
              subindustry,
              { label: subindustry.name, value: subindustry.name }
            ))}
            onClick={(value) => console.log('You choose ', value)}
            onDelete={(value) => console.log('You remove ', value)}
            values={[industries[0].subindustries[0].name]}
          />
        </div>

        <h4>MultiSelect List view</h4>

        <div>
          <OnlyClickMultiSelect
            errorMessage="Required"
            hint="Select your industry subcategory"
            options={industries[0].subindustries.map(subindustry => objectAssign({},
              subindustry,
              {
                label: subindustry.name,
                value: subindustry.name,
                tooltipKey: subindustry.tooltip_key,
              }
            ))}
            onClick={(value) => console.log('You choose ', value)}
            onDelete={(value) => console.log('You remove ', value)}
            onHelpIconClick={(key) => console.log('Some help info for: ', key)}
            values={[industries[0].subindustries[0].name]}
          />
        </div>

        <h4>List view with auto scroll, highlight and adition, 10 max visible and error message</h4>

        <div>
          <OnlyClickSelect
            placeholder="Search industry subcategory"
            errorMessage="Required"
            options={industries[0].subindustries.map(subindustry => objectAssign({},
              subindustry,
              { label: subindustry.name, value: subindustry.name, addition: subindustry.name }
            ))}
            onChange={(value) => console.log('You typed ', value)}
            onClick={(value) => console.log('You choose ', value)}
            onDelete={(value) => console.log('You remove ', value)}
            values={[industries[0].subindustries[0].name]}
            maxVisible={10}
            disableFilter
            autoScroll
            highlight
          />
        </div>

        <h4>With help icon and recommendable options</h4>

        <div>
          <OnlyClickSelect
            placeholder="Search"
            type="icons"
            options={insuranceTypes.map((type) => objectAssign({},
              type,
              {
                label: type.name,
                value: type.name,
                iconClass: type.icon_name,
                tooltipKey: type.tooltip_key,
                recommendable: type.recommendable,
              },
            ))}
            onClick={(value) => console.log('You choose ', value)}
            onDelete={(value) => console.log('You remove ', value)}
            onHelpIconClick={(key) => console.log('Some help info for: ', key)}
          />
        </div>
        <StickyFooter>
          <div >
            Need help? give us a call (646) 844-9936 | Feedback is a gift. Click here to help us get better.
          </div>
        </StickyFooter>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));
