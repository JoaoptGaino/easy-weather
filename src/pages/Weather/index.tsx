import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../Services/api';
import { AppLoading } from 'expo';


export default function Weather() {
    const [city, setCity] = useState('');
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [temp, setTemp] = useState('');
    async function handleSearch() {
        setLoading(true);
        await api.get(`?q=${city}&appid=0b177100caf71a656b93bfd11c06f133`)
            .then(response => {
                setTemp(response.data.main.temp);
                setLoading(false);
            })
            .catch(err => {
                console.log(`Não achei ${err}`);
            });
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
                    <View>
                        {loading ? <Text>Loading</Text> : <Text>{temp}</Text>}
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}