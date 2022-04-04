<template>
  <div id="mapView">
    <div id="infoDiv">
      <img
        src="../assets/Flag_of_Europe.png"
        alt="European union"
        width="120"
        height="80"
      />
    </div>
  </div>
</template>

<script>
import '@arcgis/core/assets/esri/themes/dark/main.css';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import QueryTask from '@arcgis/core/tasks/QueryTask';
import Query from '@arcgis/core/tasks/support/Query';
import config from '@arcgis/core/config';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
// import Extent from '@arcgis/core/geometry/Extent';
import countryCodes from '../assets/country-codes.json';
import { defineComponent } from 'vue';

const key =
  'AAPK646a81c542644891abe68e9b21413e7d9MDczfDifZi8IyvG6QcxfFuNqSRmlqH95-PH9mBOSEf4a4eE2Nwt8wIRsBLWd4NO';


export default defineComponent({
  setup(){
    const globalProps = {};
    const map = undefined

    const countries = new FeatureLayer({
      portalItem: {
        id: '53a1e68de7e4499cad77c80daba46a94'
      }
    });

    const worldImg = new TileLayer({
      portalItem: {
        // bottom layer in the group layer
        id: '10df2279f9684e4a9f6a7f08febac2a9' // world imagery
      }
    });

    worldImg.when(() => {
      worldImg.sublayers.forEach((layer) => {
        if (layer.popupEnabled === true) layer.popupEnabled = false; // eslint-disable-line no-param-reassign
      });
    });

    const countryGraphicsLayer = new GraphicsLayer({
      blendMode: 'destination-in',
      title    : 'layer'
    });

    const tileLayer = new TileLayer({
      portalItem: {
        // bottom layer in the group layer
        id: '10df2279f9684e4a9f6a7f08febac2a9' // world imagery
      }
    });

    const groupLayer = new GroupLayer({
      layers : [ tileLayer, countryGraphicsLayer ],
      opacity: 0 // initially this layer will be transparent
    });

    globalProps.mapView           = new MapView({
      container: 'mapView'
    });

    ////old code

    // const map = new Map({
    //   basemap: 'topo-vector'
    // });

    // const view = new MapView({
    //   container: 'mapView', // just pass this here to set required property
    //   map,
    //   zoom     : 5,
    //   center   : [ -95, 39 ],
    //   popup    : {
    //     autoOpenEnabled: false
    //   }
    // });

    // const layer = new FeatureLayer({
    //   portalItem: {
    //     id: '9e2f2b544c954fda9cd13b7f3e6eebce'
    //   },
    //   outFields: [ '*' ],
    //   title    : 'Recent Earthquakes'
    // });

    // map.add(layer);

    return {
      countries,
      groupLayer,
      countryGraphicsLayer,
      globalProps,
      map,
      tileLayer,
      worldImg
      // view,
      // map,
      // layer
    };
  },

  created(){
    config.apiKey = key;
    config.locale = 'ca';
    config.parseOnLoad = true;

    this.tileLayer.when(() => {
      this.tileLayer.sublayers.forEach((layer) => {
        if (layer.popupEnabled === true) layer.popupEnabled = false; // eslint-disable-line no-param-reassign
      });
    });

    this.map = new Map({
      layers: [ this.worldImg, this.groupLayer ]
    });
    // // verify we have access to view, layer
    // console.log('view: ', this.view)
    // console.log('map: ', this.map)

    // /**
    //  * the map actually won't render from our setup() because the
    //  * "esri-map" div does not exist yet, so we must re-set it here
    //  */
    // nextTick(() => this.view.container = this.$refs.esriMap)

    // // here is where we can actually test things out
    // this.view.whenLayerView(this.layer).then((layerView) => {
    //   console.log('layerview generated');
    //   console.log(layerView);
    // });
  },
  mounted,
  methods: {
    highlightCountry
  }
});

