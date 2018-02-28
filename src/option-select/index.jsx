import React from 'react';

const OptionFilter = ({title, description, options}) => (
  <div className="app-c-option-select js-collapsible" data-closed-on-load="true" data-input-aria-controls="js-live-search-results">
    <button className="js-container-head" type="button" aria-expanded="true" aria-controls="organisations">
      <div className="option-select-label" id="option-select-title-organisations">
        {title}
      </div>
      <div className="js-selected-counter">{description}</div>
    </button>
    <div role="group" aria-labelledby="option-select-title-organisations" class="options-container" id="organisations" style="max-height: none; height: 160px;">
      <div className="js-auto-height-inner">
        <label htmlFor="filter_organisations-hm-revenue-customs">
          <input name="filter_organisations[]" value="hm-revenue-customs" id="filter_organisations-hm-revenue-customs" type="checkbox" aria-controls="js-live-search-results"/>

        </label>
        <label htmlFor="filter_organisations-department-for-international-development">
          <input name="filter_organisations[]" value="department-for-international-development" id="filter_organisations-department-for-international-development" type="checkbox" aria-controls="js-live-search-results"/>
            Department for International Development (11,622)
        </label>
        <label htmlFor="filter_organisations-ministry-of-justice">
          <input name="filter_organisations[]" value="ministry-of-justice" id="filter_organisations-ministry-of-justice" type="checkbox" aria-controls="js-live-search-results"/>
            Ministry of Justice (10,213)
        </label>
        <label htmlFor="filter_organisations-hm-courts-and-tribunals-service">
          <input name="filter_organisations[]" value="hm-courts-and-tribunals-service" id="filter_organisations-hm-courts-and-tribunals-service" type="checkbox" aria-controls="js-live-search-results"/>
            HM Courts &amp; Tribunals Service (9,294)
        </label>
      </div>
    </div>
  </div>
);

export default OptionFilter


