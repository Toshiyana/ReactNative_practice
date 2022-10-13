import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Home Screen</Text>
            <Button
                onPress={() => console.log('Button pressed')}
                title="Go to Components Demo"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default HomeScreen;