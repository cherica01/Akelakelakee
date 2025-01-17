import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Work() {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Recent Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent projects and collaborations
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="bg-zinc-900 border-zinc-800 overflow-hidden group">
              <CardContent className="p-0 relative">
                <Image
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={`Project ${item}`}
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/80 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold text-white mb-2">Project Title {item}</h3>
                  <p className="text-gray-400 mb-4">Brief project description goes here</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">React</Badge>
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">Next.js</Badge>
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">TypeScript</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

