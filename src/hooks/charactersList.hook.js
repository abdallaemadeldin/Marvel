import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { getList } from 'src/models/charactersList.model';

export const useCharactersList = () => {
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loadMore, setLoadMore] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(offset);
    }, []);

    const onEnd = () => {
        setLoadMore(true);
        const newOffset = offset + 10;
        setOffset(newOffset);
        fetch(newOffset, true);
    }

    const onRefresh = () => {
        setIsRefreshing(true);
        setOffset(0);
        fetch(0);
    }

    const fetch = (offset, loadMore) => {
        getList(10, offset, {
            success: response => {
                setList(st => loadMore ? [...st, ...response.data.results] : response.data.results);
                setLoading(false);
                setLoadMore(false);
                setIsRefreshing(false);
            },
            error: error => {
                __DEV__ && console.warn(error);
                setLoading(false);
                setLoadMore(false);
                setIsRefreshing(false);
            }
        })
    }

    return { loading, list, loadMore, isRefreshing, onRefresh, onEnd };
}