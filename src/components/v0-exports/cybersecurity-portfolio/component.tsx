import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Shield, Lock, Eye, AlertTriangle, Users, Award, ExternalLink } from "lucide-react"

export default function CybersecurityPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-mono text-lg font-semibold">CyberSec Pro</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#certifications" className="text-muted-foreground hover:text-foreground transition-colors">
                Certifications
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">Alex Rodriguez</h1>
              <p className="text-xl text-muted-foreground mb-4">Cybersecurity Specialist</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I protect digital assets and secure critical infrastructure through advanced threat detection,
                vulnerability assessment, and incident response. Passionate about building resilient security frameworks
                that defend against evolving cyber threats.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  <ExternalLink className="h-4 w-4" />
                  View Resume
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl"></div>
              <Card className="relative">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Security Architecture</h3>
                        <p className="text-sm text-muted-foreground">Designing robust defense systems</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Eye className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Threat Intelligence</h3>
                        <p className="text-sm text-muted-foreground">Advanced threat hunting & analysis</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-chart-3/10 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-chart-3" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Incident Response</h3>
                        <p className="text-sm text-muted-foreground">Rapid threat containment & recovery</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Currently, I'm a Senior Cybersecurity Analyst at{" "}
              <span className="text-primary font-semibold">SecureCore Technologies</span>, specializing in enterprise
              security architecture and threat detection. I contribute to the development and implementation of security
              frameworks that protect critical infrastructure and sensitive data across multiple industries.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In the past, I've had the opportunity to work across various sectors — from financial services and
              healthcare to government agencies and technology startups. Additionally, I've conducted security
              assessments for Fortune 500 companies and led incident response teams during critical security breaches.
            </p>
            <p className="text-lg leading-relaxed">
              In my spare time, I'm usually researching emerging threats, contributing to open-source security tools,
              mentoring junior security professionals, or participating in bug bounty programs and CTF competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Security Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Zero Trust</Badge>
                  <Badge variant="secondary">SASE</Badge>
                  <Badge variant="secondary">Defense in Depth</Badge>
                  <Badge variant="secondary">Risk Assessment</Badge>
                  <Badge variant="secondary">Compliance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-accent" />
                  Threat Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SIEM/SOAR</Badge>
                  <Badge variant="secondary">EDR/XDR</Badge>
                  <Badge variant="secondary">Threat Hunting</Badge>
                  <Badge variant="secondary">IOC Analysis</Badge>
                  <Badge variant="secondary">Behavioral Analytics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-chart-3" />
                  Penetration Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Web App Testing</Badge>
                  <Badge variant="secondary">Network Pentesting</Badge>
                  <Badge variant="secondary">Social Engineering</Badge>
                  <Badge variant="secondary">Red Team Ops</Badge>
                  <Badge variant="secondary">Vulnerability Assessment</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Incident Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Digital Forensics</Badge>
                  <Badge variant="secondary">Malware Analysis</Badge>
                  <Badge variant="secondary">Crisis Management</Badge>
                  <Badge variant="secondary">Recovery Planning</Badge>
                  <Badge variant="secondary">Post-Incident Review</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-chart-4" />
                  Security Awareness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Training Programs</Badge>
                  <Badge variant="secondary">Phishing Simulation</Badge>
                  <Badge variant="secondary">Policy Development</Badge>
                  <Badge variant="secondary">Security Culture</Badge>
                  <Badge variant="secondary">Risk Communication</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-chart-5" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Splunk</Badge>
                  <Badge variant="secondary">CrowdStrike</Badge>
                  <Badge variant="secondary">Nessus</Badge>
                  <Badge variant="secondary">Metasploit</Badge>
                  <Badge variant="secondary">Wireshark</Badge>
                  <Badge variant="secondary">Burp Suite</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Achievements</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      CISSP - Certified Information Systems Security Professional
                    </h3>
                    <p className="text-muted-foreground">ISC² • 2023 — Present</p>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">OSCP - Offensive Security Certified Professional</h3>
                    <p className="text-muted-foreground">Offensive Security • 2022 — Present</p>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Active</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">GCIH - GIAC Certified Incident Handler</h3>
                    <p className="text-muted-foreground">SANS Institute • 2021 — Present</p>
                  </div>
                  <Badge className="bg-chart-3/10 text-chart-3 border-chart-3/20">Active</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">CEH - Certified Ethical Hacker</h3>
                    <p className="text-muted-foreground">EC-Council • 2020 — Present</p>
                  </div>
                  <Badge className="bg-chart-4/10 text-chart-4 border-chart-4/20">Active</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Enterprise SIEM Implementation</CardTitle>
                <CardDescription>
                  Designed and deployed a comprehensive security information and event management system for a Fortune
                  500 financial services company.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Splunk</Badge>
                  <Badge variant="outline">SOAR</Badge>
                  <Badge variant="outline">Threat Intelligence</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Reduced mean time to detection by 75% and automated 80% of common incident response workflows.
                </p>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <ExternalLink className="h-4 w-4" />
                  Case Study
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Zero Trust Network Architecture</CardTitle>
                <CardDescription>
                  Led the migration from traditional perimeter security to a comprehensive zero trust model for a
                  healthcare organization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Zero Trust</Badge>
                  <Badge variant="outline">Identity Management</Badge>
                  <Badge variant="outline">Microsegmentation</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Achieved 99.9% network visibility and reduced lateral movement attack surface by 90%.
                </p>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <ExternalLink className="h-4 w-4" />
                  Technical Details
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Automated Threat Hunting Platform</CardTitle>
                <CardDescription>
                  Developed a machine learning-powered threat hunting platform that proactively identifies advanced
                  persistent threats.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Threat Hunting</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Identified 15+ previously undetected APT campaigns and reduced false positive rates by 60%.
                </p>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Github className="h-4 w-4" />
                  View Code
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Incident Response Playbook Automation</CardTitle>
                <CardDescription>
                  Created automated incident response playbooks that streamline security operations and reduce response
                  times.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">SOAR</Badge>
                  <Badge variant="outline">Automation</Badge>
                  <Badge variant="outline">Incident Response</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Automated 85% of tier-1 security alerts and improved incident response time by 65%.
                </p>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <ExternalLink className="h-4 w-4" />
                  Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in collaborating on cybersecurity projects or discussing security challenges? I'd love to hear
            from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">alex.rodriguez@cybersec.pro</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Users className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                <div className="flex justify-center gap-4 mt-4">
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Alex Rodriguez. Securing the digital frontier, one system at a time.</p>
        </div>
      </footer>
    </div>
  )
}
