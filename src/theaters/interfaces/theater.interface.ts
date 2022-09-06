export interface Theaters {
    address: {
        street1: string
        street2: string
        city: string
        state: string
        zipcode: string
    },
    geo: {
        type: string
        coordinates: Array<number>
    }
}