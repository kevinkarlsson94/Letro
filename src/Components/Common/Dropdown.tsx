import * as React from "react";
import Select from 'react-select';

interface IDropdownProps {
    list?: any;
}

class Dropdown extends React.PureComponent<IDropdownProps> {
    public state = {
        selectedOption: null,
    }
    public render() {
        const { list } = this.props;
        const { selectedOption } = this.state;
        return (
            <Select
                className="dropdown"
                value={selectedOption}
                onChange={this.handleChange}
                options={list}
            />
        );
    }
    private handleChange = (selectedOption: any) => {
        this.setState({ selectedOption });
    }
}

export default Dropdown;