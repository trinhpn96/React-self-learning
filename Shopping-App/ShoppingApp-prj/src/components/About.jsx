const About = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
      <div className="object-cover rounded-md">
        <img
          src="https://plus.unsplash.com/premium_photo-1664202526336-9edbfc8e2886?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNob3B8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="shopping-customer"
          className="w-full h-[256px] rounded-md block"
        />
      </div>

      <div>
        <h2 className="font-sans">About Us</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>
        <button>Know more</button>
      </div>
    </div>
  );
};

export default About;
