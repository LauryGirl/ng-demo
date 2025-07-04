export interface VehicleType {
    IsPrimary: boolean;
    Name: string;
}

export interface CarModel {
    Country: string;
    Mfr_CommonName: string;
    Mfr_ID: string;
    Mfr_Name: string;
    VehicleTypes: VehicleType[];
}

export interface CarResponse {
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results: CarModel[];
}