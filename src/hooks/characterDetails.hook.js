import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { getList } from 'src/models/characterDetails.model';

export const useCharacterDetails = () => {
    const { canGoBack, goBack } = useNavigation();
    const { params: { item } } = useRoute();
    const [comics, setComics] = useState([]);
    const [events, setEvents] = useState([]);
    const [series, setSeries] = useState([]);
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    const list = [{ label: "Comics", list: comics },
    { label: "Events", list: events },
    { label: "Series", list: series },
    { label: "Stories", list: stories }];

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        await Promise.all([
            new Promise((resolve, reject) => {
                getList(item.id, "comics", {
                    success: response => { setComics(response.data.results); resolve(response); },
                    error: reject
                })
            }),
            new Promise((resolve, reject) => {
                getList(item.id, "events", {
                    success: response => { setEvents(response.data.results); resolve(response); },
                    error: reject
                })
            }),
            new Promise((resolve, reject) => {
                getList(item.id, "series", {
                    success: response => { setSeries(response.data.results); resolve(response); },
                    error: reject
                })
            }),
            new Promise((resolve, reject) => {
                getList(item.id, "stories", {
                    success: response => { setStories(response.data.results); resolve(response); },
                    error: reject
                })
            })
        ])
            .then(() => { setLoading(false); })
            .catch(error => {
                __DEV__ && console.warn(error);
                setLoading(false);
            });
    }

    const back = canGoBack && goBack;

    return { thumbnail: item.thumbnail, name: item.name, description: item.description, list, back, loading };
}