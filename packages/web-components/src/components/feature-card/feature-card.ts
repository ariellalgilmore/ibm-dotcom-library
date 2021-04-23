/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import DDSCard from '../card/card';
import DDSFeatureCardFooter from './feature-card-footer';
import '../image/image';
import styles from './feature-card.scss';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Feature Card.
 *
 * @element dds-feature-card
 */
@customElement(`${ddsPrefix}-feature-card`)
class DDSFeatureCard extends DDSCard {
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('href')) {
      const footer = this.querySelector((this.constructor as typeof DDSFeatureCard).selectorFooter);
      if (footer) {
        (footer as DDSFeatureCardFooter).href = this.href;
      }
    }
    const { _linkNode: linkNode } = this;
    if (linkNode) {
      linkNode.classList.remove(`${prefix}--link`);
      linkNode.classList.add(`${prefix}--feature-card__card`);
    }
  }

  static get selectorFooter() {
    return `${ddsPrefix}-feature-card-footer`;
  }

  static styles = styles;
}

export default DDSFeatureCard;
