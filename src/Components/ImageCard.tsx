
import type { Image } from "../types/image";
type Props = {
  image: Image;
};

export default function ImageCard({ image }: Props) {
  return (
    <div className="card">
      <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
      <div className="p-2 text-sm text-gray-700">
        {image.author && <span>Photo by {image.author}</span>}
      </div>
    </div>
  );
}
