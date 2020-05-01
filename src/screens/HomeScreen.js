import React,{Component,useState} from 'react'
import {
   
    TextInput,
    StyleSheet,
    Image,Dimensions,ScrollView
} from 'react-native'

import {
    View,
    Content,
    Button,
    Text,
    Container,
    Header,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Left,
    Body,
    Icon
} from 'native-base';

const locations = [
    {
        image: require('../img/1.jpg'),
        subtitle: 'Jaipur'
    }
]

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../img/10.jpg'),
  },
    {
    text: 'Card One',
    name: 'One',
    image: require('../img/1.jpg'),
  },
    {
    text: 'Card One',
    name: 'One',
    image: require('../img/5.jpg'),
  },

];

const width = Dimensions.get('window')

export default function Home() {
const [text, setText] = useState('');

    return (
        <ScrollView>
        <View>
            <View>
                <Image source={require('../img/7.jpg')} style={{width:width.width,height:180}}/>
                <Text style={{textAlign:'center',flex:1,marginTop:-120,marginBottom:110,fontSize:32,fontWeight:'700',color:'white',backgroundColor:'transparent',marginHorizontal:16}}>
                    What can we help you
                </Text>
             </View>
            {/* Text input for searching start */}
            <View style={{ flex: 1,marginTop:-70,marginBottom:10}}>
            <TextInput
                    style = {
                        {
                            height: 50,
                            backgroundColor: 'white',
                            elevation:5,
                            marginHorizontal:9,
                            marginVertical:8,
                            paddingLeft:20,
                            borderRadius:3
                        }
                    }
                    placeholder="Find your home here..!"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
            </View>
            {/* Text input for searching End */}

            {/* Home Location for searching start */}
           <View View style = {{flex: 1 } } >
               <View>
                    <Text Text style = { { fontSize: 24, fontWeight: '700',marginLeft:9 } } >
                         Select Location:
                    </Text>
                </View>

            <View View View style = { { flexDirection: 'row',  flexWrap: 'wrap',marginTop: 12}   } >
                
                <View style={{marginLeft:9,marginTop:5}}>
                    <Image 
                    style={{height:80,width:width.width/3.3,resizeMode:'cover',borderRadius:3}}
                    source={require('../img/9.jpg')} />
                    <Text style={{textAlign:'center',fontSize:16}}> Jaipur </Text>
                </View>

                <View style={{marginLeft:9,marginTop:5}}>
                    <Image 
                    style={{height:80,width:width.width/3.3,resizeMode:'cover',borderRadius:3}}
                    source={require('../img/8.jpg') }/>
                    <Text style={{textAlign:'center',fontSize:16}}> Ajmer</Text>
                </View>
                <View style={{marginLeft:9,marginTop:5}}>
                    <Image 
                    style={{height:80,width:width.width/3.3,resizeMode:'cover',borderRadius:3}}
                    source={require('../img/3.jpg') }/>
                    <Text style={{textAlign:'center',fontSize:16}}> Kanpur</Text>
                </View>
                <View style={{marginLeft:9,marginTop:5}}>
                    <Image 
                    style={{height:80,width:width.width/3.3,resizeMode:'cover',borderRadius:3}}
                    source={require('../img/4.jpg') }/>
                    <Text style={{textAlign:'center',fontSize:16}}> Delhi</Text>
                </View>
                <View style={{marginLeft:9,marginTop:5}}>
                    <Image 
                    style={{height:80,width:width.width/3.3,resizeMode:'cover',borderRadius:3}}
                    source={require('../img/5.jpg') }/>
                    <Text style={{textAlign:'center',fontSize:16}}> Mumbai</Text>
                </View>
                <View style={{marginLeft:9,marginTop:5}}>
                    <Image 
                    style={{height:80,width:width.width/3.3,resizeMode:'cover',borderRadius:3}}
                    source={require('../img/6.jpg') }/>
                    <Text style={{textAlign:'center',fontSize:16}}> Kota</Text>
                </View>
       
            </View>

           </View>

            {/* Home LOacation input for searching End */}

            {/* Slider input for searching Start */}

            <ScrollView
            horizontal = {
                true
            }
            showsHorizontalScrollIndicator = {
                false
            } >

                        <View View style = {
                            {
                                flexDirection: 'row',
                                flex: 1,
                                paddingTop: 20,
                                width:null
                            }
                        } >
                            
                            <View style = {
                                { marginTop: 5}
                            } >
                                <Image 
                                style={{height:180,width:width.width,resizeMode:'cover',borderRadius:3}}
                                source={require('../img/4.jpg') }/>
                                {/* <Text style={{textAlign:'center',fontSize:16}}> Kota</Text> */}
                            </View>
                            <View style={{marginTop:5}}>
                                <Image 
                                style={{height:180,width:width.width,resizeMode:'cover',borderRadius:3}}
                                source={require('../img/6.jpg') }/>
                                {/* <Text style={{textAlign:'center',fontSize:16}}> Kota</Text> */}
                            </View>
                            <View style={{marginTop:5}}>
                                <Image 
                                style={{height:180,width:width.width,resizeMode:'cover',borderRadius:3}}
                                source={require('../img/8.jpg') }/>
                                {/* <Text style={{textAlign:'center',fontSize:16}}> Kota</Text> */}
                            </View>
                            <View style={{marginTop:5}}>
                                <Image 
                                style={{height:180,width:width.width,resizeMode:'cover',borderRadius:3}}
                                source={require('../img/10.jpg') }/>
                                {/* <Text style={{textAlign:'center',fontSize:16}}> Kota</Text> */}
                            </View>
                        </View>
                        {/* Slider LOacation input for searching End */}

            </ScrollView>

        </View>

    <Container>
        <View>
          <DeckSwiper 
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>

        </ScrollView>
    )
}
