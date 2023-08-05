import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../containers/dashboard/Dashboard';
import { Chat } from '../containers/chat/Chat';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />
	},
	{
		path: '/chat',
		element: <Chat />
	}
]);