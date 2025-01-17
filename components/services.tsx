import { Code, Palette, Globe, Smartphone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer a wide range of development services to help bring your digital ideas to life
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-zinc-900 border-zinc-800 hover:border-[#00FF94] transition-colors">
            <CardHeader>
              <Code className="h-12 w-12 text-[#00FF94] mb-4" />
              <CardTitle className="text-white">Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Creating responsive and dynamic web applications using modern frameworks and technologies
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 hover:border-[#00FF94] transition-colors">
            <CardHeader>
              <Palette className="h-12 w-12 text-[#00FF94] mb-4" />
              <CardTitle className="text-white">UI/UX Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Designing intuitive and beautiful user interfaces with a focus on user experience
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 hover:border-[#00FF94] transition-colors">
            <CardHeader>
              <Globe className="h-12 w-12 text-[#00FF94] mb-4" />
              <CardTitle className="text-white">SEO Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Improving website visibility and search engine rankings through optimization
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 hover:border-[#00FF94] transition-colors">
            <CardHeader>
              <Smartphone className="h-12 w-12 text-[#00FF94] mb-4" />
              <CardTitle className="text-white">Mobile Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Building cross-platform mobile applications with React Native
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

