import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components/button';
<<<<<<< HEAD
import { List } from '@/components/list';

import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {
    const { user, signOut } = useAuth();

    const posts = [
        { id: '1', title: 'Card 1', description: 'Texto de aviso 1' },
        { id: '2', title: 'Card 2', description: 'Texto de aviso 2' },
        { id: '3', title: 'Card 3', description: 'Texto de aviso 3' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo, {user}</Text>
            <Button title="Sair da APP" onPress={signOut} />

            <List
                data={posts}
                onLoadMore={() => {}}
                renderItemContent={(item) => (
                    <View>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardText}>{item.description}</Text>
                    </View>
                )}
            />

=======

export default function Dashboard() {
     const { username } = useLocalSearchParams<{ username: string }>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo, {username}!</Text>
            <Button title="Voltar" onPress={() => router.back()} />
>>>>>>> be84baeb24e8a5b0157aeb29293aabb0ccb6e0ca
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: 'center',
        gap: 16,
    },
    title: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
<<<<<<< HEAD
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    cardText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    }
});
=======
        textAlign: 'center',
        margin: '200px',
    },      
});
>>>>>>> be84baeb24e8a5b0157aeb29293aabb0ccb6e0ca
