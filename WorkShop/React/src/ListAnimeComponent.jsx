import React, { Component } from 'react'
import AnimeService from '../src/components/AnimeService'

class ListAnimeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Anime: []
        }
        this.addAnime = this.addAnime.bind(this);
        this.editAnime = this.editAnime.bind(this);
        this.deleteAnime = this.deleteAnime.bind(this);
    }

    deleteAnime(id){
        AnimeService.deleteAnime(id).then( res => {
            this.setState({Anime: this.state.Anime.filter(Anime => Anime.id !== id)});
        });
    }
    viewAnime(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editAnime(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        AnimeService.getAnime().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addAnime(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.name} </td>   
                                             <td> {employee.episodes}</td>
                                             <td> {employee.genre}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListAnimeComponent