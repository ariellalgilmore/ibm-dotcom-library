/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement, html, query } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import DDSFeatureCard from '../feature-card/feature-card';
import DDSFeatureCardBlockLargeFooter from './feature-card-block-large-footer';
import '../image/image';
import styles from './feature-card-block-large.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Feature Card Block Large.
 *
 * @element dds-feature-card-block-large
 */
@customElement(`${ddsPrefix}-feature-card-block-large`)
class DDSFeatureCardBlockLarge extends StableSelectorMixin(DDSFeatureCard) {
  render() {
    return html`
      <div class="${prefix}--feature-card-block-large__container">
        ${super.render()}
      </div>
    `;
  }

  @query(`div:not(.${prefix}--feature-card-block-large__container)`)
  protected _linkNode?: HTMLDivElement | HTMLParagraphElement;

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('href')) {
      const footer = this.querySelector((this.constructor as typeof DDSFeatureCardBlockLarge).selectorFooter);
      if (footer) {
        (footer as DDSFeatureCardBlockLargeFooter).href = this.href;
      }
    }
    const { _linkNode: linkNode } = this;
    if (linkNode) {
      linkNode.classList.remove(`${prefix}--feature-card`);
      linkNode.classList.add(`${prefix}--feature-card-block-large`);
    }
  }

  static get selectorFooter() {
    return `${ddsPrefix}-feature-card-block-large-footer`;
  }

  static styles = styles;
}

export default DDSFeatureCardBlockLarge;
