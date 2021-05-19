export const getGOTcharactersList = async () => {
    const res = await fetch('https://thronesapi.com/api/v2/Characters');
    const arrayOfChars = await res.json();

    return arrayOfChars.map((char) => ({
        id: char.id,
        firstName: char.firstName,
        lastName: char.lastName,
        image: char.imageUrl
    }));
}

export const getGOTcharacter = async (id) => {
    const res = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
    const character = await res.json();

    return character;
}
