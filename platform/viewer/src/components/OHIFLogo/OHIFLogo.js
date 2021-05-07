import './OHIFLogo.css';

import { Icon } from '@ohif/ui';
import React from 'react';

function OHIFLogo() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="header-brand"
      href="http://ohifo.org"
    >
      <Icon name="ohif-logo" className="header-logo-image" />
      {/* Logo text would fit smaller displays at two lines:
       *
       * Open Healthooooo
       * Imaging Foundation
       *
       * Or as `OHIF` on really small displays
       */}
      <Icon name="ohif-text-logo" className="header-logo-text" />
    </a>
  );
}

export default OHIFLogo;
