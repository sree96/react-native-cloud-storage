import * as React from 'react';

import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import RNCloudStorage, { StorageScope } from 'react-native-cloud-storage';

const cloudStorage = new RNCloudStorage();

export default function App() {
  const [exists, setExists] = React.useState(false);
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    readFile();
  }, []);

  const readFile = async () => {
    if (await cloudStorage.fileExists('test.txt', StorageScope.Documents)) {
      setExists(true);
      setInput(await cloudStorage.readFile('test.txt', StorageScope.Documents));
    } else {
      setExists(false);
      setInput('');
    }
  };

  const handleCreate = async () => {
    await cloudStorage.createFile('test.txt', input, StorageScope.Documents, true);
    readFile();
  };

  const handleRead = readFile;

  const handleDelete = async () => {
    await cloudStorage.deleteFile('test.txt', StorageScope.Documents);
    readFile();
  };

  return (
    <View style={styles.container}>
      <Text>Test file exists: {exists ? 'yes' : 'no'}</Text>
      <TextInput value={input} onChangeText={setInput} style={styles.input} />
      <Button title="Create file" onPress={handleCreate} />
      <Button title="Read file" onPress={handleRead} />
      <Button title="Delete file" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
