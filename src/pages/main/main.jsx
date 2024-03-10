import React from 'react';

import { useGetPlaylistsQuery } from '../../api/playlists-api';

import Card from '../../components/card/card';
import SearchPanel from '../../components/search-panel/search-panel';

import style from './main.module.css';

const Main = () => {
	const { data: playlists, isLoading } = useGetPlaylistsQuery();
	if (isLoading) {
		return <h1>Загрузка...</h1>;
	}

	return (
		<>
			<SearchPanel />
			<div className={style.mainBlock}>
				<h2>Playlists</h2>
				{playlists && (
					<div className={style.spotifyPlaylists}>
						{playlists.map(playlist => (
							<Card key={playlist.id} playlistProps={playlist} />
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default Main;
