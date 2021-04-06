import React from 'react'

import Result from './Result'

function Results ({ results, openInfo }) {
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openInfo={openInfo} />
			))}
		</section>
	)
}

export default Results
