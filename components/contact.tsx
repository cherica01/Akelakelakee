"use client";import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Correction ici : Changer le type de l'événement en FormEvent
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "service_jgl94xa", // Remplacez par votre Service ID
        "template_jht10r6", // Remplacez par votre Template ID
        {
          from_name: formData.name, // Correspond à {{from_name}}
          reply_to: formData.email, // Correspond à {{reply_to}}
          subject: formData.subject, // Correspond à {{subject}}
          message: formData.message, // Correspond à {{message}}
        },
        "wP8r530yYXrJws0Mm" // Remplacez par votre clé publique
      );
      console.log("Email envoyé avec succès :", response);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <Mail className="h-12 w-12 text-[#00FF94] mb-4" />
              <CardTitle className="text-white">Email</CardTitle>
              <CardDescription className="text-gray-400">
                riantsoacherica01@gmail.com
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <Phone className="h-12 w-12 text-[#00FF94] mb-4" />
              <CardTitle className="text-white">WhatsApp</CardTitle>
              <CardDescription className="text-gray-400">
                +261 38 40 790 08
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <MapPin className="h-12 w-12 text-[#00FF94] mb-4" />
              <CardTitle className="text-white">Location</CardTitle>
              <CardDescription className="text-gray-400">
                Antananarivo , Madagascar
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Card className="mt-12 bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white">Send Message</CardTitle>
            <CardDescription className="text-gray-400">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    type="email"
                    required
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="min-h-[150px] bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00FF94] text-black hover:bg-[#00FF94]/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {successMessage && (
              <p className="text-center mt-4 text-white">{successMessage}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
