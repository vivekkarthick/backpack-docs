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
import BpkButton from 'bpk-component-button';
import BpkLink from 'bpk-component-link';
import { cssModules } from 'bpk-react-utils';

import Paragraph from '../../components/Paragraph';
import PresentationBlock from '../../components/PresentationBlock';
import AccessibilityGuidelineSectionBuilder from '../../components/AccessibilityGuidelines';

import STYLES from './accessibility-design-page.scss';

const getClassName = cssModules(STYLES);

const DesignColorContrast = props => (
  <AccessibilityGuidelineSectionBuilder
    {...props}
    name="Color contrast"
    why="Travellers can struggle to read text or UI elements when there isn't high enough contrast between the foreground and background colours."
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
    how="Use colour pairings with high contrast to make text easy to read by everyone. This also applies to icons or images that we need travellers to see properly to be able to understand what's going on."
    doExample={
      <Fragment>
        <PresentationBlock
          whiteBackground
          className={getClassName(
            'bpk-docs-accessibility-design-page__presentation-block',
            'bpk-docs-accessibility-design-page__presentation-block--do',
          )}
        >
          <BpkButton>Primary</BpkButton>
        </PresentationBlock>
        <Paragraph>
          Contrast ratio between background and foreground - 3.5:1
        </Paragraph>
      </Fragment>
    }
    dontExample={
      <Fragment>
        <PresentationBlock
          className={getClassName(
            'bpk-docs-accessibility-design-page__presentation-block',
            'bpk-docs-accessibility-design-page__presentation-block--dont',
          )}
        >
          <BpkButton>Primary</BpkButton>
        </PresentationBlock>
        <Paragraph>
          Contrast ratio between background and foreground - 1.9:1
        </Paragraph>
      </Fragment>
    }
    tips={
      <ul
        className={getClassName(
          'bpk-docs-accessibility-design-page__no-margin',
        )}
      >
        <li>
          Use our{' '}
          <BpkLink href="https://backpack.github.io/guidelines/colors/#section_pairings">
            colour pairings chart
          </BpkLink>
        </li>
        <li>
          Use{' '}
          <BpkLink href="https://www.getstark.co/">
            'Stark' plugin in Sketch/Figma
          </BpkLink>{' '}
          to check colour contrast
        </li>
        <li>
          Use a{' '}
          <BpkLink href="https://developer.paciellogroup.com/resources/contrastanalyser/">
            standalone colour contrast checker
          </BpkLink>
        </li>
      </ul>
    }
    tests={
      <ul
        className={getClassName(
          'bpk-docs-accessibility-design-page__no-margin',
        )}
      >
        <li>Colour contrast checker Aim for at least a AA pass</li>
        <li>
          <BpkLink href="https://www.color-blindness.com/coblis-color-blindness-simulator/">
            Online colour blindness simulator
          </BpkLink>
        </li>
      </ul>
    }
  />
);

export default DesignColorContrast;
