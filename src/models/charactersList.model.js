import { hash, get } from './axios';
import { PUBLIC_KEY } from '@env';

export const getList = (limit, offset, options) => {
    get(`characters?apikey=${PUBLIC_KEY}&hash=${hash}&ts=1&offset=${offset}&limit=${limit}`, options);
}

export const searchByName = (keyward, options) => {
    get(`characters?apikey=${PUBLIC_KEY}&hash=${hash}&ts=1&nameStartsWith=${keyward}`, options);
}