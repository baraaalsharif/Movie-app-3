import React from 'react'

function Search ({ handleInput, search }) {
	return (
		<section className="searchBox-wrap">
			<input 
				type="text" 
				placeholder="Search for a movie..." 
				className="searchBox" 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}

export default Search