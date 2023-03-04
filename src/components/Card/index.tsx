"use client";
import React from "react";
import Image from "next/image";

// TODO: MAKE A GLOWING BORDER FOR THE CARDS
export const Card = ({ children }: any) => {
  return (
    <>
      <div className="card card-compact rounded-md border md:w-96 shadow-md ">
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};

export interface ICardWithImage {
  Src: string;
  children: any;
}
export const CardWithImage = ({ children, Src }: ICardWithImage) => {
  return (
    <>
      <div className="card card-compact border rounded-sm w-80  shadow-md">
        <figure className="relative h-[250px]">
          <Image src={Src} alt="Shoes" fill />
        </figure>
        <div className="card-body bg-base-100">{children}</div>
      </div>
    </>
  );
};
