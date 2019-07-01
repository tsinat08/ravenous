const apiKey='2Ln9-DX5LDwlaKiRfYn_zkx0FfxzvUXqCoyB_OgFpgEgFTKQm_O-IK-HCETx6Oboeb6q54RR2CFXeYR7g3kL-Sp_Cvx9rNKzxRPKI8JPpWln2QZulZU4M8EmaxoZXXYx';

const Yelp = {
    searchYelp  (term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            console.log('yelp response : ', response)
            return response.json();
        }).then((jsonResponse) =>{
            if (jsonResponse.businesses){
              return jsonResponse.businesses.map(((business)=>{
                console.log(business);
                  return{
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                };
            }));
            }
        })
    }
};

export default Yelp;

