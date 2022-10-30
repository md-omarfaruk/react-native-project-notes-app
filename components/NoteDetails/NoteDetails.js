import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';


const NoteDetails = (props) => {
    return (
        <Modal>
            <View>
                <Text style ={styles.noteDetails}>
                    {props.noteListItem.value}
                    </Text>
                <View style={{ width: 200, height: 100, padding: 20 }}>
                    <Button
                        title='Delete Note'
                        onPress={()=> props.handleDeleteItem(props.noteListItem.key)}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    noteDetails: {
        fontSize: 15,
        marginTop: 100,
        margin: 20,
    },
    
});

export default NoteDetails;