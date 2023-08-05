import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
export const Dashboard = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [inputError, setInputError] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const onSearch = (ev : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if(name === ''){
			setInputError(true);
			
		}else {
			console.log('Connecting....');
			setInputError(false);
			navigate('/chat');
		}
	};
	return <div className="h-full overflow-hidden flex justify-center items-center">
		<div className='flex gap-2'>
			<div>
				<input
					className={`bg-slate-700 px-3 py-2 rounded-sm focus:outline-none font-light tracking-wide ${
						inputError ? 'outline outline-red-900 outline-2' : 'outline outline-none' 
					}`}
					placeholder='User Name'
					value={name}
					type="text" onChange={(e) => {
						setName(e.target.value);
					}} />
				{
					inputError && <span className='block'>Name Required</span>
				}
			</div>
			<button
				className="bg-black/70 px-8 text-slate-100 text-xl font-medium tracking-widest rounded-sm hover:bg-black/25"
				onClick={(e) => {
					onSearch(e);
				}}>Search</button>
		</div>
	</div>;
};
