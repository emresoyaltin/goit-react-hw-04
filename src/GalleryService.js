import axios from 'axios';

export const fetchGallery = async (searchItem, currentPage) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=FbG39dWfVauBWnVGAo7vuDCHqcx-fNzui4FduR2eKWE`, {
        params: {
            query: searchItem,
            per_page: 10,
            page: currentPage,
        },
    });
    console.log(response)
    return response.data.results;
};
