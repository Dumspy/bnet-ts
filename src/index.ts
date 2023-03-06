import axios, { AxiosInstance } from 'axios'
import { RegionIdentifiers } from './api/static'
import api from './api/index.js'
export interface Shared {
    Axios: AxiosInstance
    Region: RegionIdentifiers
    OAuthToken?: string
}

export const Gamer = async (clientId: string, clientSecret: string, region: RegionIdentifiers) => {
    const shared: Shared = {
        Axios: axios.create({
            baseURL: `https://${region}.api.blizzard.com`,
        }),
        Region: region,
        OAuthToken: undefined,
    }

    try {
        const response = await axios({
            url: `https://${region}.battle.net/oauth/token`,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: clientId,
                password: clientSecret,
            },
            params: {
                grant_type: 'client_credentials',
            },
        });

        shared.OAuthToken = response.data.access_token;
    } catch (error) {
        throw new Error(`Problem getting the OAuth token from the Blizzard API.  
                            Please check that your Client ID and Secret are correct.`);
    }

    return {
        api: api(shared)
    }

}

// FOR TESTING
async function main() {
    const gamer = await Gamer('', '', 'eu');
    console.log(await gamer.api.worldofwarcraft.gamedata.wowtoken.getWowToken())
}

main()

// FOR TESTING