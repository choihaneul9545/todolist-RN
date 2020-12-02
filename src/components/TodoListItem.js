import React from 'react';
import styled from 'styled-components';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.completeCircle}>
          <Text style={styles.controlButton}>{checked ? '✅' : '📌'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.text} onPressOut={onToggle(id)}>
        <LineText checked={checked} style={styles.unstrikeText}>
          {textValue}
        </LineText>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.completeCircle}>
          <Text style={styles.controlButton} onPress={onRemove(id)}>
            🗑
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  unstrikeText: {
    fontWeight: '500',
    fontSize: 18,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  controlButton: {
    fontSize: 24,
  },
});

const LineText = styled.Text`
  color: ${({checked}) => (checked ? '#afafaf' : '#29323c')};
  text-decoration: ${({checked}) =>
    checked ? 'line-through #afafaf' : '#29323c'};
`;

export default TodoListItem;
