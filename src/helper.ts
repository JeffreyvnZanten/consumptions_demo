export async function fetchData<T>(fileLocation : string) : Promise<T | undefined> {
    try {
        const response = await fetch(fileLocation);

        if(!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    }
    catch (error) {
        console.log('Fetch error', error);
    }
}