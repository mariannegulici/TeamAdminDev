import { Injectable } from "@angular/core";
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { Observable, ReplaySubject } from "rxjs";
import gql from 'graphql-tag';

export class SearchModel {
    showHideSearchComponent?: Boolean;
    showHideToolbarSearch?: Boolean;
    searchInputValue?: String;
    actionFromComponent?: String;
}

@Injectable()
export class ProjectSearchDispatcherService {

    private _searchValue: ReplaySubject<SearchModel> = new ReplaySubject<SearchModel>(1);

    public searchValue: Observable<SearchModel> = this._searchValue.asObservable();

    constructor() {}

    searchInput( searchInput: String ) {

        var searchModel = new SearchModel();
        searchModel.searchInputValue = searchInput;
        searchModel.showHideSearchComponent = true;
        searchModel.showHideToolbarSearch = true;

        this._searchValue.next(searchModel);
    }

    closeProjectSearchComponent(moduleName) {
        var searchModel = new SearchModel();

        if (moduleName === 'landing-page') searchModel.showHideToolbarSearch = false;
        searchModel.showHideSearchComponent = false;
        this._searchValue.next(searchModel);
    }

    toggleToolbarSearchVisibility(showToolbarSearch: Boolean) {
        var searchModel = new SearchModel();

        searchModel.showHideToolbarSearch = showToolbarSearch;
        this._searchValue.next(searchModel);
    }
}