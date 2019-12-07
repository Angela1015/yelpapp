const apiKey = 'pQv4kADjs0jad9gSr1NhZG4jibmO4yxTAfh5o_luFLqg6RxtuBaBCuvBZk1bjlau3H-QxPHfLgEtKU9FmRO3UUee2vl-8VsSMj_l2R_Hgm7LFslNJ6fdf8fI-UXpXXYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=9`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                          return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                        }
                    })
                
            }
        })

    }
}

export default Yelp 
