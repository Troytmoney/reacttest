import React, { useEffect, useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		fetch('https://test.troyt.bio/currentnumber.php').then(response => response.json()).then(data => setCount(data.currentcount)).catch(error => console.error('Error fetching count:', error));
	}, []);

	const updateCount = operation => {
		fetch('https://test.troyt.bio/currentnumber.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Operation': operation === 'add' ? 'ADD' : 'REM'
			},
			body: JSON.stringify({
				count: operation === 'add' ? count + 1 : count - 1
			})
		}).then(response => response.json()).then(data => setCount(data.currentCount)).catch(error => console.error('Error updating count:', error));
	};

	const styles = {
		counter: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			fontFamily: 'Arial, sans-serif'
		},
		countDisplay: {
			fontSize: '48px',
			fontWeight: 'bold',
			marginBottom: '20px',
			transition: 'transform 0.6s',
			transformStyle: 'preserve-3d'
		},
		button: {
			padding: '10px 20px',
			fontSize: '16px',
			cursor: 'pointer',
			margin: '5px',
			backgroundColor: '#FFF',
			transition: 'background-color 0.3s ease'
		},
		buttonHover: {
			backgroundColor: '#007BFF',
			color: '#FFF'
		}
	};
	return <div style={styles.counter}>
		      
		<div style={styles.countDisplay}>
			{count}
		</div>
		      
		<button style={styles.button} onMouseOver={e => e.target.style = styles.buttonHover} onMouseOut={e => e.target.style = styles.button} onClick={() => updateoutCount('add')}>
			Add
		</button>
		      
		<button style={styles.button} onMouseOver={e => e.target.style = styles.buttonHover} onMouseOut={e => e.target.style = styles.button} onClick={() => updateCount('remove')}>
			Remove
		</button>
		    
	</div>;
};

export default Counter;