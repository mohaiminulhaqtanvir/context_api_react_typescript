import { createContext, useContext, useState } from "react";

interface CounterContextType {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
	setCount: (data: number) => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: React.ReactNode }) => {
	const [count, setCount] = useState<number>(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	const decrement = () => {
		setCount((prev) => prev - 1);
	};

	const reset = () => {
		setCount(0);
	};

	return (
		<CounterContext.Provider
			value={{
				count,
				increment,
				decrement,
				reset,
				setCount,
			}}
		>
			{children}
		</CounterContext.Provider>
	);
};

export const useCounter = () => {
	const context = useContext(CounterContext);

	if (!context) {
		throw new Error("useCounter must be used inside CounterProvider");
	}

	return context;
};
