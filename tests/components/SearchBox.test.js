import React from 'react';
import renderer from 'react-test-renderer';

import { SearchBox } from '../../src/components'

test('renders without crashing', () => {
	const component = renderer.create(<SearchBox />);
	
	expect(component).toBeTruthy();
});
