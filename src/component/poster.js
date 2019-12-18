import React from 'react';
import PosterCard from './posterCard';

const poster = (props) => {//props.moviess.Search
	return (
			<div>
				{
					props.list.map((movie,i) => {
						return(
							<PosterCard
								key = {i}
								id = {movie.imdbID}
								name = {movie.Title}
								image = {movie.Poster}
							/>
							);
					})
				}
			</div>
		);
};
//{console.log(props.moviess.Search)}	
export default poster;