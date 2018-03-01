import React from 'react';
import renderer from 'react-test-renderer';

import { ElectionJudgeList } from '../../src/components'

test('renders without crashing', () => {
	const component = renderer.create(<ElectionJudgeList />);
	
	expect(component).toBeTruthy();
});
