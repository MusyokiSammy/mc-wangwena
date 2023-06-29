import React from 'react'
import InfiniteLooper from '../Features/InfiniteLoop';


const Brands = [
    { id: 1, name: "Binance Campus Tour 2022"},
    { id: 2, name: "Fasu 10th Africa All Games 2022"},
    { id: 3, name: "Shofco Sacco Kibra Activation"},
    { id: 4, name: "Infinix na Comrades Promotion Kenyatta University 2022"},
    { id: 5, name: "Kusa Presidential Tournament 2022/2023"},
    { id: 6, name: "Damsters254 Album Launch(The Guardian) 2022"},
    { id: 7, name: "Mr and Miss Status 2023/2024"},
    { id: 8, name: "Mr & Miss ku Preliminary 2022/2023"},
    { id: 9, name: "Mr & miss Key College 2023/2024"},
    { id: 10, name: "Mr & Miss Kahawa Wendani 2023/2024"},
    { id: 11, name: "Mr & miss Kusa 2023/2024"},
];


const PromotionWrapperSLider = () => {
  return (
    <React.Fragment>
      <section className="bg-[#091F6F] h-36 flex p-2 px-10 lg:px-16 w-full">
        <InfiniteLooper speed="36" direction="left">
            {Brands.map((brand) => (
                <div
                key={brand.id}
                className=" contentBlock contentBlock--one font-Inconsolata uppercase"
                >
                {brand.name}
                </div>
            ))}
        </InfiniteLooper>
      </section>
    </React.Fragment>
  );
}

export default PromotionWrapperSLider