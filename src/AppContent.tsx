import React from 'react';
import { TouchableOpacity, View } from "react-native";
import { useAppSelector } from './hooks/useAppSelector';
import { startLoading, stopLoading } from './store/redux/loading/loadingSlice';
import useDispatch from './hooks/useDispatch';
import Text from './components/Text/Text';

const AppContent: React.FC = () => {

  const { isLoading, loadingCounter } = useAppSelector((state) => state.loading)
  const dispatch = useDispatch()

  return (
    <View>
      <Text />
    </View>
  )
}

export default AppContent;