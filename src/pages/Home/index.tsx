import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    function handleNavigation(){
        navigation.navigate('Weather');
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Text style={styles.title}>Easy Weather</Text>
            <View style={styles.main}>
                <Text style={styles.subtitle}>Wanna check out the weather?</Text>
                <RectButton style={styles.button} onPress={handleNavigation}>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="arrow-right" />
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>Let's go!!</Text>
                </RectButton>
            </View>
        </KeyboardAvoidingView>
    )
}