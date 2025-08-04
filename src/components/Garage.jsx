function Car({brand}) {
  return <h2> I am a {brand.name}, {brand.model }!</h2>;
}

export function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <Car brand={ carInfo } />
    </>
  );
}