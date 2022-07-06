import React, {useMemo} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

type SpaceProps = {
  border?: boolean;
  height?: string | number;
  width?: string | number;
  style?: StyleProp<ViewStyle>;
};

const Space: React.FC<SpaceProps> = ({border, height, width, style}) => {
  const heightProps = useMemo(() => height || 8, [height]);
  const widthProps = useMemo(() => width || '100%', [width]);
  const backgroundColor = useMemo(
    () => (border ? '#F3F4F5' : 'transparent'),
    [border],
  );

  return (
    <View
      style={[style, {width: widthProps, height: heightProps, backgroundColor}]}
    />
  );
};

export default Space;
