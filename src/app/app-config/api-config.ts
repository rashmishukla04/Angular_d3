import {environment} from '../../environments/environment';
export const API_ENDPOINTS={
    getReports:'/api/v1/reportRegionProduct/reports',
    getRegions:'/api/v1/reportRegionProduct/regions?reportUID={0}',
    getProducts:'/api/v1/reportRegionProduct/products?reportUID={0}$regionCountryUID={1}'
}

export const API_DOMAIN={
    URL:environment.apiHost
}