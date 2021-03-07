import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { getList, searchByName } from 'src/models/charactersList.model';

export const useCharactersList = () => {
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loadMore, setLoadMore] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);

    // Search    
    const [showSearch, setShowSearch] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const [keyward, setKeyward] = useState('');

    useEffect(() => { fetch(offset); }, []);
    useEffect(() => { if (!showSearch) { setSearchList([]); setKeyward(''); } }, [showSearch]);

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

    const search = () => {
        if (keyward) {
            setSearchLoading(true);
            searchByName(keyward, {
                success: response => {
                    setSearchList(response.data.results);
                    setSearchLoading(false);
                },
                error: error => {
                    __DEV__ && console.warn(error);
                    setSearchLoading(false);
                }

            })
        }
    }

    return { loading, list, loadMore, searchLoading, isRefreshing, showSearch, searchList, keyward, setKeyward, search, setShowSearch, onRefresh, onEnd };
}