import React from 'react'

function Result({ result, openInfo }) {
	return (
		<div className="result" onClick={() => openInfo(result.imdbID)}>
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result