import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle, FontIcon} from 'material-ui';
import UiComponent from 'components/UiComponent';

class Mainbar extends UiComponent {
  render() {
    return <Toolbar>
      <ToolbarGroup float="left">
        <ToolbarTitle text="Picture" />
      </ToolbarGroup>
      <ToolbarGroup float="right">
        <FontIcon className="material-icons">home</FontIcon>
      </ToolbarGroup>
    </Toolbar>
  }
}

export default Mainbar;
