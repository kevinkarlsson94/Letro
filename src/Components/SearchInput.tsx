import * as React from "react";
import { StatelessComponent } from "react";
import { FormControl, FormGroup } from 'react-bootstrap';
import { svLocale } from "../Localization/sv-SV";

interface ISearchInputProps {
    updateSearch: any;
    queryText: string;
}

export const SearchInput: StatelessComponent<ISearchInputProps> = ({
    queryText,
    updateSearch
}) => (
    <FormGroup>
        <FormControl
            type="text"
            className="search-input"
            value={queryText}
            placeholder={svLocale.fritext}
            onChange={updateSearch}
        />
  </FormGroup>
);
