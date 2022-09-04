import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, of } from "rxjs";
import { CourseCatalogItemViewModel, CourseCatalogResultViewModel } from "../models/course-management.model";

@Injectable({
    providedIn: 'root'
})
export class CourseManagementService{
    apiUrl = environment.apiUrl;

    constructor(private _http: HttpClient){}    

    loadCourseCatalog()
        : Observable<CourseCatalogResultViewModel> {
            const url = `${this.apiUrl}/ManageCourses?pageSize=5&pageIndex=0`;
            return this._http
                .get<CourseCatalogResultViewModel>(url);
    }
}