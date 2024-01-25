import { useRef, useEffect, FC } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import './Map.css';

interface MapProps {
  coordinates: [number, number];
}

const Map: FC<MapProps> = ({ coordinates }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current!,
      style:
        "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: coordinates,
      zoom: coordinates[0] !== 0 && coordinates[1] !== 0 ? 10 : 2,
    });

    new maplibregl.Marker().setLngLat(coordinates).addTo(mapRef.current);

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
  }, [coordinates]);

  return (
    <div className="map" ref={mapContainerRef} />
  );
};

export default Map;
