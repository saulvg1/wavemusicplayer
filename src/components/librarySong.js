const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //add active state
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      className={`library-song ${song.active ? 'selected' : ''}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt="album-cover"></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
