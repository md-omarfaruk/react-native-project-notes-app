import React from 'react';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const NoteList = (props) => {
    return (
        <TouchableWithoutFeedback>
            <FlatList
                style={{
                    width: "100%"
                }}
                data={props.noteList}
                renderItem={(info) => {
                    return (
                        <View style={styles.noteListItem}>
                            <Text
                                onPress={() => props.handleNoteListItemClick(info.item.key)}>
                                {info.item.value}
                            </Text>
                        </View>
                    )
                }}
            />

        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    noteListItem: {
        width: '100%',
        padding: 10,
        backgroundColor: "#eee",
        margin: 10,
    }
});

export default NoteList;