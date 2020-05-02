import { Button } from 'antd';
import React, { useState } from 'react';
import SvgArea from 'src/components/SvgArea';
import './App.scss';
import TestArea from './components/TestArea/TestArea';
import AddNewModuleModal from 'src/components/AddNewModuleModal/AddNewModuleModal';


function App() {

	const [addNewModuleModalVisible, setAddNewModuleModalVisible] = useState<boolean>(false);

	return (
		<div className='App'>
			<SvgArea />
			<TestArea />
			<Button type="primary" onClick={() => setAddNewModuleModalVisible(true)}>Add New Module</Button>
			<AddNewModuleModal isVisible={addNewModuleModalVisible} setIsVisible={setAddNewModuleModalVisible} />
		</div>
	);
}

export default App;
