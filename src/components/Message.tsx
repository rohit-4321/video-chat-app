import { FC } from 'react';

export interface MessageProps {
    value: string,
	isSelf: boolean
}
export const Message:FC<MessageProps> = ({
	value,
	isSelf
}) => {
	if(!isSelf){
		return <div className='flex justify-end'>
			<div className='max-w-sm sm:max-w-md  bg-green-800/40 px-2 py-[0.2rem] rounded'>
				{value}
			</div>
		</div>;
	}
	return <div className='flex '>
		<div className='max-w-sm sm:max-w-md bg-green-800 px-2 py-[0.2rem] rounded'>
			{value}
		</div>
	</div>;
};

// 