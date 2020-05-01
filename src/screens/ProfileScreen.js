import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    Right,
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Tab,
    Tabs,
    View,
    Fab,
    Icon,
    Button
} from 'native-base';

function Tab1(){
    return(
        <Container style={{marginTop:10}}>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{marginTop:10}}>Name :  Shravan Meena</Text>
                  {/* <Text style={{marginTop:10}}>Wife Name : Poonam Meena Kumawat</Text>  */}
                  <Text style = { {marginTop: 10} } > Father 's Name : Satyanarayan Meenaa</Text> 
                  <Text style = {{  marginTop: 10} } > Mother 's Name : Manbhar Devi</Text> 
                  <Text style={{marginTop:10}}> Brother's Name : Ramavatar Meena</Text> 
                  <Text style={{marginTop:10}}>Sister's Name: Heena Meena</Text>
                  <Text style={{marginTop:10}}>Friend's Name: Rohit Bhai</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
        </Container>
    )
}

function Tab2(){
    return(
        <View>
            <Text>
                Tab2
            </Text>
        </View>
    )
}

function Tab3(){
    return(
        <View>
            <Text>
                Tab3
            </Text>
        </View>
    )
}


export default class Profile extends Component {
    constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/shinu.jpg')} />
              <Body>
                  <Text>Shravan Meena</Text>
                  <Text note>Jaipur</Text>
                </Body>
              </Left>

        <Right>
        <View style={{marginTop:-50}}>
          <Fab
            active={this.state.active}
            direction="left"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position = "topRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
        </Right>
        
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../img/6.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
           
          </Card>
          
        </Content>

        <Tabs tabBarBackgroundColor="red">
          <Tab heading = "General" >
            <Tab1 />
          </Tab>
          <Tab heading="Education">
            <Tab2 />
          </Tab>
          <Tab heading="Social">
            <Tab3 />
          </Tab>
        </Tabs>

        

      </Container>

        

    );
  }
}