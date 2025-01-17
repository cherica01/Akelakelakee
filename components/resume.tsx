import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Resume</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background and professional experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Master in Computer Science</CardTitle>
                  <p className="text-[#00FF94]">2018 - 2020</p>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>Stanford University</p>
                  <p className="mt-2">Specialized in Artificial Intelligence and Web Technologies</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Bachelor in Software Engineering</CardTitle>
                  <p className="text-[#00FF94]">2014 - 2018</p>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>MIT</p>
                  <p className="mt-2">Focus on Software Development and System Design</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-4">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Senior Software Engineer</CardTitle>
                  <p className="text-[#00FF94]">2020 - Present</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">Google</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">React</Badge>
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">Next.js</Badge>
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Software Developer</CardTitle>
                  <p className="text-[#00FF94]">2018 - 2020</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">Microsoft</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">JavaScript</Badge>
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">Node.js</Badge>
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">Azure</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

