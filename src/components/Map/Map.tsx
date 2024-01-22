import React, { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current!,
      style:
        "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [0, 0],
      zoom: 1,
    });

    const resizeHandler = () => {
      if (mapRef.current) {
        mapRef.current.resize();
      }
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div ref={mapContainerRef} style={{ height: "500px", width: "900px" }} />
  );
};

export default Map;