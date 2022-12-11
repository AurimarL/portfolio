"use client";
import React from "react";
import { Theme } from "react-daisyui";
import Image from "next/image";

export const Card = ({ children }: any) => {
  return (
    <>
      <Theme dataTheme="cyberpunk">
        <div className="card md:w-96 bg-base-100 shadow-lg">
          <div className="card-body bg-base-100">{children}</div>
        </div>
      </Theme>
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
      <Theme dataTheme="cyberpunk">
        <div className="card md:w-96 bg-base-100 shadow-lg">
          <figure className="relative h-[250px]">
            <Image src={Src} alt="Shoes" fill />
          </figure>
          <div className="card-body bg-base-100">{children}</div>
        </div>
      </Theme>
    </>
  );
};
