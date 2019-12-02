import React, { Component } from 'react'
import {withGoogleMap ,GoogleMap, Marker} from "react-google-maps"

export default class Selabmap extends Component {

    render() {
        const SelabGoogleMap = withGoogleMap(props => (
            <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: 37.296456, lng: 126.838862 }}
            >
            {props.isMarkerShown && <Marker position={{ lat: 37.296456, lng: 126.838862 }} />}
            </GoogleMap>
         ))
         
        return (
            <div>
                <SelabGoogleMap
                containerElement={ <div style={{ height: `300px`, width: '300px' }} /> }
                mapElement={ <div style={{ height: `100%` }} /> }
                isMarkerShown />
            </div>
        )
    }
}
