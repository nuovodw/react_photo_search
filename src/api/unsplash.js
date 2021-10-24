import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID U3nACStF6TpjFdcFMgl8hrLDsNljV6duxHiX3DfS1KY',
	},
});
