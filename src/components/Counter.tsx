import { useCounter } from "../context/CounterContext";
import CounterButtons from "./CounterButtons";

const Counter = () => {
	const { count, setCount } = useCounter();

	return (
		<div>
			<h2>Count: {count}</h2>

			<CounterButtons />
		</div>
	);
};

export default Counter;
