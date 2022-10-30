import React from "react";
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import NoteDetails from "./components/NoteDetails/NoteDetails";
import NoteList from "./components/NoteList/NoteList";

export default function App() {
  const [textInput, setTextInput] = useState('');
  const [noteList, setNoteList] = useState([]);
  const [noteListItem, setNoteListItem] = useState(null);

  const handleNoteListItemClick = key => {
    const item = noteList.find(item => {
      return item.key === key
    })
    setNoteListItem(item)
  };

  const handleDeleteItem = key =>{
    let item = noteList.filter( item => {
      return item.key !== key

    })
    item = '';
    setNoteListItem(item)
  }

  let noteDetails = null;
  if(noteListItem !== null) {
      noteDetails = <NoteDetails noteListItem = {noteListItem} setNoteListItem= {setNoteListItem} handleDeleteItem={handleDeleteItem}/>
  };
  

  return (

    <View style={styles.container}>
      {noteDetails}
      <View style={styles.textInput}>
      
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={text => setTextInput(text)}
          
        />
        <View style={{ width: 100, height: 100, marginTop: 10, padding: 20 }}>
          <Button
            title="add"
            color="#2E8B57"
            onPress={() => {
              if (textInput !== '') {
                setNoteList([...noteList, {key: Math.random().toString(), value: textInput}])
              }
            }}
          />
        </View>
      </View>
      <NoteList noteList={noteList} handleNoteListItemClick={handleNoteListItemClick} />
        
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 20,

  },
  textInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 10,
    borderBottomWidth: 1,
    padding: 10,
  }
});
