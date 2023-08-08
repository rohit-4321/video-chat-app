import { InputTextField } from '../../components/Input';
import { MessageContainer } from './MessageContainer';

export const Chat = () => {
	return <div className="h-full">
		<div className="flex flex-col h-full sm:flex-row">
			<div className="basis-1/4 flex max-h-[13rem] border-b-[1px] border-gray-500 min-h-[11rem] sm:max-h-[none] sm:max-w-sm sm:flex-col sm:border-r-[1px]">
				<div className="flex-1 sm:border-b-[1px] border-gray-500">
					Video 1
				</div>
				<div className="flex-1">
					Video 2
				</div>
			</div>
			<div className="flex flex-1 flex-col overflow-hidden">
				<div className='message-container flex-1 overflow-auto'>
					<MessageContainer />
				</div>
				<InputTextField />
			</div>
		</div>
	</div>;
};

