import Image from "next/image";
import Link from "next/link";

const MovieDetailsSocial = ({ movie }) => {
  const { title, overview, backdrop_path, id } = movie || {};
  const shareUrl = `https://assignment-8-lws-theta.vercel.app/movie/${id}`;
  // const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/movie/${id}`;
  const imageUrl = `${process.env.NEXT_PUBLIC_TMBD_IMAGE_URL}/${backdrop_path}`;

  // Share URLs

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}&quote=${encodeURIComponent(title + ": " + overview)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    shareUrl
  )}&text=${encodeURIComponent(title + ": " + overview)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <div className="mb-6">
      <h3 className="text-gray-400 mb-2">Share on social media</h3>
      <div className="flex flex-wrap gap-4">
        {/* Facebook */}
        <Link
          href={facebookShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src="http://facebook.com/favicon.ico"
            alt="Facebook"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          />
          <p className="text-sm">Facebook</p>
        </Link>

        {/* Twitter */}
        <Link
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src="http://x.com/favicon.ico"
            alt="Twitter"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          />
          <p className="text-sm">X</p>
        </Link>

        {/* LinkedIn */}
        <Link
          href={linkedinShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src="http://linkedin.com/favicon.ico"
            alt="LinkedIn"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          />
          <p className="text-sm">LinkedIn</p>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetailsSocial;
