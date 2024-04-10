/* eslint-disable quotes */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useMemo, useCallback, useContext } from "react";

import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Button, Input } from "../components";
import images from "../assets";

const CreateNFT = () => {
  const { theme } = useTheme();
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, setformInput] = useState({
    prices: "",
    name: "",
    description: "",
  });

  const onDrop = useCallback(() => {
    // upload image to ipfs
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  
  const fileStyle = useMemo(
    () =>
      `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed  
       ${isDragActive ? " border-file-active " : ""} 
       ${isDragAccept ? " border-file-accept " : ""} 
       ${isDragReject ? " border-file-reject " : ""}`,
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1
          className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl
        font-semibold xs:ml-0 sm:mb-4 flex-1"
        >
          Create a new NFT
        </h1>
        <div className="mt-16">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
            Upload File
          </p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center">
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                  JPG, PNG, GIF, SVG, WEBM, Max 100mb
                </p>

                <div className="my-12 w-full flex justify-center">
                  <Image
                    src={images.upload}
                    alt="upload"
                    width={100}
                    height={100}
                    objectFit="contain"
                    className={theme === "light" && "filter invert"}
                  />
                </div>

                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">
                  Drag and Drop File
                </p>
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">
                  or Browse media on your device
                </p>
              </div>
            </div>
            {fileUrl && (
              <aside>
                <div>
                  <img src={fileUrl} alt="asset_file" />
                </div>
              </aside>
            )}
          </div>
        </div>

        <Input
          inputType="input"
          title="Name"
          handleClick={(e) =>
            setformInput({ ...formInput, name: e.target.value })
          }
          placeholder="NFT Name"
        />
        <Input
          inputType="textarea"
          title="Description"
          handleClick={(e) =>
            setformInput({ ...formInput, description: e.target.value })
          }
          placeholder="NFT Description"
        />
        <Input
          inputType="number"
          title="Price"
          handleClick={(e) =>
            setformInput({ ...formInput, price: e.target.value })
          }
          placeholder="NFT Price"
        />

        <div
          className="w-full flex justify-end
          mt-2"
        >
          <Button
            btnName="Create NFT"
            classStyles="rounded-xl"
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
