import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  image: {
    flex: 1,
    shadowColor: '#000',
    borderRadius: 20,
  },
  center: {
    width: 300,
    height: 420,
    // backgroundColor: 'red',
  },
  SHADOWcONTAINER: {
    flex:1,
    borderRadius:20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 9,
  },
});
