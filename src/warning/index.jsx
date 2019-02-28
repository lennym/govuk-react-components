import React from 'react';

const Warning = ({ children }) => (
  <div class="govuk-warning-text">
    <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
    <strong class="govuk-warning-text__text">
      { children }
    </strong>
  </div>
);

export default Warning;
