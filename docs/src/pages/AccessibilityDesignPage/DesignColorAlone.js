/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Fragment } from 'react';
import BpkImage, {
  withLazyLoading,
  withLoadingBehavior,
} from 'bpk-component-image';
import { cssModules } from 'bpk-react-utils';

import Paragraph from '../../components/Paragraph';
import PresentationBlock from '../../components/PresentationBlock';
import AccessibilityGuidelineSectionBuilder from '../../components/AccessibilityGuidelines';

import calendarGood from './content/calendar_good.png';
import calendarBad from './content/calendar_bad.png';
import STYLES from './accessibility-design-page.scss';

const getClassName = cssModules(STYLES);
const documentIfExists = typeof window !== 'undefined' ? document : null;
const FadingLazyLoadedImage = withLoadingBehavior(
  withLazyLoading(BpkImage, documentIfExists),
);

const DesignColorAlone = props => (
  <AccessibilityGuidelineSectionBuilder
    {...props}
    name="Color alone"
    why="By not relying on colour alone to describe something, everyone will be able to understand the meaning."
    who={
      <ul
        className={getClassName(
          'bpk-docs-accessibility-design-page__no-margin',
        )}
      >
        <li>low vision</li>
        <li>colour blindness</li>
        <li>other vision impairment</li>
        <li>cognitive impairments that affect vision, like dyslexia</li>
        <li>viewing screen in extreme conditions, like bright sunlight</li>
      </ul>
    }
    how="Use more than colour alone to convey meaning."
    doExample={
      <Fragment>
        <PresentationBlock
          whiteBackground
          className={getClassName(
            'bpk-docs-accessibility-design-page__presentation-block',
            'bpk-docs-accessibility-design-page__presentation-block--unpadded',
            'bpk-docs-accessibility-design-page__presentation-block--do',
          )}
        >
          <FadingLazyLoadedImage
            altText="image description"
            width={804}
            height={326}
            src={`/${calendarGood}`}
          />
        </PresentationBlock>
        <Paragraph>
          Colour and text is used to represent different price ranges. A key is
          also provided for clarity.
        </Paragraph>
      </Fragment>
    }
    dontExample={
      <Fragment>
        <PresentationBlock
          className={getClassName(
            'bpk-docs-accessibility-design-page__presentation-block',
            'bpk-docs-accessibility-design-page__presentation-block--unpadded',
            'bpk-docs-accessibility-design-page__presentation-block--dont',
          )}
        >
          <FadingLazyLoadedImage
            altText="image description"
            width={804}
            height={326}
            src={`/${calendarBad}`}
          />
        </PresentationBlock>
        <Paragraph>
          Colour alone is used to represent prices. No key is provided, making
          it hard to differentiate between different price brackets
        </Paragraph>
      </Fragment>
    }
    tips={
      <ul
        className={getClassName(
          'bpk-docs-accessibility-design-page__no-margin',
        )}
      >
        <li>Add text where possible to help explain meaning</li>
        <li>Provide additional cues like colour keys or icons</li>
      </ul>
    }
  />
);

export default DesignColorAlone;
