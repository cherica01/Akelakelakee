"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
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
              <CardTitle className="text-white">Phone</CardTitle>
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
              Fill out the form below and I'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Your Name"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  placeholder="Subject"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px] bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400"
                />
              </div>
              <Button className="w-full bg-[#00FF94] text-black hover:bg-[#00FF94]/90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

