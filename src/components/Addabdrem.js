// CounterButtons.js
import React, { useState } from 'react';

const CounterButtons = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = async () => {
		try {
			const response = await fetch('https://test.troyt.bio/currentnumber.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					operation: 'ADD'
				}
			});
			const data = await response.json();
			setCount(data.currentcount);
		} catch (error) {
			console.error('Error adding:', error);
		}
	};

	const handleDecrement = async () => {
		try {
			const response = await fetch('https://test.troyt.bio/currentnumber.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					operation: 'REM'
				}
			});
			const data = await response.json();
			setCount(data.currentcount);
		} catch (error) {
			console.error('Error removing:', error);
		}
	};

	return <div>
		      
		<button
			onClick={handleIncrement}
			transition="all 1s ease 0s"
			text-shadow="0 0 0 #e91e1e"
			height="159% border-box"
			font="1em --fontFamily-googleFredoka"
		>
			Add
		</button>
		      
		<button onClick={handleDecrement}>
			Remove
		</button>
		    
	</div>;
};

export default CounterButtons;