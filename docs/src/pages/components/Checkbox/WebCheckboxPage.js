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

import React from 'react';
import BpkCheckbox from 'bpk-component-checkbox';
import { cssModules } from 'bpk-react-utils';
import readme from 'bpk-component-checkbox/README.md';

import InputContainer from '../Forms/InputContainer';

import STYLES from './checkbox-page.scss';

import WebComponentPage from 'components/ComponentPage';
import Paragraph from 'components/Paragraph';

const getClassName = cssModules(STYLES);

const formClassName = getClassName('bpkdocs-checkbox-page__form');

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkCheckbox}
          name="checkbox"
          label="Apples"
          checked
        />
      </form>,
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkCheckbox}
          name="unchecked_checkbox"
          label="Bananas"
          checked={false}
        />
      </form>,
    ],
  },
  {
    id: 'indeterminate',
    title: 'Indeterminate',
    blurb: [
      <Paragraph>
        The indeterminate prop is only a visual clue, it does not affect the
        checked state of the checkbox. This is used when there is a checkbox
        group and the parent displays this state when not all child checkboxes
        are selected.
      </Paragraph>,
    ],
    examples: [
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkCheckbox}
          name="indeterminate_checkbox"
          label="Fruits"
          indeterminate
        />
      </form>,
      <div className={getClassName('bpkdocs-checkbox-page--indeterminate')}>
        <form className={formClassName}>
          <InputContainer
            FormComponent={BpkCheckbox}
            name="checked_checkbox"
            label="Apples"
            checked
          />
        </form>
        <form className={formClassName}>
          <InputContainer
            FormComponent={BpkCheckbox}
            name="unchecked_checkbox"
            label="Bananas"
          />
        </form>
      </div>,
    ],
  },
  {
    id: 'disabled',
    title: 'Disabled',
    examples: [
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkCheckbox}
          name="disabled_checkbox"
          label="Strawberries"
          disabled
        />
      </form>,
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkCheckbox}
          name="disabled_checked_checkbox"
          label="Pears"
          disabled
          checked
        />
      </form>,
    ],
  },
  {
    id: 'invalid',
    title: 'Invalid',
    examples: [
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkCheckbox}
          name="small_checkbox"
          label="Oranges"
          smallLabel
          valid={false}
        />
      </form>,
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkCheckbox}
          name="small_checkbox"
          label="Invalid"
          smallLabel
          valid={false}
        />
      </form>,
    ],
  },
  {
    id: 'white',
    title: 'White',
    blurb:
      'You can change the label to white for displaying on dark backgrounds.',
    dark: true,
    examples: [
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkCheckbox}
          name="checkbox"
          label="Apples"
          checked
          white
        />
      </form>,
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkCheckbox}
          name="unchecked_checkbox"
          label="Bananas"
          checked={false}
          white
        />
      </form>,
    ],
  },
];

const WebCheckboxPage = () => (
  <WebComponentPage
    sassdocId="forms-mixin-bpk-checkbox"
    examples={components}
    readme={readme}
    packageName="bpk-component-checkbox"
  />
);

export default WebCheckboxPage;
