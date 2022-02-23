import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainScreen from './Screens/MainScreen';

const App = () => {
    return (
        <View style={styles.app}>
            <MainScreen/>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});