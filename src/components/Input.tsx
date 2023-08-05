// import {FC} from 'react';
// type InputProps = React.ComponentProps<'input'>
// type InputTextProps = {
// 	value: string,
// 	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
// 	errorMsg?: string 
// } 

// export const InputTextField:FC<InputProps & InputTextProps> = ({
// 	value,
// 	onChange,
// 	errorMsg= '',
// 	...props
// }) => {
// 	return <div className='flex flex-col space-x-2'>
// 		<input
// 			{...props}
// 			value={value}
// 			type="text" onChange={onChange}
// 		/>
// 		<span>{errorMsg}</span>
// 	</div>;
// };