import {
  TouchableOpacity, Text, StyleSheet, Dimensions,
} from 'react-native';
import { func, string } from 'prop-types';

export default function HalfWideButton(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

HalfWideButton.propTypes = {
  label: string.isRequired,
  onPress: func,
};

HalfWideButton.defaultProps = {
  onPress: null,
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 4,
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 32,
    textAlign: 'center',
  },
});
