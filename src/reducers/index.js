import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Artista desconhecido - Faixa 1', duration: '3:00' },
        { title: 'Artista desconhecido - Faixa 2', duration: '3:03' },
        { title: 'Artista desconhecido - Faixa 3', duration: '5:02' },
        { title: 'Artista desconhecido - Faixa 4', duration: '2:20' },
        { title: 'Artista desconhecido - Faixa 5', duration: '3:42' },
        { title: 'Artista desconhecido - Faixa 6', duration: '3:10' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});