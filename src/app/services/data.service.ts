import { Injectable } from '@angular/core';
import {API_DOMAIN,API_ENDPOINTS} from '../app-config/api-config'
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient,private readonly router:Router) { }
  private getAPIUrl(apiEndpoints,params?):string{
    const domainUrl = API_DOMAIN.URL;
    if(params && params.length){
      params.forEach((param,index) => {
        apiEndpoints=apiEndpoints.replace('{'+index+'}',param)
      });
      return domainUrl+apiEndpoints;
    }
  }
  public getProductData(regionData,reportUid){
    return this.http.get(this.getAPIUrl(API_ENDPOINTS.getProducts,[reportUid,regionData.regionCOuntryUid]))
  }

}
