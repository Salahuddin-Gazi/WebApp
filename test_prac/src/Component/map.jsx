import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class GoogleApiWrapper extends Component {
  state = {
    width: "100%",
    height: "100%",
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={this.state}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    );
  }
}

// export default GoogleApiWrapper;
export default GoogleApiWrapper({
  apiKey: "TOKEN HERE",
})(MapContainer);
