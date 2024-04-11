import {
  Card,
  Icon,
  Text,
} from 'react-native-paper';

function HistoryButton({ onPress }) {
  return (
    <Card mode="outlined" onPress={onPress}>
      <Card.Content style={{ alignItems: 'center' }}>
        <Text variant="titleLarge">履歴</Text>
        <Icon source="clock-outline" size={100} />
      </Card.Content>
    </Card>
  );
}

export default HistoryButton;
