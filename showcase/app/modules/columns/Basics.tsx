import * as React from 'react';
import { Color, HelperStyle } from 'rebul/lib/base/css';
import { Content } from 'rebul/lib/elements/content';
import { Notification } from 'rebul/lib/elements/notification';
import { Column, Columns } from 'rebul/lib/grid/column';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Basics extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page title="Columns" subTitle="A simple way to build responsive columns">
        <Content>
          <p>Building a columns layout with Bulma is very simple:</p>
          <ol>
            <li>Add a <code>Columns</code> container</li>
            <li>Add as many <code>Column</code> elements as you want</li>
          </ol>
          <p>Each column will have an equal width, no matter the number of columns.</p>

          <Columns>
            <Column>
              <Notification color={Color.info} className={HelperStyle.hasTextCentered}>First column</Notification>
            </Column>
            <Column>
              <Notification color={Color.success} className={HelperStyle.hasTextCentered}>Second column</Notification>
            </Column>
            <Column>
              <Notification color={Color.warning} className={HelperStyle.hasTextCentered}>Third column</Notification>
            </Column>
            <Column>
              <Notification color={Color.danger} className={HelperStyle.hasTextCentered}>Fourth column</Notification>
            </Column>
          </Columns>
        </Content>
      </Page>
    );
  }
}
