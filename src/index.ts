import { RegionIdentifiers } from "./api/validators/static";

export default class bnetWrapper {
    private clientId: string;
    private clientSecret: string;
    private regionIdentifier: RegionIdentifiers;

    constructor(clientId: string, clientSecret: string, regionIdentifier: RegionIdentifiers, locale: string = 'en_US') {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.regionIdentifier = regionIdentifier;
    }

    public setRegion(regionIdentifier: RegionIdentifiers) {
        this.regionIdentifier = regionIdentifier;
    }
}