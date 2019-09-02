import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) return <div className="item"></div>

    return (
        <div className="item">
            {song.title} ({song.duration})
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);