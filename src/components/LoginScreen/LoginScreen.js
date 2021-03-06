import React, {Component} from 'react';
import {Actions} from "react-native-router-flux";
import {
    Divider,
    Button,
    Text,
    Image,
    NavigationBar,
    TextInput,
    Screen,
    ScrollView,
    Title,
    View, Spinner
} from "@shoutem/ui";
import { connect } from "react-redux";
import LoginForm from "../shared/forms/LoginForm";
import {checkToken, login} from "../../actions/auth";

class LoginScreen extends Component {
    componentDidMount(){
        setTimeout(this.props.checkToken, 100);
    }
    render() {
        const {login, loading} = this.props;
        return (
            <Screen>
                {/*<NavigationBar*/}
                    {/*centerComponent={*/}
                        {/*<Title>Auth</Title>*/}
                    {/*}*/}
                {/*/>*/}
                <ScrollView key={'LoginScreen'}>
                <Divider/>
                    { loading ?
                        <View>
                            <Spinner style={{size: 'large'}}/>
                        </View> :
                        <View>
                            <LoginForm login={login}/>
                            <View style={{paddingLeft: '10%', paddingRight: '10%'}}>
                                <Button onPress={Actions.signup}>
                                    <Text>Don`t have account?</Text>
                                </Button>
                            </View>
                        </View>}
                </ScrollView>
            </Screen>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: (values) => dispatch(login(values)),
    checkToken: () => dispatch(checkToken())
});

const mapStateToProps = ({utils: {loading}}) =>({
    loading
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)
