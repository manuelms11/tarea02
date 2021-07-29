import React, {useEffect, useState,} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import axios  from 'axios';
import IAlbums from '../../../models/IAlbums';
import IPhoto from '../../../models/IPhoto';

interface AlbumsProps{
    albums: IAlbums[];
    setAlbums: React.Dispatch<React.SetStateAction<IAlbums[]>>;
    setCurrentAlbum: React.Dispatch<React.SetStateAction<IAlbums | null  >>;
}



const AlbumList: React.FC<AlbumsProps> = ({albums,setCurrentAlbum,setAlbums}) => {
    const [isLoading, setIsLoading] = useState(false);

    const fetchAlbums = async () => {
        try {
          setIsLoading(true);
          const albumResponse  = await axios.get( 
            'https://jsonplaceholder.typicode.com/albums',
          ); 

          const photoResponse  = await axios.get(  
            'https://jsonplaceholder.typicode.com/photos',
          );  
          
         /* const albums = (albumResponse.data as IAlbums[]).map(album => ({
            ...album,
            photo: (photoResponse.data as IPhoto[]).filter(album.id === photo)
          }))*/

          const albums = (albumResponse.data as IAlbums[]).map((album) =>({
            ...album,
            thumbnaiUrl: (photoResponse.data as IPhoto[]).find( (photo) => photo.albumId === album.id,)?.thumbnailUrl,
            url: (photoResponse.data as IPhoto[]).find((photo) => photo.albumId === album.id,)?.url,          
          }));

          (albumResponse.data as IAlbums[]).map((album) => {
            console.log(album)
          })
          
          
          setAlbums(albums);
          setIsLoading(false);

          console.log('TEST')
          console.log(albums)
          //console.log(albumResponse)
          //console.log(photoResponse)
          //setAlbums(albumResponse);
        } catch (error) {
          console.error(error);
        }      
    };
 
    const onAlbumClick = (album: IAlbums) => {
      setCurrentAlbum(album);
    };  

    useEffect(() => {
      
      fetchAlbums();
    }, [])

    const styles = StyleSheet.create({
      image: {
        width: 50,
        height: 50,    
      },
      item: {
        backgroundColor: '#e0f2f1',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      itemLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
      },
      itemText: {
        maxWidth: '80%',
      },
    })

    return (
        <View>
          {isLoading ? ( 
            <ActivityIndicator size="large" color="#0000ff"  />
          ) : (    
            <FlatList 
                pagingEnabled 
                data={albums ? albums : []}
               // renderItem={({item}) => <text>{item.title}</text>}
               renderItem = {({ item }) => {  
               // console.log(item)
                    return (
                      <View style={styles.item}>                        
                          <TouchableOpacity style={styles.itemLeft} onPress={() => onAlbumClick(item)}>
                              <Text style={styles.itemText}>{item.title}</Text>                          
                              <Image style={styles.image} source={{ uri: item.thumbnaiUrl}}></Image>                                             
                          </TouchableOpacity>
                      </View>
                    )
                  }
                }
            />
          )}
        </View>
    );
};

export default AlbumList
