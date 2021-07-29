import React, { useState } from 'react'
import { View, Text } from 'react-native'
import IAlbums from '../../../models/IAlbums';
import AlbumDetails from '../../molecules/albumDetails';
import AlbumList from '../../organisms/albumList';

 const HomeScreen: React.FC = () => {
     /*States */
    const [albums, setAlbums] = useState<IAlbums[]>([]); 
    const [currentAlbum, setCurrentAlbum] = useState<IAlbums | null >(null); 

    //console.log(currentAlbum)
     return (
         <View>
             {currentAlbum ? (
                 <AlbumDetails album={currentAlbum} setCurrentAlbum={setCurrentAlbum} />
             ) : (
             <AlbumList 
                albums={albums} 
                setAlbums={setAlbums} 
                setCurrentAlbum={setCurrentAlbum}
            />
             )}
         </View>  
     )
 }
  
 export default HomeScreen
 