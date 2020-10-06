import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import styles from './styles';
import { Feather as Icon } from '@expo/vector-icons';


interface PageHeaderProps {
    title: string;
    navigation: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, navigation }) => {
    const { navigate } = useNavigation();
    function handleGoBack() {
        navigate(navigation);
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Icon name="arrow-left" color='#fff' size={24} />
                </BorderlessButton>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

export default PageHeader;