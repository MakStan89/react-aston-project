import React from 'react';
import { ProtectorType } from '../types/types';

class ErrorBoundary extends React.Component<ProtectorType, { hasError: boolean }> {
	constructor(props: ProtectorType) {
		super(props);
		this.state = { hasError: false };
	}
	
	static getDerivedStateFromError(error: any) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children; 
	}
}

export default ErrorBoundary;