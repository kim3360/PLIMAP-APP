import {Text, TextInput} from 'react-native';
import {fontFamily} from './typography';

type ComponentWithDefaults = {
  defaultProps?: {style?: object | object[]};
};

/**
 * React Native는 웹처럼 폰트가 상속되지 않으므로
 * Text/TextInput 기본 fontFamily를 Pretendard로 맞춥니다.
 */
export function applyDefaultFont() {
  const textComponent = Text as unknown as ComponentWithDefaults;
  const inputComponent = TextInput as unknown as ComponentWithDefaults;
  const baseStyle = {fontFamily: fontFamily.regular};

  textComponent.defaultProps = {
    ...textComponent.defaultProps,
    style: [textComponent.defaultProps?.style, baseStyle],
  };

  inputComponent.defaultProps = {
    ...inputComponent.defaultProps,
    style: [inputComponent.defaultProps?.style, baseStyle],
  };
}
