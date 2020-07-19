import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native';

export default class TabArticles extends React.Component {



  render(){
      const width = Dimensions.get('window').width - 8*2*4;
      return (
          <ImageBackground style={{flex: 1, display: 'flex'}} source={require('./yellowbanner.png')}>
              <View style={{flex: 2, justifyContent: 'flex-end'}}>
                  <View style={{display: 'flex',alignContent: 'flex-end'}}>
                      <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 8}}>
                              <Text style={{height: 38,	color: '#424242', fontSize: 28,	fontWeight: 'bold',	lineHeight: 38, marginLeft: 20, marginBottom: 20}}>Forums</Text>
                          </View>

                          <View style={{flex: 2, marginTop: 10, marginRight: 40, alignItems: 'flex-end'}}>
                              <Image source={require('./search.png')} />
                          </View>
                      </View>

                      <View style={{flexDirection: 'row', marginTop: -20}}>
                          <View style={{backgroundColor: 'rgba(255,255,255,0.3)', padding: 10, margin: 8, width: width/4, height: width / 4, justifyContent: 'center', borderRadius: width/8, alignItems: 'center'}}>
                              <Text>Nutrition</Text>
                          </View>
                          <View style={{backgroundColor: 'rgba(255,255,255,0.3)', padding: 10, margin: 8, width: width/4, height: width / 4, justifyContent: 'center', borderRadius: width/8, alignItems: 'center'}}>
                              <Text>Beauty</Text>
                          </View>
                          <View style={{backgroundColor: 'rgba(255,255,255,0.3)', padding: 10, margin: 8, width: width/4, height: width / 4, justifyContent: 'center', borderRadius: width/8, alignItems: 'center'}}>
                              <Text>Health</Text>
                          </View>
                          <View style={{backgroundColor: 'rgba(255,255,255,0.3)', padding: 10, margin: 8, width: width/4, height: width / 4, justifyContent: 'center', borderRadius: width/8, alignItems: 'center'}}>
                              <Text>Self-Care</Text>
                          </View>

                      </View>

                  </View>
              </View>

              <View style={{flex: 6, backgroundColor: '#FBFAFF', borderRadius: 22}}>
                  <View style={{flexDirection: 'row', marginTop: 20}}>
                      <View style={{flex: 1, marginLeft: 20}}>
                          <Text style={{color: '#F58015',	fontSize: 15,	fontWeight: 'bold',}}>Beauty</Text>
                      </View>
                      <View style={{flex: 1}}>
                          <Text style={{textAlign: 'right', marginRight: 20, color: 'rgba(52,52,52,0.4)',	fontSize: 15,	fontWeight: 'bold',	}}>34 articles found</Text>
                      </View>
                  </View>

                  <View style={{height: 177,	borderRadius: 10,	backgroundColor: 'white',	shadowColor: 'rgba(52,52,52,0.05)',
                      margin: 16}}>
                      <View style={{flexDirection: 'row', marginTop: 10}}>
                          <Text style={{marginLeft: 10, flex: 1, color: '#424242',	fontSize: 17,	fontWeight: '800'}}>Hair Removal</Text>
                          <Text style={{textAlign: 'right', flex: 1, marginRight: 10, height: 23,	color: 'rgba(52,52,52,0.4)',	fontSize: 17,	fontWeight: '800'}}>17 Nov 2019</Text>
                      </View>
                      <Text style={{margin: 12, color: '#424242',	fontSize: 17,}}>Discussion about getting rid of that unwanted hair. Electrolysis, Laser, Shaving, Waxing, and experiences.</Text>
                      <Text style={{height: 23, color: 'rgba(52,52,52,0.4)',		fontSize: 17,	fontWeight: 'bold', margin: 12}}>Topics: 283 Posts: 2,705</Text>
                  </View>

                  <View style={{height: 177,	borderRadius: 10,	backgroundColor: 'white',	shadowColor: 'rgba(52,52,52,0.05)',
                      margin: 16}}>
                      <View style={{flexDirection: 'row', marginTop: 10}}>
                          <Text style={{marginLeft: 10, flex: 1, color: '#424242',	fontSize: 17,	fontWeight: '800'}}>Birth Control</Text>
                          <Text style={{textAlign: 'right', flex: 1, marginRight: 10, height: 23,	color: 'rgba(52,52,52,0.4)',	fontSize: 17,	fontWeight: '800'}}>14 Nov 2019</Text>
                      </View>
                      <Text style={{margin: 12, color: '#424242',	fontSize: 17,}}>Discussions on the different brands of birth control, their pros & cons, personal experiences, & other related issues.</Text>
                      <Text style={{height: 23, color: 'rgba(52,52,52,0.4)',		fontSize: 17,	fontWeight: 'bold', margin: 12}}>Topics: 2,055 Posts: 10,094</Text>
                  </View>

                  <View style={{height: 177,	borderRadius: 10,	backgroundColor: 'white',	shadowColor: 'rgba(52,52,52,0.05)',
                      margin: 16}}>
                      <View style={{flexDirection: 'row', marginTop: 10}}>
                          <Text style={{marginLeft: 10, flex: 1, color: '#424242',	fontSize: 17,	fontWeight: '800'}}>Skin Care</Text>
                          <Text style={{textAlign: 'right', flex: 1, marginRight: 10, height: 23,	color: 'rgba(52,52,52,0.4)',	fontSize: 17,	fontWeight: '800'}}>17 Nov 2019</Text>
                      </View>
                      <Text style={{margin: 12, color: '#424242',	fontSize: 17,}}>It's very important to be taking care of that skin these days. Discuss Acne, tanning, rosacea, and varicose veins here.</Text>
                      <Text style={{height: 23, color: 'rgba(52,52,52,0.4)',		fontSize: 17,	fontWeight: 'bold', margin: 12}}>Topics: 232 Posts: 2,005</Text>
                  </View>


              </View>
          </ImageBackground>
      )

  }

}