import React from "react";
import { connect } from "react-redux";
import { fetchCoordinates, createCoordinates } from "../store";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

var map;

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
    this.showStoreInfo = this.showStoreInfo.bind(this);
  }

  showStoreInfo(lat, lng, name, vicinity) {
    const storeIcon = {
      url: "../public/store.png",
      scaledSize: new google.maps.Size(80, 80),
    };

    const marker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(lat, lng),
      map: map,
      icon: storeIcon,
    });

    marker.infowindow = new window.google.maps.InfoWindow();
    marker.infowindow.setContent(`<div class="ui header">${name}</div><p>${vicinity}</p>`);
    marker.infowindow.open(map, marker);
  }

  addStoresToGoogleMaps = (places) => {
    map = new window.google.maps.Map(document.querySelector("#map"), {
      zoom: 15,
      center: new window.google.maps.LatLng(
        this.props.coordinates[0].lat,
        this.props.coordinates[0].lng
      ),
      mapTypeId: "roadmap",
    });

    const youHere = {
      url: "../public/you-here.png",
      scaledSize: new google.maps.Size(90, 90),
    };

    const youMarker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(
        this.props.coordinates[0].lat,
        this.props.coordinates[0].lng
      ),
      map: map,
      icon: youHere,
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
    await fetch("http://localhost:8080/api/stores/", {
      headers: {
        lat: lat,
        lng: lng,
        type: this.state.type,
        radius: this.state.radius,
        key: process.env.REACT_APP_API_KEY,
      },
    })
      .then(async (response) => {
        const data = await response.json();
        this.setState({ places: data.results });
        this.addStoresToGoogleMaps(data.results);
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
            this.getStorePlaces(
              this.props.coordinates[0].lat,
              this.props.coordinates[0].lng
            );
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else {
      this.getStorePlaces(
        this.props.coordinates[0].lat,
        this.props.coordinates[0].lng
      );
    }
  }

  render() {
    const { places } = this.state;
    const { showStoreInfo } = this;

    return (
      <div className="storeseverything">
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        {places.length === 0 ? (
          <div style={{ marginLeft: "48%", marginTop: "12%" }}>
            <RotatingLines
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
            />
          </div>
        ) : (
          <div>
            <h3 className="liquorstores">Liquor Stores</h3>
            {places.map((place, idx) => {
              return (
                <div key={idx} style={{ padding: "1rem" }}>
                  <div className="plcename">{place.name}</div>
                  <div>{place.vicinity}</div>
                  <button
                    onClick={() =>
                      showStoreInfo(
                        place.geometry.location.lat,
                        place.geometry.location.lng,
                        place.name,
                        place.vicinity
                      )
                    }
                  >
                    See Store Info
                  </button>
                </div>
              );
            })}
          </div>
        )}
        <div id="map" style={{ height: "100vh", width: "100vh" }}></div>
      </div>
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
