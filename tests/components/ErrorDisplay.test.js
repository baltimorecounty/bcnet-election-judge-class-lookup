import React from 'react';
import renderer from 'react-test-renderer';

import { ErrorDisplay } from '../../src/components'

test('renders without crashing', () => {
	const component = renderer.create(<ErrorDisplay />);
	
	expect(component).toBeTruthy();
});
