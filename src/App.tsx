import { Button } from 'antd';
import React from 'react';
import SvgArea from 'src/components/SvgArea';
import './App.scss';
import TestArea from './components/TestArea/TestArea';


function App() {
	return (
		<div className='App'>
			<SvgArea />
			<TestArea />
			<Button type="primary">Button</Button>
		</div>
	);
}

export default App;
