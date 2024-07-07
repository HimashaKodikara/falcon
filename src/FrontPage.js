// src/FrontPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  const backgroundImageUrl = 'url("https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/334267379_594463345534399_1040320685889451025_n.png?stp=dst-png_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEOHhxmO6nXEoc3ekv2kE9_uRv050w0xbO5G_TnTDTFs75QMAjnpZProNF22p3GY3-Ra_XUBr2voY-4DcAvp-fk&_nc_ohc=oTnzYTPSbxwQ7kNvgEJHi-m&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBbaXyCLSZXoXThK4KlOwjCVhCr-NVGyQulin1pWwcnWQ&oe=66900014")';

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute justify-center w-full h-full text-center align-middle bg-gray-900 bg-opacity-50">
      <h1 className="z-10 justify-center mb-8 font-serif text-4xl font-bold text-white mt-96 ">Welcome to Falcon Racing</h1>
      <Link to="/gallery">
        <button className="z-10 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
          Go to Gallery
        </button>
      </Link>
      </div>
    </div>
  );
}

export default FrontPage;
