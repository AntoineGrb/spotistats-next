import { cookies } from 'next/headers';

export const getUserProfile = async () => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${accessToken.value}`
        }
    })

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    console.log('response', response);

    return data;
}

export const getRecentlyPlayedTracks = async () => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
        //! Rediriger vers la page de login plutot que de throw une erreur
    }

    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
            Authorization: `Bearer ${accessToken.value}`
        }
    })

    if (!response.ok) {
        // throw new Error('Failed to fetch user data');
        console.error('Failed to fetch user data');
    }

    const data = await response.json();
    return data;
}