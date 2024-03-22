import {
  TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import { func, string } from 'prop-types';

export default function WideButton(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

WideButton.propTypes = {
  label: string.isRequired,
  onPress: func,
};

WideButton.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
});
