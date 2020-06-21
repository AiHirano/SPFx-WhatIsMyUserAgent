import * as React from 'react';
import styles from './CheckUserAgent.module.scss';
import { ICheckUserAgentProps } from './ICheckUserAgentProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class CheckUserAgent extends React.Component<ICheckUserAgentProps, {}> {
  public render(): React.ReactElement<ICheckUserAgentProps> {
    return (
      <div className={ styles.checkUserAgent }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>What is my User Agent?</span>
              <p className={ styles.description }>
                あなたが利用している UserAgentは <strong>"{this.props.UserAgentDetails} "</strong>です。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
