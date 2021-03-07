import { hash, get } from './axios';
import { PUBLIC_KEY } from '@env';

export const getList = (id, type: "comics" | "events" | "series" | "stories", options) => {
    get(`characters/${id}/${type}?apikey=${PUBLIC_KEY}&hash=${hash}&ts=1`, options);
}