function mounted(){
  const countryList = countryCodes.ref_country_codes;
  const url         = new URL(window.location);
  const params      = url.searchParams;
  const countryCode = params.get('country') || 'CA';

  const findCountry = countryList.find((f) => f.alpha2 === countryCode) || {
    latitude : 60,
    longitude: -95
  };

  const { latitude, longitude } = findCountry;

  this.globalProps.mapView           = new MapView({
    container  : 'mapView',
    map        : this.map,
    zoom       : 6,
    center     : [ longitude,  latitude ], // [ longitude, latitude ]
    popup      : null,
    constraints: {
      snapToZoom: false,
      minScale  : 147914381
    }
  });

  this.globalProps.mapView.when(() => {
    const query = {
      geometry      : this.globalProps.mapView.center,
      returnGeometry: true,
      outFields     : [ '*' ]
    };

    this.highlightCountry(query, this.globalProps.mapView.center);
  });

  const queryTask = new QueryTask({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries_(Generalized)/FeatureServer/0'
  });

  const queryMap          = new Query();

  queryMap.returnGeometry = false;
  queryMap.outFields      = [ 'COUNTRY' ];

  this.globalProps.mapView.on('click', (event) => {
    const query       = {
      geometry      : this.globalProps.mapView.toMap(event),
      returnGeometry: true,
      outFields     : [ '*' ]
    };

    queryMap.geometry = event.mapPoint;
    queryTask.execute(queryMap).then((results) => {
      const selectedCountryName = results.features[0].attributes.COUNTRY;
      const countryDetails      = countryList.find(
        (f) => String(f.country).toLowerCase()
          === String(selectedCountryName).toLowerCase()
      );

      params.set('country', countryDetails.alpha2);
      window.history.pushState({}, '', url);
    });

    this.highlightCountry(query, query.geometry);
  });
}

async function highlightCountry(query, zoomGeometry){
  console.log(zoomGeometry);
  const symbol = {
    type   : 'simple-fill',
    color  : 'rgba(255, 255, 255, 1)', // white
    outline: null
  };

  const {
    features: [ feature ]
  } = await this.countries.queryFeatures(query);

  if (feature){
    this.countryGraphicsLayer.graphics.removeAll();
    feature.symbol = symbol;
    this.countryGraphicsLayer.graphics.add(feature);
    // zoom to the highlighted country
    this.globalProps.mapView.goTo(
      {
        target: zoomGeometry,
        extent: feature.geometry.extent.clone().expand(1.8)
      },
      { duration: 400 }
    );
    this.worldImg.effect    = 'blur(8px) brightness(1) grayscale(0.8)';
    this.groupLayer.effect  = 'brightness(1.2) drop-shadow(0, 0px, 3px)';
    this.groupLayer.opacity = 1;
  }
  else {
    // did not click on a country. remove effects
    this.worldImg.effect   = null;
    this.groupLayer.effect = null;
  }
}

// export default {
//   name: 'Temp',
//   data,
//   created,
//   mounted
// };

// function data(){
//   return { map: undefined };
// }

// const countries = new FeatureLayer({
//   portalItem: {
//     id: '53a1e68de7e4499cad77c80daba46a94'
//   }
// });

// const worldImg = new TileLayer({
//   portalItem: {
//     // bottom layer in the group layer
//     id: '10df2279f9684e4a9f6a7f08febac2a9' // world imagery
//   }
// });

// worldImg.when(() => {
//   worldImg.sublayers.forEach((layer) => {
//     if (layer.popupEnabled === true)
//       layer.popupEnabled = false; // eslint-disable-line no-param-reassign
//   });
// });

// const countryGraphicsLayer = new GraphicsLayer({
//   blendMode: 'destination-in',
//   title    : 'layer'
// });

// const tileLayer = new TileLayer({
//   portalItem: {
//     // bottom layer in the group layer
//     id: '10df2279f9684e4a9f6a7f08febac2a9' // world imagery
//   }
// });

// tileLayer.when(() => {
//   tileLayer.sublayers.forEach((layer) => {
//     if (layer.popupEnabled === true)
//       layer.popupEnabled = false; // eslint-disable-line no-param-reassign
//   });
// });
// const groupLayer = new GroupLayer({
//   layers : [ tileLayer, countryGraphicsLayer ],
//   opacity: 0 // initially this layer will be transparent
// });

// function created(){
//   config.apiKey      = key;
//   config.locale      = 'ca';
//   config.parseOnLoad = true;

//   this.map = new Map({
//     layers: [ worldImg, groupLayer ]
//   });
// }

// function mounted(){
//   // document.getElementById('title').innerHTML = 'European union';
//   const countryList = countryCodes.ref_country_codes;
//   const url         = new URL(window.location);
//   const params      = url.searchParams;
//   const countryCode = params.get('country') || 'CA';

