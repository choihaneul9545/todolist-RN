import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = (newTodo) => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    if (newTodoItem.length > 1) {
      onAddTodo(newTodoItem);
      setNewTodoItem('');
    } else {
      Alert.alert(
        '📣 입력오류',
        '할일이 입력되지 않았습니다',
        [
          {
            text: '다시',
            onPress: () => console.log('다시 입력해보세요'),
            style: 'cancel',
          },
          {
            text: '완료',
            onPress: () => {
              onAddTodo(newTodoItem);
              setNewTodoItem('');
            },
          },
          ,
        ],
        {cancelable: false},
      );
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="What to do"
        placeholderTextColor={'#999'}
        autoCorrect={false}
        onChangeText={todoInputHandler}
        value={newTodoItem}
      />
      <TouchableOpacity style={styles.button} onPress={addTodoHandler}>
        <Text style={styles.buttonText}>➕</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 20,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
    backgroundColor: '#ededed',
    height: 50,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'green',
  },
});

export default TodoInsert;
