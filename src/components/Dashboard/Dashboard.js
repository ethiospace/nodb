import React, { Component } from "react";
import axios from "axios";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      BrewName: [],
      name: "",
      brewery_type: "",
      state: ""
    };

    this.nameInputHundler = this.nameInputHundler.bind(this);
    this.addBrew = this.addBrew.bind(this);
    this.updateBrew = this.updateBrew.bind(this);
    this.deleteBrew = this.deleteBrew.bind(this);
    this.nameInputHundler = this.nameInputHundler.bind(this);
    this.cityInputHundler = this.cityInputHundler.bind(this);
    this.addressInputHundler = this.addressInputHundler.bind(this);
    this.brewery_typeHundler = this.brewery_typeHundler.bind(this);
    this.stateInputHundler = this.stateInputHundler.bind(this);
  }
  componentDidMount() {
    // console.log(this.state);
    axios.get("/api/breweries").then(response => {
      // console.log(response);

      this.setState({ breweries: response.data });
    });
  }

  addBrew(e) {
    e.preventDefault();
    let breweryy = {
      name: this.state.name,
      brewery_type: this.state.brewery_type,
      state: this.state.state,
      city: this.state.city,
      address: this.state.address
    };
    // let newbreweries = this.state.breweries;
    // console.log(newbreweries);
    axios
      .post("/api/breweries", breweryy)
      .then(response => {
        console.log(response);
        // breweries.push(response);

        this.setState({
          breweries: response.data,
          name: "",
          address: "",
          city: "",
          brewery_type: "",
          state: ""
        });
        console.log(response.data);
      })
      .catch(e => alert(e));
  }

  updateBrew(name) {
    const newName = this.state.name;
    console.log(newName);
    axios.put(`/api/breweries/${name}`, { newName }).then(response => {
      this.setState({ breweries: response.data });
    });
    // .catch(console.log("hi"));
  }
  deleteBrew(id) {
    axios.delete(`/api/breweries/${id}`).then(response => {
      this.setState({ breweries: response.data });
      console.log(response.data);
    });
  }

  nameInputHundler(e) {
    this.setState({ name: e.target.value });
  }
  stateInputHundler(e) {
    this.setState({ state: e.target.value });
  }
  cityInputHundler(e) {
    this.setState({ city: e.target.value });
  }
  addressInputHundler(e) {
    this.setState({ address: e.target.value });
  }
  brewery_typeHundler(e) {
    this.setState({ brewery_type: e.target.value });
  }
  render() {
    // console.log(this.state);
    let brew = this.state.breweries.map((brewer, i) => {
      return (
        <tr key={i}>
          <th scope="row">{brewer.name}</th>
          <td id="">{brewer.address}</td>
          {/* <td id="">{brewer.email}</td> */}
          <td id="">{brewer.city}</td>
          <td id="">{brewer.phone}</td>
          <td id="">{brewer.state}</td>
          <td id="">{brewer.postal_code}</td>
          <td id="">{brewer.brewery_type}</td>
          <td id="">{brewer.updated_at}</td>
          <td>
            <input
              className="Name"
              type="text"
              onChange={e => this.nameInputHundler(e)}
              placeholder="Name"
              value={this.state.breweries.name}
            />
          </td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.deleteBrew(brewer.id)}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => this.updateBrew(brewer.id)}
            >
              Update
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <div>
          <h2 id="banner">Brewery Companies </h2>
          <div>
            <table className="table table-striped">
              <thead className="table-head">
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>State</th>
                  <th>P_code</th>
                  <th>Type</th>
                  <th>Updated</th>
                  <th />
                </tr>
              </thead>

              <tbody className=" alert alert-info">{brew}</tbody>
            </table>
          </div>
        </div>
        <div className="Form_wrapper">
          <form className="form_box" onSubmit={this.addBrew}>
            <p className="h4 mb-4">Create Company</p>
            <h6>Name</h6>
            <input
              className="Name"
              type="text"
              onChange={e => this.nameInputHundler(e)}
              placeholder="Name"
              value={this.state.name}
            />
            <h6>Address</h6>
            <input
              className="address"
              type="text"
              onChange={e => this.addressInputHundler(e)}
              placeholder="Address"
              value={this.state.address}
            />
            <h6>City</h6>
            <input
              className="City"
              type="text"
              onChange={e => this.cityInputHundler(e)}
              placeholder="City"
              value={this.state.city}
            />
            <h6>State</h6>
            <input
              className="state"
              type="text"
              onChange={e => this.stateInputHundler(e)}
              placeholder="State"
              value={this.state.state}
            />
            <h6>brewery_type</h6>
            <input
              className="brewery_type"
              type="text"
              onChange={e => this.brewery_typeHundler(e)}
              placeholder="Brewery_type"
              value={this.state.brewery_type}
            />
            <br />
            <br />
            <button className="btn btn-primary btn-sm">
              Add Brewery Company
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Dashboard;
