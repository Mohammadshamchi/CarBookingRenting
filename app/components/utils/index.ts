export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '301d532451mshb0e9236a02be4c9p1bdf3bjsn34240cdf7d5d',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        };
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers, })
    const result = await response.json();
    return result;
}