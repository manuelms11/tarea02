import React, { useState } from 'react';
import {
   SafeAreaView,
} from 'react-native';
import HomeScreen from './src/components/screens/HomeScreen';
import IAlbums from './src/models/IAlbums';

 const App = () => {
  const [albums, setAlbums] = useState<IAlbums[]>([]); 
   return (
     <SafeAreaView> 
       <HomeScreen />
     </SafeAreaView>
   );
 };

 export default App;
