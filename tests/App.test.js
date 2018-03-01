import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App';

test('renders without crashing', () => {
	const component = renderer.create(<App />);
	
	expect(component).toBeTruthy();
});
