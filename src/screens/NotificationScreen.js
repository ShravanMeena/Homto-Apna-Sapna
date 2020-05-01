import React from 'react'
import {
    Container,
    Header,
    View,
    Thumbnail,
    Left,
    Content,
    Card,
    Text,
    CardItem,
    Body
} from "native-base";


export default function Notification() {
    return (
            <Container>
                <Content padder>
                    <Text style={{textAlign:'center',flex:1,fontWeight:'700',fontSize:32,marginTop:10}}>
                        Notifications
                    </Text>
                <Card transparent>
                    <CardItem>
                     <Left>
                       <Thumbnail source={require('../img/5.jpg')} />
                      <Body>
                        <Text style={{color:'gray',flex:1,marginTop:7}}>
                            Hey! shravan your room was booked! Congratulations dear
                        </Text>
                      </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                     <Left>
                       <Thumbnail source={require('../img/5.jpg')} />
                      <Body>
                        <Text style={{color:'gray',flex:1,marginTop:7}}>
                            Whoaa! i am glad to telling you..you win 1 months free room rent!
                        </Text>
                      </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                     <Left>
                       <Thumbnail source={require('../img/5.jpg')} />
                      <Body>
                        <Text style={{color:'gray',flex:1,marginTop:7}}>
                            Hey! shravan your room was booked! Congratulations dear
                        </Text>
                      </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                     <Left>
                       <Thumbnail source={require('../img/5.jpg')} />
                      <Body>
                        <Text style={{color:'gray',flex:1,marginTop:7}}>
                            Hey! shravan your room was booked! Congratulations dear
                        </Text>
                      </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                     <Left>
                       <Thumbnail source={require('../img/5.jpg')} />
                      <Body>
                        <Text style={{color:'gray',flex:1,marginTop:7}}>
                            Whoaa! i am glad to telling you..you win 1 months free room rent!
                        </Text>
                      </Body>
                    </Left>
                    </CardItem>
                </Card>
                </Content>
            </Container>
    )
}
