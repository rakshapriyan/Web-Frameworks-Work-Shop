import axios from 'axios';
import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`;

class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      sNo : '',
      aname : '',
      episodes : '',
      genre : '',
      target_date : '',
      is_done : ''
    }
  }

  handleNoChange = (event) =>{
    this.setState({sNo : event.target.value});
  }
  handleNameChange = (event) =>{
    this.setState({aname : event.target.value});
  }
  handleepisodesChange = (event) =>{
    this.setState({episodes : event.target.value});
  }
  handleGenreChange = (event) =>{
    this.setState({genre : event.target.value});
  }
  handleTdateChange = (event) =>{
    this.setState({target_date : event.target.value});
  }
  handleIsDoneChange = (event) =>{
    this.setState({is_done : event.target.value});
  }
  

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ sNo, name, episodes, genre });
    const data = {
      sNo : this.state.sNo ,
      aname : this.state.aname , 
      episodes : this.state.episodes,
      genre  : this.state.genre ,
      target_date  : this.state.target_date,
      is_done  : this.state.is_done 
    }
    console.log(data);
    axios.post('http://127.0.0.1:8080/api/anime', data)

    window.location.reload();
  };

  render (){
    return(
        <Container>
    <h1>Uchiha Watch List</h1>
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="number"
          placeholder="sNo"
          value={this.state.sNo}
          onChange={this.handleNoChange}
        />
        <Input
          type="text"
          placeholder="name"
          value={this.state.aname}
          onChange={this.handleNameChange}
        />
        <Input
          type="text"
          placeholder="Episodes"
          value={this.state.episodes}
          onChange={this.handleepisodesChange}
        />
        <Input
          type="text"
          placeholder="Genre"
          value={this.state.genre}
          onChange={this.handleGenreChange}
        />
        <Input
          type="text"
          placeholder="0000/00/00"
          value={this.state.target_date}
          onChange={this.handleTdateChange}
        />
        <Input
          type="text"
          placeholder="false"
          value={this.state.is_done}
          onChange={this.handleIsDoneChange}
        />
        <Button type="submit">Add Value</Button>
      </Form>
    </Container>
  );
}
}
export default Create;