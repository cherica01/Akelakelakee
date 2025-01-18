import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Education</h3>
            <div className="space-y-4">
              <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-[#00FF94] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Obtaining a certification in Responsive Web Design.</CardTitle>
                  <p className="text-[#00FF94]">2024 - 2025</p>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>Freecodecamp</p>
                  <p className="mt-2">Responsive Web Design Certification, showcasing expertise in creating adaptable and user-friendly web interfaces.</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-[#00FF94] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Bachelor&apos;s degree (Bac+3) in Computer Science, Risk, and Decision </CardTitle>
                  <p className="text-[#00FF94]">2024 - 2025</p>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>E.S.M.I.A</p>
                  <p className="mt-2">Focuses on web development using agile methods</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Experience</h3>
            <div className="space-y-4">
              <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-[#00FF94] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Back-end developer, Integrator</CardTitle>
                  <p className="text-[#00FF94]">2024 - Present</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">NexusCraft</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">Django</Badge>
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">Next.js</Badge>
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-[#00FF94] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">4-month internship as a back-end and full-stack developer</CardTitle>
                  <p className="text-[#00FF94]">2023, 2024</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">M.E.N (Ministry of National Education)</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">Php</Badge>
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">Mysql</Badge>
                    <Badge variant="outline" className="border-[#00FF94] text-[#00FF94]">Cordova</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
