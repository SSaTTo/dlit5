import React, { Component} from 'react';
import Overlay from 'react-native-modal-overlay';
 
export default class ClubClick extends Component {
  state = {
    modalVisible: true, 
  }
  
  onClose = () => this.setState({ modalVisible: false});
  
  render() {
    return (
        <Overlay visible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside>
          <Text>Some Modal Content</Text>
        </Overlay>
    );
  }
}