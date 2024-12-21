import Image from "next/image";

const ShareSocial = () => (
  <div className="mb-6">
    <h3 className="text-gray-400 mb-2">Share on Social Media</h3>
    <div className="flex flex-wrap gap-4">
      {[
        { name: "Facebook", url: "http://facebook.com/favicon.ico" },
        { name: "X", url: "http://x.com/favicon.ico" },
        { name: "LinkedIn", url: "http://linkedin.com/favicon.ico" },
      ].map((social) => (
        <button key={social.name} className="text-center cursor-pointer">
          <Image
            width={100}
            height={100}
            src={social.url}
            alt={social.name}
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          />
          <p className="text-sm">{social.name}</p>
        </button>
      ))}
    </div>
  </div>
);

export default ShareSocial;
