/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => { 
  const [name, setName] = useState('style test');

  const onCLickHandler = () => { 
    setName('stle test is done!'); 
  };

  return (
   <View style={styles.body}> 

    <View style={styles.view1}> 
      <View style={styles.subView1}> 
        <Text style={styles.text}> 
          {/* programming with {name} */} 1
        </Text> 
        {/* button doesn't have a style attribute, so i 
        created a view element and put the style attribute 
        in it */}
        {/* <View style={styles.button} >   
          <Button 
          title="update state" 
          onPress={onCLickHandler} />*/} 
      </View> 

      <View style={styles.subView2}> 
        <Text style={styles.text}> 
          2
        </Text> 
      </View> 

      <View style={styles.subView3}> 
        <Text style={styles.text}> 
          3
        </Text> 
      </View> 
    </View> 

    <View style={styles.view2}> 
      <View style={styles.subView4}> 
        <Text style={styles.text}> 
          4
        </Text> 
      </View> 

      <View style={styles.subView5}> 
        <Text style={styles.text}> 
          5
        </Text> 
      </View> 
    </View> 

    <View style={styles.view3}> 
      <View style={styles.subView6}> 
        <Text style={styles.text}> 
          6
        </Text> 
      </View> 

      <View style={styles.subView7}> 
        <Text style={styles.text}> 
          7
        </Text> 
      </View> 
    </View> 

   </View>
  );
};

const styles = StyleSheet.create({
  body: { 
    flex: 1,  
    flexDirection: 'column', 
    backgroundColor: '#313131', 
    alignItems: 'stretch', 
    justifyContent: 'center', 
    // borderWidth: 10, 
    // borderColor: 'grey', 
    // borderRadius: 10, 
    // margin: 40, 
    // width: 400, 
    //  flex property disables height property,  
    //  flexdirection doesn't
    // height: '60%', 
  }, 
  
  text: { 
    color: '#313131', 
    fontSize: 20, 
    fontStyle: 'italic', 
    textTransform: 'uppercase', 
  }, 

  button: { 
    width: 200, 
    height: 60, 
  }, 

  view1: { 
    //  flex itsm given flex property will take as much space 
    //  as they can in height, and depending on content in width; 
    //  the value sets how much partitions of screen space to take;
    flex: 1, 
    flexDirection: 'row', 
    // width: 100, 
    // height: 100, 
    backgroundColor: 'crimson', 
    alignItems: 'stretch', 
    justifyContent: 'center', 
  }, 

  subView1: { 
    flex: 2, 
    backgroundColor: 'crimson', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },  

  subView2: { 
    flex: 3, 
    backgroundColor: 'purple', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 

  subView3: { 
    flex: 5, 
    backgroundColor: 'brown', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  
  view2: { 
    flex: 2, 
    // width: 100, 
    // height: 100, 
    backgroundColor: 'brown', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },  

  subView4: { 
    flex: 1, 
    width: '100%', 
    backgroundColor: 'orange', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 

  subView5: { 
    flex: 1, 
    width: '100%', 
    backgroundColor: 'lightblue', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  
  view3: {  
    //  assigning flex property to all flex items, with same value 
    //  will make them take equal space;
    flex: 7, 
    // width: 100, 
    // height: 100, 
    flexDirection: 'row', 
    backgroundColor: 'orange', 
    alignItems: 'stretch', 
    justifyContent: 'center', 
  }, 

  subView6: { 
    flex: 1, 
    backgroundColor: 'green', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 

  subView7: { 
    flex: 1, 
    backgroundColor: 'pink', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
});

export default App;
