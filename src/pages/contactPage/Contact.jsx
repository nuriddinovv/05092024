import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width={"100%"}
          height={"100%"}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.25298617416!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvnNoa2VudA!5e0!3m2!1suz!2s!4v1725603861383!5m2!1suz!2s"
          style={{
            filter: "grayscale(1) contrast(1.2) opacity(0.4)",
          }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"></div>
      </div>
    </section>
  );
};

export default Contact;
