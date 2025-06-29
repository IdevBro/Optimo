import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-white shadow p-[20px]  flex justify-between">
      <Link href={"/"}>
        <h1 className=" text-[24px] font-bold">OPTIMO</h1>
      </Link>
      <div className="flex gap-[15px] items-center ">
        <Link href={"/profil"}>
          <p className=" text-[16px]">Mirfazil Mirsharipov</p>
        </Link>
        <div className="rounded-[50%] w-[40px] h-[40px]">
          <Image
            className="rounded-[50%]"
            src="/images/teacher_profil.jpg"
            alt="Teacher_profil"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
