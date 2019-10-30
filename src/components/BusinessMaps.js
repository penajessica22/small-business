import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

class BusinessMaps extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=62f413134139dfa397a918451e229c620da3abf3&callback=initMap"
    )
      .then(res => {
          console.log('literaldsjf')
          return res
      })
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <div></div>
      //     <GoogleMapReact
      //     bootstrapURLKeys={{
      //         key: `62f413134139dfa397a918451e229c620da3abf3`,
      //         language: 'en'
      //      }}
      // defaultCenter={{lat: 40.73 , lng: -79.93}}
      // center={{lat: 40.73 , lng: -79.93}}
      // defaultZoom={12}
      // />
    );
  }
}

BusinessMaps.propTypes = {};

export default BusinessMaps;
