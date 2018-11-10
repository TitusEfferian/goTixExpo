import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SECONDARY_COLOR } from '../style/style';

export default class LogoTitle extends React.Component {
    render() {
      return (
        <Icon
          name='ticket-percent'
          color={SECONDARY_COLOR}
          size={24}
        />
      );
    }
  }