//   const findCountry = countryList.find((f) => f.alpha2 === countryCode) || {
//     latitude : 60,
//     longitude: -95
//   };

//   const { latitude, longitude } = findCountry;

//   globalProps.mapView           = new MapView({
//     container  : 'mapView',
//     map        : this.map,
//     zoom       : 6,
//     center     : [ longitude,  latitude ], // [ longitude, latitude ]
//     popup      : null,
//     constraints: {
//       snapToZoom: false,
//       minScale  : 147914381
//     }
//   });

//   // globalProps.mapView.center = [ 15.0000,  64 ];
//   // Sets the center point of the view at a specified lon/lat
//   // globalProps.mapView.zoom   = 13;  // Sets the zoom LOD to 13

//   // Set the extent on the view
//   // globalProps.mapView.extent = new Extent({
//   //   xmin            : -9177882,
//   //   ymin            : 4246761,
//   //   xmax            : -9176720,
//   //   ymax            : 4247967,
//   //   spatialReference: {
//   //     wkid: 102100,
//   //   },
//   // });

//   globalProps.mapView.when(() => {
//     const query = {
//       geometry      : globalProps.mapView.center,
//       returnGeometry: true,
//       outFields     : [ '*' ]
//     };

//     highlightCountry(query, globalProps.mapView.center);
//   });

//   // globalProps.mapView12 = new MapView({
//   //   container  : 'mapView',
//   //   map        : this.map,
//   //   zoom       : 6,
//   //   center     : [ -97, 38 ],
//   //   popup      : null,
//   //   constraints: {
//   //     snapToZoom: false,
//   //     minScale  : 147914381,
//   //   },
//   // });

//   // globalProps.mapView12.when(() => {
//   //   const query = {
//   //     geometry      : globalProps.mapView12.center,
//   //     returnGeometry: true,
//   //     outFields     : [ '*' ],
//   //   };
//   //   highlightCountry(query, globalProps.mapView12.center);
//   // });

//   const queryTask = new QueryTask({
//     url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries_(Generalized)/FeatureServer/0'
//   });

//   const queryMap          = new Query();

//   queryMap.returnGeometry = false;
//   queryMap.outFields      = [ 'COUNTRY' ];

//   globalProps.mapView.on('click', async (event) => {
//     const query       = {
//       geometry      : globalProps.mapView.toMap(event),
//       returnGeometry: true,
//       outFields     : [ '*' ]
//     };

//     queryMap.geometry = event.mapPoint;
//     queryTask.execute(queryMap).then((results) => {
//       const selectedCountryName = results.features[0].attributes.COUNTRY;
//       const countryDetails      = countryList.find(
//         (f) => String(f.country).toLowerCase()
//           === String(selectedCountryName).toLowerCase()
//       );

//       params.set('country', countryDetails.alpha2);
//       window.history.pushState({}, '', url);
//     });

//     highlightCountry(query, query.geometry);
//   });
// }

// async function highlightCountry(query, zoomGeometry){
//   console.log(zoomGeometry);
//   const symbol = {
//     type   : 'simple-fill',
//     color  : 'rgba(255, 255, 255, 1)', // white
//     outline: null
//   };
//   const {
//     features: [ feature ]
//   } = await countries.queryFeatures(query);

//   if (feature){
//     countryGraphicsLayer.graphics.removeAll();
//     feature.symbol = symbol;
//     countryGraphicsLayer.graphics.add(feature);
//     // zoom to the highlighted country
//     globalProps.mapView.goTo(
//       {
//         target: zoomGeometry,
//         extent: feature.geometry.extent.clone().expand(1.8)
//       },
//       { duration: 400 }
//     );
//     worldImg.effect    = 'blur(8px) brightness(1) grayscale(0.8)';
//     groupLayer.effect  = 'brightness(1.2) drop-shadow(0, 0px, 3px)';
//     groupLayer.opacity = 1;
//   }
//   else {
//     // did not click on a country. remove effects
//     worldImg.effect   = null;
//     groupLayer.effect = null;
//   }
// }
</script>
<style scoped>
#mapView {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
#infoDiv {
  height: 80px;
  z-index: 2;
  padding: 10px;
  width: 180px;
  background-color: white;
  position: absolute;
  left: 20px;
  bottom: 20px;
  font-family: Verdana, Helvetica, sans-serif;
  font-size: 16px;
  color: #444;
  text-align: center;
}
</style>
