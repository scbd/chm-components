<template>
  <div id="mapView1"></div>
</template>

<script>
import '@arcgis/core/assets/esri/themes/dark/main.css';
// import WebMap from "@arcgis/core/WebMap"
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
// import { load as projectionLoad, project } from "@arcgis/core/geometry/projection"
import config from '@arcgis/core/config';
import locator from '@arcgis/core/rest/locator';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import * as Intl from '@arcgis/core/intl';
// import TileLayer from "@arcgis/core/layers/TileLayer"
import Basemap from '@arcgis/core/Basemap';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
// import Graphic from "@arcgis/core/Graphic";
// import ElevationLayer from '@arcgis/core/layers/ElevationLayer'
// import BaseElevationLayer from '@arcgis/core/layers/BaseElevationLayer'

// import SpatialReference from '@arcgis/core/geometry/SpatialReference'
// import Graphic from '@arcgis/core/Graphic'
// import Point from '@arcgis/core/geometry/Point'
// import Mesh from '@arcgis/core/geometry/Mesh'
// import watchUtils from '@arcgis/core/watchUtils'

import getCircleMarker from './circle-markers';
import countryCodes from '../assets/country-codes.json';

const key         = 'AAPK646a81c542644891abe68e9b21413e7d9MDczfDifZi8IyvG6QcxfFuNqSRmlqH95-PH9mBOSEf4a4eE2Nwt8wIRsBLWd4NO';
const globalProps = {};

export default {
  name: 'ArcGisMapBase',
  data,
  created,
  mounted,
};

function data() {
  return { map: undefined };
}

const countries = new FeatureLayer({
  // This URL still doesn't work
  // url: 'https://geoportal.un.org/arcgis/home/webmap/viewer.html?useExisting=1&layers=ef3a590937a7496fa178bab3f564a4e2&layerId=0',
  portalItem: {
    id: '53a1e68de7e4499cad77c80daba46a94',
  },
});

const worldImg = new TileLayer({
  //   url: 'https://geoservices.un.org/arcgis/rest/services/ClearMap_WebDark/MapServer',
  portalItem: {
    // bottom layer in the group layer
    id: '10df2279f9684e4a9f6a7f08febac2a9', // world imagery
  },
});

worldImg.when(() => {
  worldImg.sublayers.forEach((layer) => {
    if (layer.popupEnabled === true) {
      layer.popupEnabled = false; // eslint-disable-line no-param-reassign
    }
  });
});

const countryGraphicsLayer = new GraphicsLayer({
  blendMode: 'destination-in',
  title    : 'layer',
  //   effect   : 'bloom(200%)',
});

const tileLayer = new TileLayer({
  //   url: 'https://geoservices.un.org/arcgis/rest/services/ClearMap_WebDark/MapServer',
  portalItem: {
    // bottom layer in the group layer
    id: '10df2279f9684e4a9f6a7f08febac2a9', // world imagery
  },
});

tileLayer.when(() => {
  tileLayer.sublayers.forEach((layer) => {
    if (layer.popupEnabled === true) {
      layer.popupEnabled = false; // eslint-disable-line no-param-reassign
    }
  });
});
const groupLayer = new GroupLayer({
  layers : [ tileLayer, countryGraphicsLayer ],
  opacity: 0, // initially this layer will be transparent
});

function created() {
  config.apiKey      = key;
  config.locale      = 'ca';
  config.parseOnLoad = true;
  // config.assetsPath = 'https://cdn.jsdelivr.net/npm/@arcgis/core@4.20.2/assets/'

  Intl.setLocale('CA');

  const baseTileLayer = new MapImageLayer({
    url: 'https://geoservices.un.org/arcgis/rest/services/ClearMap_WebDark/MapServer',
  });

  const basemap = new Basemap({
    baseLayers: [ baseTileLayer ],
    // baseLayers: [ new TileLayer({ url: "https://tiles.arcgis.com/
    // tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/terrain_with_heavy_bathymetry/MapServer", }), ],
  });

  console.log(basemap);
  // this.map  = new Map({ basemap });
  this.map = new Map({
    // basemap,
    layers: [ worldImg, groupLayer ],
  });
}

function mounted() {
  const countryList = countryCodes.ref_country_codes;

  const params      = (new URL(document.location)).searchParams;
  const countryCode = params.get('country') || 'CA';

  const findCountry = countryList.find((f) => f.alpha2 === countryCode) || { latitude: 60, longitude: -95 };

  const { latitude, longitude } = findCountry;
  globalProps.mapView           = new MapView({
    container  : 'mapView1',
    map        : this.map,
    zoom       : 6,
    center     : [ longitude, latitude ],
    popup      : null,
    constraints: {
      snapToZoom: false,
      minScale  : 147914381,
    },
  });

  Intl.setLocale('ca');

  console.log('this.mapView', globalProps.mapView.when);

  globalProps.mapView.when(() => {
    // globalProps.mapView.graphics.add(getCircleMarker(100, globalProps.mapView));
    const query = {
      geometry      : globalProps.mapView.center,
      // geometry      : globalProps.mapView.center,
      returnGeometry: true,
      outFields     : [ '*' ],
    };
    highlightCountry(query, globalProps.mapView.center);
  });

  //   view.when(() => {
  //     const query = {
  //       geometry      : view.center,
  //       returnGeometry: true,
  //       outFields     : [ '*' ],
  //     };
  //     highlightCountry(query, view.center);
  //   });

  globalProps.mapView.on('click', async (event) => {
    console.log(globalProps.mapView.toMap(event));
    const query = {
      geometry      : globalProps.mapView.toMap(event),
      returnGeometry: true,
      outFields     : [ '*' ],
    };
    highlightCountry(query, query.geometry);
  });
}

const locatorUrl = 'http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer';

// Find places and add them to the map
function findPlaces(category, pt) {
  locator.addressToLocations(locatorUrl, {
    location    : pt,
    categories  : [ category ],
    maxLocations: 25,
    outFields   : [ 'Place_addr', 'PlaceName' ],
  })

    .then((results) => {
      view.popup.close();
      view.graphics.removeAll();

      results.forEach((result) => {
        view.graphics.add(
          new Graphic({
            attributes: result.attributes,  // Data attributes returned
            geometry  : result.location, // Point returned
            symbol    : {
              type   : 'simple-marker',
              color  : '#000000',
              size   : '12px',
              outline: {
                color: '#ffffff',
                width: '2px',
              },
            },

            popupTemplate: {
              title  : '{PlaceName}', // Data attribute names
              content: '{Place_addr}',
            },
          }),
        );
      });
    });
}

async function highlightCountry(query, zoomGeometry) {
  const symbol = {
    type   : 'simple-fill',
    color  : 'rgba(255, 255, 255, 1)', // white
    outline: null,
  };
  const {
    features: [ feature ],
  } = await countries.queryFeatures(query);

  if (feature) {
    countryGraphicsLayer.graphics.removeAll();
    feature.symbol = symbol;
    countryGraphicsLayer.graphics.add(feature);
    // zoom to the highlighted country
    globalProps.mapView.goTo(
      {
        target: zoomGeometry,
        extent: feature.geometry.extent.clone().expand(1.8),
      },
      { duration: 1000 },
    );
    worldImg.effect    = 'blur(8px) brightness(1) grayscale(0.8)';
    groupLayer.effect  = 'brightness(1.2) drop-shadow(0, 0px, 3px)';
    groupLayer.opacity = 1;
  } else {
    // did not click on a country. remove effects
    worldImg.effect   = null;
    groupLayer.effect = null;
  }
}
</script>
<style scoped>
#mapView1 {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
