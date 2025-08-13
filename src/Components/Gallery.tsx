
import type { Image } from '../types/image';
import ImageCard from './ImageCard';
type Props = {
  images: Image[];
};

export default function Gallery({ images }: Props) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {images.map((img) => (
          <div className="col" key={img.id}>
            <ImageCard image={img} />
          </div>
        ))}
      </div>
    </div>
  );
}
