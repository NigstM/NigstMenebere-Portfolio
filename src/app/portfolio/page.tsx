import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Palette,
  Headphones,
  Monitor,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Star,
  Coffee,
  ChevronRight,
  Menu,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              NIGST 
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-slate-700 hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-slate-700 hover:text-emerald-600 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-slate-700 hover:text-emerald-600 transition-colors">
                Skills
              </Link>
              <Link href="#portfolio" className="text-slate-700 hover:text-emerald-600 transition-colors">
                Portfolio
              </Link>
              <Link href="#services" className="text-slate-700 hover:text-emerald-600 transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-slate-700 hover:text-emerald-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>
...
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  Hi, I am{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    NIGST MENEBERE
                  </span>
                </h1>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                    <Code2 className="w-3 h-3 mr-1" />
                    Software Engineer
                  </Badge>
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                    <Monitor className="w-3 h-3 mr-1" />
                    Frontend Developer
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
                    <Palette className="w-3 h-3 mr-1" />
                    UI/UX Designer
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
                    <Headphones className="w-3 h-3 mr-1" />
                    Virtual Assistant
                  </Badge>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Recent Software Engineering graduate from Adama Science and Technology University, with internship
                  experience in front-end development. Skilled in building modern, responsive web applications using
                  React.js, Next.js, and Tailwind CSS. Passionate about delivering clean, user-friendly solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://github.com/NigstM" target="_blank" rel="noopener noreferrer">
                <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
  >
    View My Work
    <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
</a>
               <a href="/Resume/Resume (3).pdf" download>
  <Button variant="outline" size="lg" className="border-emerald-600 bg-white text-emerald-600 hover:bg-emerald-50">
    <Download className="mr-2 h-4 w-4" />
    Download Resume
  </Button>
</a>
              </div>
             <div className="flex space-x-4">
              <Link href="https://github.com/NigstM" passHref>
              <Button variant="ghost" size="icon" className="bg-transparent text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
      <Github className="h-5 w-5" />
              </Button>
              </Link>
  
              <Link href="https://www.linkedin.com/in/nigst-menebere" passHref>
              <Button variant="ghost" size="icon" className="bg-transparent text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
              <Linkedin className="h-5 w-5" />
              </Button>
              </Link>
  
              <Link href="mailto:emumenbere@gmail.com" passHref>
              <Button variant="ghost" size="icon" className="bg-transparent text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
              <Mail className="h-5 w-5" />
              </Button>
              </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Nigst Menebere - Software Engineer"
                  width={600}
                  height={600}
                  className="relative rounded-full border-8 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate Software Engineering graduate ready to make an impact
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                Im a recent BSc Software Engineering graduate from Adama Science and Technology University (2021-2025),
                with hands-on experience gained through internships at ETech and Same Soft Inc in Addis Ababa. During my
                internships, I developed and maintained front-end features using React and Next.js, participated in
                agile development processes, and collaborated with cross-functional teams.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                My expertise spans across modern web technologies, UI/UX design, and virtual assistance. I am proficient
                in React.js, Next.js, Angular, and have strong design skills using Figma, Adobe Illustrator, and
                Photoshop. I believe in combining technical excellence with user-centered design to create impactful
                digital solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600">6+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600">2</div>
                  <div className="text-slate-600">Internship Experience</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <GraduationCap className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Fresh Graduate</h3>
                <p className="text-sm text-slate-600">BSc in Software Engineering from ASTU</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Briefcase className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Internship Ready</h3>
                <p className="text-sm text-slate-600">Hands-on experience from ETech and Same Soft Inc</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Coffee className="h-8 w-8 text-cyan-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Always Learning</h3>
                <p className="text-sm text-slate-600">
                  Certified in Graphics Design, Virtual Assistance, and Programming
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Star className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Team Player</h3>
                <p className="text-sm text-slate-600">Strong collaboration and communication skills</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        A comprehensive skill set covering modern web development and design
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card className="p-6 border-gray-300 hover:shadow-lg transition-all hover:-translate-y-1">
        <CardHeader className="pb-4">
          <Code2 className="h-12 w-12 text-emerald-600 mb-4" />
          <CardTitle className="text-xl text-gray-800">Frontend Development</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2 text-gray-800">
            <Badge variant="secondary">React.js</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Angular</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">HTML/CSS</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 border-gray-300 hover:shadow-lg transition-all hover:-translate-y-1">
        <CardHeader className="pb-4">
          <Monitor className="h-12 w-12 text-teal-600 mb-4" />
          <CardTitle className="text-xl text-gray-800">Tools & Technologies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2 text-gray-800">
            <Badge variant="secondary">Git</Badge>
            <Badge variant="secondary">GitHub</Badge>
            <Badge variant="secondary">VS Code</Badge>
            <Badge variant="secondary">Agile</Badge>
            <Badge variant="secondary">Jira</Badge>
            <Badge variant="secondary">Asana</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 border-gray-300 hover:shadow-lg transition-all hover:-translate-y-1">
        <CardHeader className="pb-4">
          <Palette className="h-12 w-12 text-cyan-600 mb-4" />
          <CardTitle className="text-xl text-gray-800">UI/UX Design</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2 text-gray-800">
            <Badge variant="secondary">Figma</Badge>
            <Badge variant="secondary">Adobe Illustrator</Badge>
            <Badge variant="secondary">Photoshop</Badge>
            <Badge variant="secondary">Logo Design</Badge>
            <Badge variant="secondary">Mobile UI</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 border-gray-300 hover:shadow-lg transition-all hover:-translate-y-1">
        <CardHeader className="pb-4">
          <Headphones className="h-12 w-12 text-purple-600 mb-4" />
          <CardTitle className="text-xl text-gray-800">Virtual Assistance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2 text-gray-800">
            <Badge variant="secondary">Project Management</Badge>
            <Badge variant="secondary">Team Collaboration</Badge>
            <Badge variant="secondary">Communication</Badge>
            <Badge variant="secondary">Problem Solving</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

{/* Portfolio Section */}
<section id="portfolio" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        A showcase of my recent work across development and design
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
        <div className="relative h-48 bg-gradient-to-br from-emerald-400 to-teal-500">
          <Image src="/placeholder.svg?height=200&width=400" alt="Lwie Platform" fill className="object-cover" />
        </div>
        <CardContent className="p-6">
          <CardTitle className="mb-2 text-gray-800">Lwie Platform</CardTitle>
          <CardDescription className="mb-4 text-gray-700">
            Modern e-commerce platform with dynamic product views and comprehensive UI/UX design (2024-2025)
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">React.js</Badge>
            <Badge variant="outline">Figma</Badge>
            <Badge variant="outline">UI/UX</Badge>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
        <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-500">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Internship Management System"
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <CardTitle className="mb-2 text-gray-800">Internship Management System</CardTitle>
          <CardDescription className="mb-4 text-gray-700">
            Frontend development for internship management system using React.js (2024)
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">React.js</Badge>
            <Badge variant="outline">JavaScript</Badge>
            <Badge variant="outline">CSS</Badge>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
        <div className="relative h-48 bg-gradient-to-br from-blue-400 to-cyan-500">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Smart West Management System"
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <CardTitle className="mb-2 text-gray-800">Smart West Management System</CardTitle>
          <CardDescription className="mb-4 text-gray-700">
            Complete UI/UX design for smart waste management system (2025)
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">Figma</Badge>
            <Badge variant="outline">UI/UX Design</Badge>
            <Badge variant="outline">Prototyping</Badge>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-1" />
              View Design
            </Button>
            <Button variant="ghost" size="sm">
              <Palette className="w-4 h-4 mr-1" />
              Figma
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
        <div className="relative h-48 bg-gradient-to-br from-green-400 to-emerald-500">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="E-Commerce Web App"
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <CardTitle className="mb-2 text-gray-800">E-Commerce Web App</CardTitle>
          <CardDescription className="mb-4 text-gray-700">
            Modern e-commerce UI with dynamic product views and responsive design (2023)
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">HTML</Badge>
            <Badge variant="outline">CSS</Badge>
            <Badge variant="outline">JavaScript</Badge>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
        <div className="relative h-48 bg-gradient-to-br from-orange-400 to-red-500">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Mobile App UI/UX Design"
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <CardTitle className="mb-2 text-gray-800">Mobile App UI/UX Design</CardTitle>
          <CardDescription className="mb-4 text-gray-700">
            Complete mobile application UI/UX design with user-centered approach (2024)
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">Figma</Badge>
            <Badge variant="outline">Mobile UI</Badge>
            <Badge variant="outline">User Research</Badge>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-1" />
              View Design
            </Button>
            <Button variant="ghost" size="sm">
              <Palette className="w-4 h-4 mr-1" />
              Figma
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
        <div className="relative h-48 bg-gradient-to-br from-indigo-400 to-purple-500">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Portfolio Website"
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <CardTitle className="mb-2 text-gray-800">Portfolio Website</CardTitle>
          <CardDescription className="mb-4 text-gray-700">
            Personal portfolio website built with HTML, CSS, and JavaScript (2023)
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">HTML</Badge>
            <Badge variant="outline">CSS</Badge>
            <Badge variant="outline">JavaScript</Badge>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
...
      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <Code2 className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <CardTitle className="mb-4">Frontend Development</CardTitle>
              <CardDescription className="mb-6">
                Modern, responsive web applications using React.js, Next.js, and Angular
              </CardDescription>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• React.js Development</li>
                <li>• Next.js Applications</li>
                <li>• Angular Projects</li>
                <li>• Responsive Design</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <Palette className="h-16 w-16 text-teal-600 mx-auto mb-4" />
              <CardTitle className="mb-4">UI/UX Design</CardTitle>
              <CardDescription className="mb-6">
                User-centered design solutions for web and mobile applications
              </CardDescription>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Figma Design</li>
                <li>• Mobile App UI</li>
                <li>• Logo Design</li>
                <li>• Prototyping</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <Monitor className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
              <CardTitle className="mb-4">Web Development</CardTitle>
              <CardDescription className="mb-6">
                Full-stack web development with modern technologies and best practices
              </CardDescription>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• HTML/CSS/JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• Version Control (Git)</li>
                <li>• Agile Development</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <Headphones className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <CardTitle className="mb-4">Virtual Assistance</CardTitle>
              <CardDescription className="mb-6">
                Professional virtual assistance to streamline your business operations
              </CardDescription>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Project Management</li>
                <li>• Team Collaboration</li>
                <li>• Administrative Support</li>
                <li>• Communication</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to start your next project? Lets discuss how I can help bring your ideas to life.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <div className="text-slate-600">emumenbere@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Phone</div>
                      <div className="text-slate-600">+251 963672539</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Location</div>
                      <div className="text-slate-600">Addis Ababa, Ethiopia</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-600"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-600"
                    asChild
                  >
                    <Link href="http://www.linkedin.com/in/nigst-menebere" target="_blank">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-600"
                    asChild
                  >
                    <Link href="mailto:emumenbere@gmail.com">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I will get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Project Inquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea id="message" rows={4} placeholder="Tell me about your project..." />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
              NIGST MENEBERE
            </div>
            <p className="text-slate-400 mb-6">
              Software Engineer • Frontend Developer • UI/UX Designer • Virtual Assistant
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Link href="#home" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Skills
              </Link>
              <Link href="#portfolio" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Portfolio
              </Link>
              <Link href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Contact
              </Link>
            </div>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-400">© {new Date().getFullYear()} Nigst Menebere. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
