import { useState } from 'react';

export const Dashboard = () => {
	const [name, setName] = useState('');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const onSearch = (ev : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
	};
	return <div className="h-full overflow-hidden flex justify-center items-center">
		<div className='flex gap-2'>
			<input
				className='bg-slate-700 px-3 py-2 rounded-sm focus:outline-none font-light tracking-wide outline outline-none'
				placeholder='User Name'
				value={name}
				type="text" onChange={(e) => {
					setName(e.target.value);
				}} />
			<button
				className="bg-black/70 px-8 text-slate-100 text-xl font-medium tracking-widest rounded-sm hover:bg-black/25"
				onClick={(e) => {
					onSearch(e);
				}}>Search</button>
		</div>
	</div>;
};
