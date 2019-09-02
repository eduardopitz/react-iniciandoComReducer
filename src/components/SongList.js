import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    {song.title}
                    <button type="submit"
                            onClick={() => this.props.selectSong(song)}>Selecionar</button>
                </div>
            );
        })
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);