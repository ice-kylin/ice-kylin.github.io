import { handler } from './build/handler.js';
import polka from 'polka';
import compression from '@polka/compression';

polka()
	.use(compression())
	.use(handler)
	.listen(3001, () => {
		console.log('Server running on http://localhost:3001 🚀');
	});
