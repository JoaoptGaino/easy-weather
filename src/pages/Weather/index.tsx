import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../Services/api';


export default function Weather() {
    const [city, setCity] = useState('');
    async function handleSearch(){
        const response = await api.get(`?q=${city}&appid=0b177100caf71a656b93bfd11c06f133`)
        

        console.log(response.data.main.temp);
    }
    return (
        <>
            <PageHeader title="Weather" navigation="Home" />
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={styles.inputBlock}>
                    <Text style={styles.label}>City name</Text>
                    <View style={styles.block}>
                        <TextInput
                            style={styles.input}
                            placeholder="Write the city"
                            autoCorrect={false}
                            value={city}
                            onChangeText={setCity}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleSearch}>
                            <View style={styles.buttonIcon}>
                                <Icon name="search" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}