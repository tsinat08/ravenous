const apiKey='2Ln9-DX5LDwlaKiRfYn_zkx0FfxzvUXqCoyB_OgFpgEgFTKQm_O-IK-HCETx6Oboeb6q54RR2CFXeYR7g3kL-Sp_Cvx9rNKzxRPKI8JPpWln2QZulZU4M8EmaxoZXXYx';

const Yelp = {
    Search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            console.log('yelp response : ', response)
            return response.json();
        }).then(jsonResponse =>{
            if (jsonResponse.businesses){

            return jsonResponse.businesses.map(business =>{
                return{
                    id: business.id,
                    imageSrc: business.imageSrc,
                    name: business.name,
                    address: business.address,
                    city: business.city,
                    state: business.state,
                    zipCode: business.zipCode,
                    category: business.categories,
                    rating: business.rating,
                    reviewCount: business.reviewCount
                }
            });
            }
        })
    }
};

export default Yelp;

