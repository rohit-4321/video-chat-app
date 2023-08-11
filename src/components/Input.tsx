import {FC} from 'react';
type InputProps = React.ComponentProps<'input'>
type InputTextProps = {
	value?: string,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
} 

export const InputTextField:FC<InputProps & InputTextProps> = ({
	value,
	onChange,
	...props
}) => {
	return <div className='flex space-x-2 px-2 py-2 bg-slate-700'>
		<input
			className='focus:outline-none px-2 py-2 rounded-sm flex-1'
			{...props}
			value={value}
			type="text" onChange={onChange}
		/>
		<button className='bg-teal-300 text-black font-bold px-5 rounded-sm'>Send</button>
	</div>;
};