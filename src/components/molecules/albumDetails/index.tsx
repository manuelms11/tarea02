import styled from '@emotion/native';
import React, { Component } from 'react';
import {View, Text, Button, FlatList, Image, StyleSheet} from 'react-native';
import IAlbums from '../../../models/IAlbums';


interface AlbumDetailsProps {
  album: IAlbums;
  setCurrentAlbum: React.Dispatch<React.SetStateAction<IAlbums | null>>;
}

export default class AlbumDetails extends React.Component<AlbumDetailsProps>{
  render(){
    return(
      <>   
      <Container>        
        <Text>{  this.props.album.title}</Text>
        <Image style={styles.image} source={{ uri: this.props.album.url}}></Image>     
      </Container>
      <View>
        <Button title="Back" onPress={() => this.props.setCurrentAlbum(null)} />
      </View>
    </>
    )
  }
}

/*const AlbumDetails: React.FC<AlbumDetails> = ({album, setCurrentAlbum}) => {
  
  return ( 
    <>   
      <Container>        
        <Text>{album.title}</Text>
        <Image style={styles.image} source={{ uri: album.url}}></Image>     
      </Container>
      <View>
        <Button title="Back" onPress={() => setCurrentAlbum(null)} />
      </View>
    </>
  );
};*/

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 500,    
  },
})

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CustomText = styled.Text`
  width: 85%;
`;

