
// import { registerRootComponent } from 'expo';
// import StackNavigator from './navigation/StackNavigator';

// registerRootComponent(StackNavigator);
import { Redirect } from "expo-router";

export default function index() {
    return <Redirect href="/home" />;
}
