import React, { Component, } from 'react';
import Map, { Marker, InfoWindow } from 'google-maps-react';
import Autoresponsive from 'autoresponsive-react';

export default class MapTest extends Component {
    render() {
        return (
            <div>
                <Map google={window.google} />
                {/*<Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>*/}
            </div>
        )
    }
}

