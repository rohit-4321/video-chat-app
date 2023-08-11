import { Message } from '../../components/Message';

export const MessageContainer = () => {
	return <div className='px-2 py-3 overflow-auto flex flex-col gap-4'> 
		<Message isSelf value="Hello Sir"/>
		<Message isSelf={false} value="In this example"/>
		<Message isSelf value="In this example"/>
	</div>;
};