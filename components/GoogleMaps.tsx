"use client";

import React, { useEffect, useRef } from "react";
import { addClusterMarkers } from "./markers/addClusterMarkers";

const DEFAULT_CENTER =  { lat: 18.5204, lng: 73.8567 }; // Default to Gurgaon, India
const DEFAULT_ZOOM = 13;

export const GoogleMaps = ({
  locations,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && window.google) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        styles: [
          {
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }],
          },
        ],
      });

      addClusterMarkers({ locations, map });
    }
  }, [locations]);

  return (
    <div className="relative w-full h-[500px]">
      <div
        ref={ref}
        className="w-full h-full rounded-lg shadow-lg border border-gray-200 bg-gray-100"
      />
    </div>
  );
};
