import React, { useState, useEffect } from 'react';

const NumberFetcher = () => {
	const [number, setNumber] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://test.troyt.bio/currentnumber.php');
				const data = await response.json();
				setNumber(data.currentcount); // Assuming the API response has a 'number' field
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		const intervalId = setInterval(fetchData, 2000); // Fetch every 2 seconds

		return () => clearInterval(intervalId); // Cleanup on unmount
	}, []);
	return <div>
		      
		{number !== null ? <p>
			{number}
		</p> : <p>
			Loading...
		</p>}
		    
	</div>;
};

export default NumberFetcher;