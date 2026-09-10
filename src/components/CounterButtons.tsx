import { useCounter } from "../context/CounterContext";

const CounterButtons = () => {
	const { increment, decrement, reset } = useCounter();

	return (
		<div>
			<button onClick={increment}>+</button>

			<button onClick={decrement}>-</button>

			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default CounterButtons;
