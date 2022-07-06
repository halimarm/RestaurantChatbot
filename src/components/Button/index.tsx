import React, {memo} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  height?: number;
  width?: number;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  [rest: string]: any;
};

const Button = ({
  title,
  onPress,
  height,
  width,
  isLoading = false,
  style,
  ...rest
}: ButtonProps) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1D74F5',
      height: height || 46,
      width: width || 'auto',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#1D74F5',
      paddingHorizontal: 12,
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
      color: '#fff',
    },
  });

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={1}
      {...rest}>
      <View style={styles.contentContainer}>
        {isLoading ? (
          <ActivityIndicator animating size="small" />
        ) : (
          <>
            <Text style={styles.text}>{title}</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default memo(Button);
