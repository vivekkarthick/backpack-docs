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
import PropTypes from 'prop-types';
import { cssModules } from 'bpk-react-utils';
import BpkText from 'bpk-component-text';

import BpkDoDont from '../DocsPageBuilder/BpkDoDont';

import STYLES from './accessibility-guidelines-section-builder.scss';

const getClassName = cssModules(STYLES);

const AccessibilityGuidelineSectionBuilder = props => {
  const {
    name,
    why,
    who,
    how,
    doExample,
    dontExample,
    tips,
    tests,
    ...rest
  } = props;

  return (
    <div {...rest}>
      <BpkText
        className={getClassName(
          'bpk-docs-accessibility-guidelines-section-builder__sub-section',
        )}
        bold
        tagName="h3"
        textStyle="lg"
      >
        {name}
      </BpkText>
      {why && (
        <Fragment>
          <BpkText
            className={getClassName(
              'bpk-docs-accessibility-guidelines-section-builder__sub-section',
            )}
            bold
            tagName="h4"
            textStyle="base"
          >
            Why
          </BpkText>
          {why}
        </Fragment>
      )}
      {who && (
        <Fragment>
          <BpkText
            className={getClassName(
              'bpk-docs-accessibility-guidelines-section-builder__sub-section',
            )}
            bold
            tagName="h4"
            textStyle="base"
          >
            Who
          </BpkText>
          {who}
        </Fragment>
      )}
      {how && (
        <div
          className={getClassName(
            'bpk-docs-accessibility-guidelines-section-builder__sub-section',
            'bpk-docs-accessibility-guidelines-section-builder__sub-section--emphasized',
          )}
        >
          <BpkText bold tagName="h4" textStyle="base">
            How
          </BpkText>
          {how}
        </div>
      )}
      {doExample && dontExample && (
        <div
          className={getClassName(
            'bpk-docs-accessibility-guidelines-section-builder__do-dont-wrapper',
          )}
        >
          <BpkDoDont
            type="do"
            className={getClassName(
              'bpk-docs-accessibility-guidelines-section-builder__do-dont',
            )}
          >
            {doExample}
          </BpkDoDont>
          <BpkDoDont
            type="dont"
            className={getClassName(
              'bpk-docs-accessibility-guidelines-section-builder__do-dont',
            )}
          >
            {dontExample}
          </BpkDoDont>
        </div>
      )}
      {tips && (
        <Fragment>
          <BpkText
            className={getClassName(
              'bpk-docs-accessibility-guidelines-section-builder__sub-section',
            )}
            bold
            tagName="h4"
            textStyle="base"
          >
            Tips
          </BpkText>
          {tips}
        </Fragment>
      )}
      {tests && (
        <Fragment>
          <BpkText
            className={getClassName(
              'bpk-docs-accessibility-guidelines-section-builder__sub-section',
            )}
            bold
            tagName="h4"
            textStyle="base"
          >
            Tests
          </BpkText>
          {tests}
        </Fragment>
      )}
    </div>
  );
};

AccessibilityGuidelineSectionBuilder.propTypes = {
  name: PropTypes.node,
  why: PropTypes.node,
  who: PropTypes.node,
  how: PropTypes.node,
  doExample: PropTypes.node,
  dontExample: PropTypes.node,
  tips: PropTypes.node,
  tests: PropTypes.node,
};

AccessibilityGuidelineSectionBuilder.defaultProps = {
  name: null,
  why: null,
  who: null,
  how: null,
  doExample: null,
  dontExample: null,
  tips: null,
  tests: null,
};

export default AccessibilityGuidelineSectionBuilder;
