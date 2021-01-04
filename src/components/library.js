import LibrarySong from './librarySong.js';
const Library = ({
  songs,
  setCurrentSong,
  setSongs,
  audioref,
  isPlaying,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              songs={songs}
              setCurrentSong={setCurrentSong}
              song={song}
              id={song.id}
              key={song.id}
              audioref={audioref}
              isPlaying={isPlaying}
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
