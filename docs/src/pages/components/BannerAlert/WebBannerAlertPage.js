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
/* @flow strict */

import React, { Component, type Node } from 'react';
import { durationSm, fontWeightBold } from 'bpk-tokens/tokens/base.es6';
import PropTypes from 'prop-types';
import { cssModules, withDefaultProps } from 'bpk-react-utils';
import BpkAnimateHeight from 'bpk-animate-height';
import BpkRouterLink from 'bpk-component-router-link';
import BpkBannerAlert, {
  ALERT_TYPES,
  BpkBannerAlertDismissable,
  BpkBannerAlertExpandable,
  withBannerAlertState,
} from 'bpk-component-banner-alert';
import BpkCheckBox from 'bpk-component-checkbox';
import CurrencyIcon from 'bpk-component-icon/sm/currency';
import BpkButton from 'bpk-component-button';
import bannerAlertReadme from 'bpk-component-banner-alert/README.md';

import * as ROUTES from '../../../constants/routes';

import STYLES from './bpk-banner-alerts-page.scss';

import WebComponentPage from 'components/ComponentPage';
import AriaLiveDemo from 'components/AriaLiveDemo';
import Paragraph from 'components/Paragraph';

const getClassName = cssModules(STYLES);
const componentClassName = getClassName('bpk-banner-alerts-page__component');

const BannerAlert = withDefaultProps(BpkBannerAlert, {
  className: componentClassName,
  toggleButtonLabel: 'See more',
});

const BannerAlertExpandable = withDefaultProps(
  withBannerAlertState(BpkBannerAlertExpandable),
  {
    className: componentClassName,
    toggleButtonLabel: 'See more',
  },
);

const BannerAlertDismissable = withDefaultProps(
  withBannerAlertState(BpkBannerAlertDismissable),
  {
    className: componentClassName,
    dismissButtonLabel: 'Dismiss',
  },
);

const longMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sagittis purus, id
blandit ipsum. Pellentesque nec diam nec erat condimentum dapibus. Nunc diam augue, egestas id egestas ut, facilisis
nec mi. Donec et congue odio, nec laoreet est. Integer rhoncus varius arcu, a fringilla libero laoreet at. Mauris
porta varius ullamcorper. Sed laoreet libero mauris, non pretium lectus accumsan et. Suspendisse vehicula ullamcorper
sapien, et dapibus mi aliquet non. Pellentesque auctor sagittis lectus vitae rhoncus. Fusce id enim porttitor, mattis
ante in, vestibulum nulla.`;
const richMessage = (
  <span style={{ fontWeight: fontWeightBold }}>
    Successful alert with custom rendered message
  </span>
);

type ToggleShowBannerProps = {
  initiallyShown: boolean,
  className: ?string,
};

type ToggleShowBannerState = {
  show: boolean,
};

class ToggleShowBanner extends Component<
  ToggleShowBannerProps,
  ToggleShowBannerState,
> {
  static propTypes = {
    initiallyShown: PropTypes.bool.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      show: this.props.initiallyShown,
    };
  }

  toggle = (): void => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };

  render(): Node {
    return (
      <div className={this.props.className}>
        <BpkCheckBox
          name="show"
          label="show"
          checked={this.state.show}
          onChange={this.toggle}
        />
        <BpkBannerAlert
          bannerClassName={componentClassName}
          message={this.state.show ? 'show = true' : 'show = false'}
          type={ALERT_TYPES.SUCCESS}
          show={this.state.show}
          animateOnEnter
          animateOnLeave
        />
      </div>
    );
  }
}

type BannerAlertConfig = {
  show: boolean,
  message: string,
  type: string,
};
type DismissDemoState = {
  dirty: boolean,
  bannerAlerts: Array<BannerAlertConfig>,
  bannerAlertUpdates: Array<string>,
};
class BpkBannerAlertDismissDemo extends Component<any, DismissDemoState> {
  reset: Function;

  setDismissed: Function;

  bannerAlerts: Array<BannerAlertConfig>;

  constructor() {
    super();

    this.bannerAlerts = [
      {
        show: true,
        message: 'Neutral alert with dismiss option.',
        type: ALERT_TYPES.NEUTRAL,
      },
      {
        show: true,
        message: 'Primary alert with dismiss option.',
        type: ALERT_TYPES.PRIMARY,
      },
      {
        show: true,
        message: 'Successful alert with dismiss option.',
        type: ALERT_TYPES.SUCCESS,
      },
      {
        show: true,
        message: 'Warn alert with dismiss option.',
        type: ALERT_TYPES.WARN,
      },
      {
        show: true,
        message: 'Error alert with dismiss option.',
        type: ALERT_TYPES.ERROR,
      },
    ];

    this.state = {
      bannerAlerts: JSON.parse(JSON.stringify(this.bannerAlerts)),
      bannerAlertUpdates: [],
      dirty: false,
    };
  }

  setDismissed = index => {
    this.setState(prevState => {
      const updatedBannerAlerts = JSON.parse(
        JSON.stringify(prevState.bannerAlerts),
      );

      updatedBannerAlerts[index].show = false;

      return {
        bannerAlerts: updatedBannerAlerts,
        bannerAlertUpdates: [
          ...prevState.bannerAlertUpdates,
          `${this.bannerAlerts[index].message} Dismissed`,
        ],
        dirty: true,
      };
    });
  };

  reset = () => {
    this.setState(prevState => ({
      bannerAlerts: JSON.parse(JSON.stringify(this.bannerAlerts)),
      bannerAlertUpdates: [
        ...prevState.bannerAlertUpdates,
        'Multiple alerts have appeared',
      ],
      dirty: false,
    }));
  };

  render() {
    return (
      <div className={getClassName('bpk-banner-alerts-page__demo')}>
        {this.state.bannerAlerts.map((b, i) => (
          <BpkBannerAlertDismissable
            bannerClassName={componentClassName}
            dismissButtonLabel="Dismiss"
            key={i.toString()}
            message={b.message}
            onDismiss={() => this.setDismissed(i)}
            show={b.show}
            type={b.type}
          />
        ))}
        <BpkAnimateHeight
          height={this.state.dirty ? 'auto' : 0}
          duration={parseInt(durationSm, 10)}
        >
          <BpkButton
            className={componentClassName}
            onClick={this.reset}
            destructive
          >
            Reset
          </BpkButton>
        </BpkAnimateHeight>
        <AriaLiveDemo
          className={getClassName('bpk-banner-alerts-page__aria-live-demo')}
        >
          {this.state.bannerAlertUpdates.map(u => (
            <Paragraph>{u}</Paragraph>
          ))}
        </AriaLiveDemo>
      </div>
    );
  }
}

type FadeDemoProps = {
  type: string,
  message: ?string,
};
type FadeDemoState = {
  bannerAlertCount: number,
  bannerAlertUpdates: Array<string>,
};
class BpkBannerAlertFadeDemo extends Component<FadeDemoProps, FadeDemoState> {
  addBannerAlert: Function;

  static propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string,
  };

  static defaultProps = {
    message: null,
  };

  constructor() {
    super();

    this.state = {
      bannerAlertCount: 0,
      bannerAlertUpdates: [],
    };
  }

  addBannerAlert = () => {
    this.setState(prevState => {
      const bannerAlertCount = prevState.bannerAlertCount + 1;

      return {
        bannerAlertCount,
        bannerAlertUpdates: [
          ...prevState.bannerAlertUpdates,
          'Neutral alert with dismiss option.',
        ],
      };
    });
  };

  removeBannerAlert = () => {
    this.setState(prevState => {
      return {
        bannerAlertUpdates: [
          ...prevState.bannerAlertUpdates,
          'Neutral alert with dismiss option. Dismissed',
        ],
      };
    });
  };

  render() {
    return (
      <div>
        <BpkButton onClick={this.addBannerAlert}>Add banner alert!</BpkButton>
        {[...Array(this.state.bannerAlertCount)].map((e, i) => (
          <BannerAlertDismissable
            bannerClassName={componentClassName}
            key={i.toString()}
            message={this.props.message}
            type={this.props.type}
            animateOnEnter
            dismissButtonLabel="Dismiss"
            onDismiss={() => this.removeBannerAlert()}
          />
        ))}
        <AriaLiveDemo
          className={getClassName('bpk-banner-alerts-page__aria-live-demo')}
        >
          {this.state.bannerAlertUpdates.map(u => (
            <Paragraph>{u}</Paragraph>
          ))}
        </AriaLiveDemo>
      </div>
    );
  }
}

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        Banner alerts come in various styles to indicate success, warning or
        error, or some neutral information.
      </Paragraph>,
    ],
    examples: [
      <BannerAlert message="Neutral alert." type={ALERT_TYPES.NEUTRAL} />,
      <BannerAlert message="Primary alert." type={ALERT_TYPES.PRIMARY} />,
      <BannerAlert message="Successful alert." type={ALERT_TYPES.SUCCESS} />,
      <BannerAlert message={richMessage} type={ALERT_TYPES.SUCCESS} />,
      <BannerAlert message="Warn alert." type={ALERT_TYPES.WARN} />,
      <BannerAlert message="Error alert." type={ALERT_TYPES.ERROR} />,
    ],
  },
  {
    id: 'withCustomIcon',
    title: 'With a custom icon',
    blurb: [
      <Paragraph>Banner alerts can be configured to show any icon.</Paragraph>,
    ],
    examples: [
      <BannerAlert
        message="Neutral alert."
        type={ALERT_TYPES.NEUTRAL}
        icon={CurrencyIcon}
      />,
      <BannerAlert
        message="Primary alert."
        type={ALERT_TYPES.PRIMARY}
        icon={CurrencyIcon}
      />,
      <BannerAlert
        message="Successful alert."
        type={ALERT_TYPES.SUCCESS}
        icon={CurrencyIcon}
      />,
      <BannerAlert
        message={richMessage}
        type={ALERT_TYPES.SUCCESS}
        icon={CurrencyIcon}
      />,
      <BannerAlert
        message="Warn alert."
        type={ALERT_TYPES.WARN}
        icon={CurrencyIcon}
      />,
      <BannerAlert
        message="Error alert."
        type={ALERT_TYPES.ERROR}
        icon={CurrencyIcon}
      />,
    ],
  },
  {
    id: 'expandable',
    title: 'Expandable',
    blurb: [
      <Paragraph>
        They can be configured to display further information to the user in the
        form of an expandable panel.
      </Paragraph>,
    ],
    examples: [
      <BannerAlertExpandable
        message="Neutral alert with more information."
        type={ALERT_TYPES.NEUTRAL}
      >
        {longMessage}
      </BannerAlertExpandable>,
      <BannerAlertExpandable
        message="Primary alert with more information."
        type={ALERT_TYPES.PRIMARY}
      >
        {longMessage}
      </BannerAlertExpandable>,
      <BannerAlertExpandable
        message="Successful alert with more information."
        type={ALERT_TYPES.SUCCESS}
      >
        {longMessage}
      </BannerAlertExpandable>,
      <BannerAlertExpandable
        message="Warn alert with more information."
        type={ALERT_TYPES.WARN}
      >
        {longMessage}
      </BannerAlertExpandable>,
      <BannerAlertExpandable
        message="Error alert with more information."
        type={ALERT_TYPES.ERROR}
      >
        {longMessage}
      </BannerAlertExpandable>,
    ],
  },
  {
    id: 'dismissable',
    title: 'Dismissable',
    blurb: [
      <Paragraph>
        Banner alerts can be configured to include a close icon so that the user
        can dismiss them.
        <br />
        <br />
        Note that if banner-alerts are being added or removed dynamically (like
        in the example below), you should render a{' '}
        <BpkRouterLink to={ROUTES.ARIA_LIVE}>BpkAriaLive</BpkRouterLink>{' '}
        container describing the updates taking place. By doing this, assistive
        technologies will know to inform the user when changes are made. By
        default, only additions to the container will be read out, so you
        don&#39;t need to worry about removing entries again.
      </Paragraph>,
    ],
    examples: [
      <BpkBannerAlertDismissDemo
        message="Neutral alert with dismiss option."
        type={ALERT_TYPES.NEUTRAL}
      />,
    ],
  },
  {
    id: 'animateOnEnter',
    title: 'With enter animation',
    blurb: [
      <Paragraph>
        Banner alerts can be configured to animate when first added to the DOM.
      </Paragraph>,
    ],
    examples: [
      <BpkBannerAlertFadeDemo
        bannerClassName={componentClassName}
        message="Neutral alert with dismiss option."
        type={ALERT_TYPES.NEUTRAL}
        dismissButtonLabel="Dismiss"
      />,
    ],
  },
  {
    id: 'toggleShow',
    title: 'Toggle show prop',
    blurb: [],
    examples: [
      <ToggleShowBanner initiallyShown={false} />,
      <ToggleShowBanner initiallyShown className={componentClassName} />,
    ],
  },
  {
    id: 'withBannerAlertState',
    title: 'With banner alert state',
    blurb: [
      <Paragraph>
        Most common use of &quot;expandable&quot; and &quot;dismissable&quot;
        can be easily achieved using the &quot;withBannerAlertState&quot; HOC.
      </Paragraph>,
      <Paragraph>
        It also adds the option to automatically dismiss a banner after a
        certain period of time has elapsed.
      </Paragraph>,
    ],
  },
  {
    id: 'event',
    title: 'Event Alert',
    blurb: [
      <Paragraph>
        Reserved for event-based messaging that has neither a positive or
        negative connotation. Avoid using this in other contexts.
      </Paragraph>,
    ],
    examples: [
      <BannerAlert message="Event alert." type={ALERT_TYPES.EVENT} />,
      <BannerAlert
        message="Event alert with custom icon."
        type={ALERT_TYPES.EVENT}
        icon={CurrencyIcon}
      />,
      <BannerAlertExpandable
        message="Event alert with more information."
        type={ALERT_TYPES.EVENT}
      >
        {longMessage}
      </BannerAlertExpandable>,
    ],
  },
];

const BannerAlertsPage = () => (
  <WebComponentPage
    examples={components}
    sassdocId="notifications"
    readme={bannerAlertReadme}
    packageName="bpk-component-banner-alert"
  />
);

export default BannerAlertsPage;
