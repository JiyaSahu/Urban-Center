import React, { useState, useEffect } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Mobile: "",
    Service: "",
    City: "",
    Message: "",
  });

  const [errors, setErrors] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (service) => {
    setFormData({ ...formData, Service: service });
    setShowDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.Name.trim()) newErrors.Name = "Name is required";
    if (!formData.Mobile.trim()) newErrors.Mobile = "Mobile number is required";
    if (!formData.City.trim()) newErrors.City = "City is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        Name: "",
        Mobile: "",
        Service: "",
        City: "",
        Message: "",
      });
    }
  };

  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzLBAfdL3It2OCal6YIh3E-PVCq9fEclqgeuONozLbbF9x_HVo2KUBWa4KYbZYxg9av/exec";
    const form = document.forms["submit-to-google-sheet"];

    if (form) {
      const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            alert(
              "Thank you! Your request at Urban Center has been received. We'll contact you shortly!"
            );
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      };
      form.addEventListener("submit", handleFormSubmit);
      return () => {
        form.removeEventListener("submit", handleFormSubmit);
      };
    }
  }, []);

  return (
    <div className="contact-form-container">
      <h2 className="title">Contact Urban Center</h2>
      <p className="subtitle">
        Book your groceries, clothes, snacks & daily needs. Quick delivery, best price guaranteed.
      </p>
      <form onSubmit={handleSubmit} name="submit-to-google-sheet">
        <div className="input-group">
          <input
            type="text"
            name="Name"
            placeholder="Full Name*"
            value={formData.Name}
            onChange={handleChange}
            className={errors.Name ? "error-input" : ""}
          />
          {errors.Name && <span className="error">{errors.Name}</span>}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="Mobile"
            placeholder="Mobile / WhatsApp Number*"
            value={formData.Mobile}
            onChange={handleChange}
            className={errors.Mobile ? "error-input" : ""}
          />
          {errors.Mobile && <span className="error">{errors.Mobile}</span>}
        </div>

        <div className="dropdown">
          <input
            type="text"
            name="Service"
            placeholder="Select Service"
            value={formData.Service}
            readOnly
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => handleServiceSelect("Grocery Order")}>Grocery Order</li>
              <li onClick={() => handleServiceSelect("Clothing Enquiry")}>Clothing Enquiry</li>
              <li onClick={() => handleServiceSelect("Bulk/Wholesale")}>Bulk/Wholesale</li>
              <li onClick={() => handleServiceSelect("Other")}>Other</li>
            </ul>
          )}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="City"
            placeholder="Your City*"
            value={formData.City}
            onChange={handleChange}
            className={errors.City ? "error-input" : ""}
          />
          {errors.City && <span className="error">{errors.City}</span>}
        </div>

        <div className="input-group">
          <textarea
            name="Message"
            placeholder="Tell us what you're looking for..."
            value={formData.Message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
