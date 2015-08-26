import React, {Component} from 'react';
import ThemeManager from 'components/ThemeManager';

class UiComponent extends Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
}

export default UiComponent;
