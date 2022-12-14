/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => { 
  const [name, setName] = useState('style test'); 

  const [items, setItems] = useState([ 
    //  flatlist only accepts string keys
    { 
        // key: '1', 
        item: 'Item 1', 
    }, 
    { 
        // key: '2', 
        item: 'Item 2', 
    },     
    { 
        // key: '3', 
        item: 'Item 3', 
    },     
    { 
        // key: '4', 
        item: 'Item 4', 
    },     
    { 
        // key: '5', 
        item: 'Item 5', 
    },     
    { 
        // key: '6', 
        item: 'Item 6', 
    },     
    { 
        // key: '7', 
        item: 'Item 7', 
    },     
    { 
        // key: '8', 
        item: 'Item 8', 
    },     
    { 
        // key: '9', 
        item: 'Item 9', 
    },     
    { 
        // key: '45', 
        item: 'Item 10', 
    },     
    // { 
    //     key: '27', 
    //     item: 'Item 11', 
    // }, 
  ]); 

  const [DATA, setDATA] = useState([ 
    { 
        title: 'Title 1', 
        data: [ 
            'Item 1-1', 
            'Item 1-2',  
        ],
    }, 
  ]);

  const [refreshing, setRefreshing] = useState(false); 

  const onRefresh = () => { 
    setRefreshing(true); 
    const addingIndex = DATA.length + 1;

    setDATA([...DATA, { 
        title: 'title' + addingIndex,  
        data: [ 
            'item' + addingIndex + '-1', 
            'item' + addingIndex + '-2',
        ], 
    }]);
    setRefreshing(false); 
  }; 

  const onCLickHandler = () => { 
    setName('stle test is done!'); 
  };

  return ( 
    //  with scrollview, main view isn't needed anymore;
//    <View style={styles.body}> 

        //  sectionlists are optimal for nested arrays;
        <SectionList  
        keyExtractor={(item, index) => index.toString()} 
        sections={DATA} 
        renderItem={({item}) => ( 
                  <Text style={styles.text}> 
                    {item}
                  </Text> 
        )} 
        renderSectionHeader={({section}) => ( 
            <View 
            style={styles.item}> 
              <Text style={styles.text}> 
                {section.title} 
              </Text> 
            </View>  
        )} 
        refreshControl={ 
            <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            colors={['red']}/>
        } />
        //  because scrollview refreshes the entire list everytime, 
        //  and it may be bad performcance wise, we can use flatlists. 
        //  because keys are dynamically set by keyextractor, we can 
        //  have duplicate items with unique keys;
        // <FlatList 
        // keyExtractor={(item, index) => index.toString()}
        // data={items} 
        // renderItem={({item}) => ( 
        //         <View 
        //         style={styles.item}> 
        //           <Text style={styles.text}> 
        //             {item.item}
        //           </Text> 
        //         </View>  
        //     ) 
        // } 
        // refreshControl={ 
        //     <RefreshControl 
        //     refreshing={refreshing} 
        //     onRefresh={onRefresh} 
        //     colors={['red']}/>
        // } />
    // <ScrollView 
    // style={styles.body}
    // refreshControl={ 
    //     <RefreshControl 
    //     refreshing={refreshing} 
    //     onRefresh={onRefresh} 
    //     colors={['red']}/>
    // }> 
    //     {/* to show array of objects in template, 
    //     i can map the array; because each objectwhould 
    //     have a unique key, we assign one to each object through 
    //     the "key" attribute; placements are based on index assigned 
    //     by array; */}
    //     { 
    //         items.map((item) => { 
    //             return ( 
    //               <View 
    //               key={item.key}
    //               style={styles.item}> 
    //                 <Text style={styles.text}> 
    //                   {item.item}
    //                 </Text> 
    //               </View>  
    //             );
    //         })
    //     }
    // </ScrollView>
//    </View>
  );
};

const styles = StyleSheet.create({
  body: { 
    flex: 1,  
    flexDirection: 'column', 
    backgroundColor: '#313131', 
  }, 

  item: { 
    margin: 10, 
    backgroundColor: 'brown', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  
  text: { 
    color: 'lightblue', 
    fontSize: 45, 
    fontStyle: 'italic', 
    textTransform: 'uppercase', 
  }, 

  button: { 
    width: 200, 
    height: 60, 
  }, 
});

export default App;
