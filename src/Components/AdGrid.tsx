import * as React from "react";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import { jobbKategorier } from 'src/Constants';
import { BASE_URL, kommunKoder, lanKoder, SEARCH_AD_URL, specifikJobbKategori } from "../Constants";
import { svLocale } from "../Localization/sv-SV";
import Filters from "./Filters";
import JobBox from "./JobBox";
import Pagination from "./Pagination";
import { SearchInput } from './SearchInput';
import AdModal from "./AdModal";

interface IAdGridState {
    page?: number;
    loading?: boolean;
    queryText?: string;
    kommun?: any;
    lan?: any;
    availableJobs?: any;
    kategori?: any;
    subKategori?: any;
    showModal?: boolean;
    newsItem?: any;
}

class AdGrid extends React.Component<{}, IAdGridState> {

    public state = {
        loading: true,
        availableJobs: {},
        page: 0,
        queryText: "",
        kommun: null,
        lan: null,
        kategori: null,
        subKategori: null,
        showModal: false,
        newsItem: {}
    };

    public componentDidMount() {
        this.getList();
    }

    public componentDidUpdate(nextProps: any, prevState: any) {
        if (this.state.loading !== prevState.loading) {
            this.getList();
            this.scrollTop();
        }
    }

    private scrollTop = () => {
    const elem = document.getElementById("navbar");
        if (elem) {
            elem.scrollIntoView({
                behavior: "smooth"
            });
        }
    }

    private handleChange = (event: any, inputName: string, notObject?: boolean) => {
        const convertEvent = notObject ? event.target.value : event;
        this.setState({
            [inputName]: convertEvent
        });
    }

    private getList = async () => {
        const {
            page,
            queryText,
            lan,
            kommun,
            kategori,
            subKategori
        } = this.state;

        const query = queryText ? `query=${queryText}` : "";
        const pageNumber = page ? `&n0=${page}` : "";
        const lanNumber = lan ?`&r2=${(lan as any).value}` : "";
        const kommunNumber = kommun ?`&r3=${(kommun as any).value}` : "";
        const kategoriId = kategori ? `&c1=${(kategori as any).value}` : "";
        const subKategoriId = subKategori ? `&c2=${(subKategori as any).value}` : "";

        const url = BASE_URL.concat(
            SEARCH_AD_URL,
            query, pageNumber,
            lanNumber,
            kommunNumber,
            kategoriId,
            subKategoriId);

        await fetch(url, 
            {
                mode: 'cors',
                headers:{
                    'Access-Control-Allow-Origin':'*'
                }
            })
            .then(response => response.json())
            .then(data => this.setState({ availableJobs: data, loading: false }))
    }

    private getNewsItem = async (newsUrl: string) => {

        const url = `${BASE_URL}${newsUrl}`;
        console.log("url", url);

        await fetch(url, 
            {
                mode: 'cors',
                headers:{
                    'Access-Control-Allow-Origin':'*'
                }
            })
            .then(response => response.json())
            .then(newsItem =>
                this.setState(
                { newsItem, loading: false },
                this.toggleModal() ));
    }


    // Kan slås ihop till en funktion
    private loadNext = () => {
        const { page } = this.state;
        const updatePage = page + 1;
        this.setState({ page: updatePage, loading: true })
    }
    // Kan slås ihop till en funktion
    private loadPrevious = () => {
        const { page } = this.state;
        if (page > 0) {
            const updatePage = page - 1;
            this.setState({ page: updatePage, loading: true })
        }
    }

    private toggleModal = () => () => {
        console.log("TOGGL");
        this.setState({ showModal: !this.state.showModal });
    }

    public render() {
        const {
            availableJobs,
            page,
            loading,
            queryText,
            kategori,
            lan,
            kommun,
            subKategori,
            showModal,
            newsItem
        } = this.state;

        console.log("newsItem", newsItem);

        const jobEntries = availableJobs && (availableJobs as any).ads || {};

        return (
            <div className="grid">

                <Filters
                    loading={loading}
                    updatePage={() => this.setState({ loading: true })}
                >
                    <Row>
                        <Col xs={12}>
                            <SearchInput updateSearch={(event: any) => this.handleChange(event, "queryText", true)} queryText={queryText} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Select
                                className="select-button"
                                value={kategori}
                                onChange={(event) => this.handleChange(event, "kategori")}
                                isClearable={true}
                                options={jobbKategorier}
                                placeholder={svLocale.kategori}
                                isSearchable={true}
                            />
                        </Col>
                        <Col xs={6}>
                            <Select
                                className="select-button"
                                value={subKategori}
                                onChange={(event) => this.handleChange(event, "subKategori")}
                                isClearable={true}
                                options={specifikJobbKategori(kategori && (kategori as any).value)}
                                placeholder={svLocale.subKategori}
                                isSearchable={true}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Select
                                className="select-button"
                                value={lan}
                                onChange={(event) => this.handleChange(event, "lan")}
                                isClearable={true}
                                options={lanKoder}
                                placeholder={svLocale.lan}
                            />
                        </Col>
                        <Col xs={6}>
                            <Select
                                className="select-button"
                                value={kommun}
                                onChange={(event) => this.handleChange(event, "kommun")}
                                isClearable={true}
                                options={kommunKoder}
                                placeholder={svLocale.kommun}
                            />
                        </Col>
                    </Row>

                    <AdModal data={newsItem} show={showModal} handleClose={this.toggleModal()} />

                </Filters>

                <Row className="jobs container">
                    {
                    Object.keys(jobEntries).map((key) => (
                        <JobBox
                            key={key}
                            heading={jobEntries[key].jobHeading}
                            category={jobEntries[key].category2}
                            employmentType={jobEntries[key].employmentType}
                            image={jobEntries[key].logoUrl}
                            onClick={() => this.getNewsItem(jobEntries[key].mUrl)}
                        />
                    ))
                    }
                </Row>
                
                <Pagination loading={loading} pagerNext={this.loadNext} pagerPrevious={this.loadPrevious} page={page} />

            </div>
        );
    }
}

export default AdGrid;
