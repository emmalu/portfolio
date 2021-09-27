import React, { Component } from 'react';
import Projects from './ShowProjects';
import Work from './ShowWork';
import Extras from './ShowExtras';
import Skills from './ShowSkills';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

const dataMap = [{
    sheet: 1,
    sheetType: 'projects',
},{
    sheet: 2,
    sheetType: 'work',
},{
    sheet: 6,
    sheetType: 'extras',
},{
    sheet: 4,
    sheetType: 'skills',
}];

class DataController extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            portfolio: [],
            headers: [],
            isLoaded: false,
        };
    }

    async componentDidMount() {
        if(!this.state.isLoaded){
            let type = this.props.type;
            let thisItem = dataMap.filter(function(dataItem){
                return dataItem.sheetType === type;
            });
            await this.getData( thisItem[0].sheet - 1 );
            //const data = await this.getData()
            //this.setState({ portfolio: data });
        } else{
            this.parseData(this.props.type);
        }
    }
    async getData(sheetIndex) {
        fetch(`api/data?sheet=${String(sheetIndex)}`)
        .then(response => { 
            if(response.ok) return response.json();
        }).then(json => {
            this.setState({portfolio: json});
            this.parseData(this.props.type);
        });
    }

    parseData(type) {
        /* debugger;
        let thisItem = dataMap.filter(function(dataItem){
            return dataItem.sheetType === type;
        });
        let sheetIndex = thisItem[0].sheet; */
        let data = this.state.portfolio.sheetData;
        //console.log(data);
        this.setState({
            data: data.rows,
            headers: data.columns
        });
        this.setState({ isLoaded: true });
    }

    renderLoader(content){
        return (
            //content = <CircularProgress />
            content =
                <div className="flex items-center justify-center h-5">
                    <svg className="animate-spin h-5 w-5 mr-3 text-center" viewBox="0 0 24 24">
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
        );
    }
    renderSkills(content){
        let dataToRender = this.state.data;
        return (
            content = <Paper>
                {
                    dataToRender.map((item,index) => (
                        <Card key={index}>{item.role} {item.org}<br />{item.deployed}</Card>
                    ))
                }
            </Paper>
        );
    }

    render() {
        const portfolioItem = this.props;
        const isLoaded = this.state.isLoaded;
        let content = this.renderLoader();
        if (isLoaded) {
            switch(portfolioItem.type){
                case "projects":
                    //content = this.renderProjects()
                    content = <Projects data={this.state.data}/>
                    break;
                case "work":
                    content = <Work data={this.state.data}/>
                    break;
                case "extras":
                    content = <Extras data={this.state.data}/>
                    break;
                case "skills":
                    content = <Skills data={this.state.data}/>
                    break;
                default:
                    break;
            }
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default DataController;