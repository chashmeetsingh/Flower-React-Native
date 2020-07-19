import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions, ImageBackground,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface SnapCarouselStates {
    entries: Entries[];
}

interface Entries {
    title: string;
    subtitle: string;
    illustration: string;
}

const {width: screenWidth} = Dimensions.get('window');

class SnapCarousel extends React.Component<any, SnapCarouselStates> {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {
                    title: 'Beautiful and dramatic Antelope Canyon',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://i.imgur.com/UYiroysl.jpg',
                },
                {
                    title: 'Earlier this morning, NYC',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
                },
                {
                    title: 'White Pocket Sunset',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
                },
                {
                    title: 'Acrocorinth, Greece',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
                },
                {
                    title: 'The lone tree, majestic landscape of New Zealand',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
                },
                {
                    title: 'Middle Earth, Germany',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
                },
            ],
        };
    }

    _renderItem({item, index}) {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: '10%',
                    marginBottom: '25%',
                    backgroundColor: '#E2E2E2',
                    borderRadius: 20,
                }}>
                <ImageBackground source={{uri: item.illustration}}
                                 style={{width: '100%', height: '100%', resizeMode: ''}}>
                    <Text style={{padding: '10%', color:'#FFF'}}>{item.title}</Text>
                    <Text style={{padding: '10%', color:'#FFF'}}>{item.subtitle}</Text>
                </ImageBackground>
            </View>
        );
    }

    render() {
        let sliderWidth = (screenWidth * 10) / 13;
        let itemWidth = sliderWidth - 60;
        return (
            <View style={{flex: 1, alignSelf: 'center'}}>
                <Carousel
                    data={this.state.entries}
                    layout={'default'}
                    renderItem={this._renderItem}
                    containerCustomStyle={{flex: 1}}
                    slideStyle={{flex: 1}}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    removeClippedSubviews={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default SnapCarousel;
