import React from "react";

const Admin = () => {
  const adminlar = [
    {
      name: "Azamat Abduraimov",
      phone: "+99899 999 99 99",
      address: "Uchtepa",
    },
    {
      name: "Azamat Abduraimov",
      phone: "+99899 999 99 99",
      address: "Uchtepa",
    },
  ];

  return (
    <div>
      <h1 className="font-bold">ADMINLAR - {adminlar.length}ta</h1>
      {adminlar.map((admin, i) => (
        <div
          key={i}
          className="flex pl-2.5 pr-2.5 justify-between mt-10 items-center shadow-xl h-15"
        >
          <p>{admin.name}</p>
          <p>{admin.phone}</p>
          <p>{admin.address}</p>
        </div>
      ))}
    </div>
  );
};

export default Admin;
