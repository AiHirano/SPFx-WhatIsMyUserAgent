import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CheckUserAgentWebPartStrings';
import CheckUserAgent from './components/CheckUserAgent';
import { ICheckUserAgentProps } from './components/ICheckUserAgentProps';

export interface ICheckUserAgentWebPartProps {
  UserAgentDetails: string;
}

export default class CheckUserAgentWebPart extends BaseClientSideWebPart <ICheckUserAgentWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICheckUserAgentProps> = React.createElement(
      CheckUserAgent,
      {
        UserAgentDetails:this.userAgent()
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected userAgent=()=>{return window.navigator.userAgent;};

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  /*
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }*/
}
