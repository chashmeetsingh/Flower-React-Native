import React, {Component} from 'react';
import styled from 'styled-components';

export default class SymptomsCard extends Component<any, any> {
  state = {
    optionsSelected: [],
    defaultColor: 'white',
    statusImage: require('../../../../../assets/images/cancel.png'),
    multiSelect: true,
  };

  optionSelected = index => {
    this.setState(
      {
        optionsSelected: this.props.multiSelect
          ? this.state.optionsSelected.indexOf(index) < 0
            ? [...this.state.optionsSelected, index]
            : this.state.optionsSelected.filter(idx => idx !== index)
          : this.state.optionsSelected.indexOf(index) < 0
          ? [index]
          : [],
      },
      () => {
        this.updateStatusImage();
      },
    );
  };

  updateStatusImage = () => {
    this.setState(
      {
        statusImage:
          this.state.optionsSelected.length > 0
            ? require('../../../../../assets/images/check.png')
            : require('../../../../../assets/images/cancel.png'),
      },
      () =>
        this.props.updateCurrentCard(
          this.state.optionsSelected.length > 0
            ? this.props.id + 1
            : this.props.id,
        ),
    );
  };

  render() {
    return (
      <Container
        style={{
          backgroundColor:
            this.props.currentCard == this.props.id
              ? 'rgba(253,209,43,0.5)'
              : 'rgba(52, 52, 52, 0.05)',
        }}>
        <Wrapper>
          <HeaderImage source={this.props.headerImage} />
          <Title>{this.props.title}</Title>
          <Button>
            <StatusImage source={this.state.statusImage} />
          </Button>
        </Wrapper>
        <OptionsContainer>
          {this.props.options.map((option, index) => {
            return (
              <OptionButton
                onPress={() => this.optionSelected(index)}
                style={{
                  backgroundColor:
                    this.state.optionsSelected.indexOf(index) >= 0
                      ? option.color
                      : 'white',
                }}>
                <OptionText
                  style={{
                    color:
                      this.state.optionsSelected.indexOf(index) >= 0
                        ? 'white'
                        : option.color,
                  }}>
                  {option['ptype']}
                </OptionText>
              </OptionButton>
            );
          })}
        </OptionsContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  background: rgba(52, 52, 52, 0.05);
  border-radius: 15px;
  margin: 20px;
  elevation: 0;
  padding: 16px;
`;

const HeaderImage = styled.Image`
  width: 40px;
  height: 40px;
`;

const Title = styled.Text`
  color: #424242;
  font-size: 17px;
  font-weight: bold;
  line-height: 23px;
  flex-grow: 1;
  margin-left: 8px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  color: red;
`;

const StatusImage = styled.Image``;

const OptionsContainer = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

const OptionButton = styled.TouchableOpacity`
  margin: 8px 16px 0 2px;
  padding: 4px;
  border-width: 0;
  border-radius: 4px;
  background: white;
`;

const OptionText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  color: rgba(52, 52, 52, 0.4);
`;
