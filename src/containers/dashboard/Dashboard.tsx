import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppDispatcher } from '../../redux/hooks';
import { setUserName } from '../../redux/slices/userSlice';
export const Dashboard = () => {
	const dispatch = useAppDispatcher();
	const saveName = (v: string) => {
		dispatch(setUserName(v));
	};
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [inputError, setInputError] = useState(false);
	const onSearch = () => {
		if(name === ''){
			setInputError(true);
			// usePortal('Name Required');
			
		}else {
			saveName(name);
			setInputError(false);
			navigate('/chat');
		}
	};
	return <div className="h-full overflow-hidden flex flex-col justify-center items-center">
		<div className='flex flex-col gap-1'>
			<div className='flex gap-2'>
				<div className='overflow-visible'>
					<input
						className={`bg-slate-700 px-3 py-2 rounded-sm focus:outline-none font-light tracking-wide ${
							inputError ? 'outline outline-red-900 outline-2' : 'outline outline-none' 
						}`}
						placeholder='User Name'
						value={name}
						type="text" onChange={(e) => {
							setInputError(false);
							setName(e.target.value);
						}} />
				</div>
				<button
					className="bg-black/70 px-8 text-slate-100 text-xl font-medium tracking-widest rounded-sm hover:bg-black/25"
					onClick={onSearch}>Search</button>
			</div>
			{
				inputError && <span className='block text-red-800'>Name Required!!</span>
			}
		</div>
	</div>;
};
