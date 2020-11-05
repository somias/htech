import React from 'react';
import Interface from './Interface';

import { DrawerActions } from '@react-navigation/native';

export default ({ navigation }: any) => {
  const onPress = () => navigation.dispatch(DrawerActions.toggleDrawer());
  return <Interface onPress={onPress} />;
};
