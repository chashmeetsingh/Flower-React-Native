import React from "react";
import styleSheet from "../screens/AppScreens/Onboarding/Styles/styles";
import FitImage from "react-native-fit-image";
import {View} from "react-native";
import {connect} from 'react-redux';

interface ImageContainerStates {
    height: number,
    width: number
}


class ImageContainer extends React.Component<any, ImageContainerStates>{
    constructor(props){
        super(props);
        this.state = {
            height:0,
            width:0
        }
    }

    private setViewDimensions = (event) => {
        const layout = event.nativeEvent.layout;
        const {x, y, width, height} = layout;
        this.setState({
            height,
            width
        })
    };

    render() {
        return (
            <View style={styleSheet.imageContainer} onLayout={(event) => { this.setViewDimensions(event) }}>
                <FitImage
                    style={[styleSheet.image,{backgroundColor:this.props.selectedTheme,flex:0,width:this.state.width,height:this.state.height}]}
                    source={this.props.source}
                    // resizeMode="contain"
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps)(ImageContainer);