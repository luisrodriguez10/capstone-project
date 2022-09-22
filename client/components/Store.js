import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class Store extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "liquor_store",
      radius: "50",
      places: [],
    };
  }

  addStoresToGoogleMaps = (places) => {
    var map = new window.google.maps.Map(document.querySelector("#map"), {
      zoom: 15,
      center: new window.google.maps.LatLng(
        this.props.coordinates[0].lat,
        this.props.coordinates[0].lng
      ),
      mapTypeId: "roadmap",
    });
    places.forEach((place) => {
      const lat = place.geometry.location.lat;
      const lng = place.geometry.location.lng;

      let marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(lat, lng),
        map: map,
      });
      var infowindow = new window.google.maps.InfoWindow();
      window.google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(`<div class="ui header">${place.name}</div><p>${place.vicinity}</p>`);
        infowindow.open(map, marker);
      });

    });

  };

  async componentDidMount() {

    const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
      this.props.coordinates[0].lat
    },${this.props.coordinates[0].lng}&type=${this.state.type}&radius=${
      this.state.radius * 1000
    }&key=${process.env.REACT_APP_API_KEY}`;

    // const body = {
    //   lat: this.props.coordinates[0].lat,
    //   lng: this.props.coordinates[0].lng,
    //   type: this.state.type,
    //   radius: this.state.radius * 1000,
    //   key: process.env.REACT_APP_API_KEY
    // }

    // fetch('http://localhost:8080/stores', {method: 'GET'} ).then(response => {
    //   console.log(response)
    // })

    await axios.get(URL, {
        Headers: {
          "Access-Control-Allow-Orign": 'http://localhost:8080'
        },
      })
      .then((response) => {
        console.log(response)
        this.setState({ places: response.data.results });
        this.addStoresToGoogleMaps(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { places } = this.state;

    return (
      <div style={{ display: "flex", justifyContent: "center", padding: '2rem' }}>
        <div>
          {places.map((place, idx) => {
            return (
              <div key={idx} style={{ padding: '1rem'}}>
                <div>{place.name}</div>
                <div>{place.vicinity}</div>
              </div>
              
            );
          })}
        </div>
        <div id="map" style={{ height: "100vh", width: "100vh" }}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coordinates: state.coordinates,
  };
};

export default connect(mapStateToProps)(Store);
