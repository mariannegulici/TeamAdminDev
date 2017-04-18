import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

export class SearchModel {
    showHideComponent: Boolean;
    searchInputValue?: String
}

@Injectable()
export class ProjectSearchService {

    private _searchValue: Subject<SearchModel> = new Subject<SearchModel>();

    public searchValue: Observable<SearchModel> = this._searchValue.asObservable();

    constructor() {}

    searchInput( searchInput: String ) {

        var searchModel = new SearchModel();
        searchModel.searchInputValue = searchInput;
        searchModel.showHideComponent = true;

        this._searchValue.next(searchModel);
    }

    closeProjectSearchComponent() {
        var searchModel = new SearchModel();

        searchModel.showHideComponent = false;
        this._searchValue.next(searchModel);
    }
}