import React, { useState, useEffect, useRef } from 'react';

const FlipCounter = () => {
	const [count, setCount] = useState(0);
	const countRef = useRef(null); // Function to fetch count from the API

	const fetchCount = () => {
		fetch('https://test.troyt.bio/currentnumber.php').then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			return response.json();
		}).then(data => {
			console.log('Fetched count:', data); // Debug: log the data received

			setCount(data.currentcount); // Ensure this matches the property from your JSON
		}).catch(error => {
			console.error('Error fetching count:', error);
		});
	}; // Fetch the initial count and set up an interval to update the count every second


	useEffect(() => {
		fetchCount(); // Fetch immediately on mount

		const interval = setInterval(fetchCount, 1000); // Corrected the setInterval usage

		return () => clearInterval(interval);
	}, []); // Update the digit display with a flip animation

	useEffect(() => {
		if (countRef.current) {
			countRef.current.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
			countRef.current.style.transform = `translateY(${-90 + count % 10 * 10}%)`;
		}
	}, [count]); // Styles defined within the component

	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: '20px'
		},
		counter: {
			overflow: 'hidden',
			position: 'relative',
			background: '#333',
			// Dark grey background for better contrast
			color: 'white',
			fontSize: '2rem',
			fontFamily: 'Arial, sans-serif',
			height: '80px',
			// Adjust based on your design
			width: '50px'
		},
		digitValue: {
			transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
			height: '800%' // 10 times the height of the container, for 0-9

		},
		button: {
			backgroundColor: '#444',
			// Lighter black for distinction
			color: 'white',
			border: '1px solid #666',
			// Slight border for clarity
			padding: '10px 20px',
			margin: '5px',
			cursor: 'pointer'
		}
	};
	return <div style={styles.container}>
		      
		<div style={styles.counter} ref={countRef}>
			        
			{Array.from(String(count), Number).map((digit, index) => <span key={index} style={{
				position: 'absolute',
				width: '50px',
				textAlign: 'center',
				transform: `translateY(${-100 * digit}%)`
			}}>
				            
				{digit}
				          
			</span>)}
			      
		</div>
		      
		<button style={styles.button} onClick={() => setCount(count + 1)}>
			Add
		</button>
		      
		<button style={styles.button} onClick={() => setCount(count - 1)}>
			Remove
		</button>
		    
	</div>;
};

export default FlipCounter;