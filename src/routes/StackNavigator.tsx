import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import babelConfig from '../../babel.config';
import { Movies } from '../interfaces/MovieInterfaces';
export type RootStackParams={
  Home: undefined;
  Detail: Movies;
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false,
    cardStyle:{
        backgroundColor:'white'
    }
    }}

    >
      <Stack.Screen name="Home"  component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}