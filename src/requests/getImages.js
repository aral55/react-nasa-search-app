import axios from "axios";

const getImages = (value, setValidSearch, setLoading) => {
    setLoading(true);
    if (!value) {
        return Promise.resolve([]);
    } else {
        return axios.get(`https://api.nasa.gov/search?q=${value}`)
        .then((response) => {
            const imageResults = response.data.collection.items;

            if (imageResults.length === 0) {
                setValidSearch(false);
            } else {
                setValidSearch (true);
                const parsedImages = imageResults.filter(
                    (item) => item.data[0].media_type === "image"
                );
                return parsedImages;
            }
        })
        .catch((error) => { 
            console.log(error);
    })
    .finally(() => {
        setLoading(false);
})
    }
};

export default getImages;