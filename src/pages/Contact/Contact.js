import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import "./Contact.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0va4ogp",
        "template_ykuk7jp",
        formData,
        "GH5Br7MEDuTfFzNsx"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div style={{ background: "rgb(245,245,247)" }}>
      <div>
        <div className="headingContact">Contact Us</div>
        <Text mb={4} textAlign="center">
          If you have any questions, feel free to reach out to us!
        </Text>
      </div>
      <div>
        <Flex
          className="contact-container"
          p={4}
          maxWidth="1200px"
          mx="auto"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
        >
          <Box
            className="contact-form"
            flex={1}
            p={4}
            boxShadow="md"
            borderRadius="md"
            bg="white"
          >
            <Flex as="form" direction="column" onSubmit={handleSubmit}>
              <FormControl mb={4}>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormControl>
              <Button type="submit" className="submitButton">
                Submit
              </Button>
            </Flex>
          </Box>
          <Box className="contact-map" flex={1}>
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=OPTO%20Lens+(Mater%20Trading%20Pvt.%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Flex>
      </div>
    </div>
  );
}

export default ContactUs;
