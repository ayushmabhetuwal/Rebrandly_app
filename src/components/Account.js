
import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Explore from 'material-ui/svg-icons/action/explore';
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router';

class Account extends Component {
    render(){
        return(
            <div>
                  <IconMenu iconButtonElement={<IconButton><AccountBox color={"#FFF"}/></IconButton>} 
                              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                            <MenuItem primaryText={this.props.email} />
                            <MenuItem primaryText="Sign out" onClick={() => this.signOut() } />
                    </IconMenu>
                
            </div>
        )
    }
    signOut() {
    sessionStorage.clear();
    this.props.history.push('/')
  }
}
export default withRouter(Account);