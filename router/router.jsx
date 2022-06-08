import SignInScreen from '../screens/signin';
import SignUpScreen from '../screens/signUp';
import ForgotPwdScreen from '../screens/fogotPwd'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { COLORS } from '../constants/theme';

const authStack = createStackNavigator({
    signin: {
        screen: SignInScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    signup: {
        screen: SignUpScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    forgotpwd: {
        screen: ForgotPwdScreen,
        navigationOptions: {
            headerTitle: null,
            headerBackTitle: 'back',
            headerBackTitleStyle: {
                fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
            headerStyle: {
                backgroundColor: COLORS.primary,
            }
        }
    },
});

const router = createAppContainer(authStack); // main stack will be created in next episodes;

export default router;