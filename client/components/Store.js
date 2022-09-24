import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchCoordinates, createCoordinates } from "../store";

class Store extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lng: "",
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
        infowindow.setContent(
          `<div class="ui header">${place.name}</div><p>${place.vicinity}</p>`
        );
        infowindow.open(map, marker);
      });
    });
  };

  async getStorePlaces(lat, lng) {
    const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
      lat
    },${lng}&type=${this.state.type}&radius=${
      this.state.radius * 1000
    }&key=${process.env.REACT_APP_API_KEY}`;

    await axios
        .get(URL, {
          Headers: {
            "Access-Control-Allow-Orign": "https://the-cocktelero.herokuapp.com/#/",
          },
        })
        .then((response) => {
          this.setState({ places: response.data.results });
          this.addStoresToGoogleMaps(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  async componentDidMount() {
    if (this.props.coordinates.length === 0) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            await this.props.createCoordinates(position.coords);
            this.getStorePlaces(this.props.coordinates[0].lat, this.props.coordinates[0].lng)
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else {
      this.getStorePlaces(this.props.coordinates[0].lat, this.props.coordinates[0].lng)
    }
  }

  render() {
    const { places } = this.state;

    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <div>
          {places.map((place, idx) => {
            return (
              <div key={idx} style={{ padding: "1rem" }}>
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
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoordinates: () => dispatch(fetchCoordinates()),
    createCoordinates: (coordinates) =>
      dispatch(createCoordinates(coordinates)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
