import Image from "next/image";

function homepage_res_preview(props) {
  return (
    <div>
      <div className="bg-white flex flex-col m-6 rounded-lg drop-shadow-lg w-[200px] h-[220px]">
        <div className="bg-[#FCAF58] flex flex-col  items-center rounded-lg  h-[60px]">
          <h1 className="font-semibold text-white ">{props.foodName}</h1>
          <h2>{props.restaurantName}</h2>
        </div>
        <Image
          src={props.foodImage}
          width={500}
          height={150}
          className="h-24 object-cover "
        />
        <div className="px-2 ">
          <p className=" text-sm ">
            Ingridient: {props.ingridient}
            <br />
            location : {props.location} <br />
            Rating : {props.rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default homepage_res_preview;
