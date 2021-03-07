import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

export const useSplash = () => {
    const { reset } = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            reset({ index: 0, routes: [{ name: "CharactersList" }] })
        }, 2000);
    }, []);
}