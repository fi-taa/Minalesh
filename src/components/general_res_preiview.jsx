import HRP from "../components/homepage_res_preview";

function general_res_preiview() {
  const array = [...Array(20)];
  const view = (
    <HRP
      foodName="LPS Special"
      restaurantName="kefira Restaurant"
      foodImage="/image_for_homepage_res_preview.jpeg"
      ingridient="Lemon,pepper,salt"
      location="4 Kilo"
      rating="4.5"
    />
  );

  return (
    <div className="grid grid-cols-4">
      {array.map((_) => (
        <div>{view}</div>
      ))}
    </div>
  );
}

export default general_res_preiview;
