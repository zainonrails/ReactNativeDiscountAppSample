import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, Image, ScrollView, FlatList} from 'react-native';
import ListItem from './ListItem';
import Card from './Card';


data = [
  'Title1', 'Title2', 'Title3', 'Title4', 'Title5'
]
export default class SavedList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
           {/* <FlatList

                    data={data}
                    renderItem={({item, index}) => (
                        <ListItem title={item}></ListItem>
                    )}
                    keyExtractor={i => i}

                /> */}

            <Card height={100} >
              <Text>Hello text in card</Text>
            </Card>
       </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9e74e8'
  },
});
