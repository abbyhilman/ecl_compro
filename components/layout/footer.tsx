import Link from 'next/link'
import Logo from '@/components/logo'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm mt-4">
              PT. Emsada Cipta Lestari, atau dikenal sebagai ECL, berdiri sejak 2013. Kami adalah perusahaan manufaktur terkemuka yang berdedikasi untuk menghadirkan solusi inovatif, kualitas unggul, dan kepuasan pelanggan melalui layanan terbaik di industri.
            </p>
            <div className="flex space-x-3 mt-6">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about#careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products#precision-manufacturing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Precision Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/products#industrial-equipment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Industrial Equipment
                </Link>
              </li>
              <li>
                <Link href="/products#custom-solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link href="/products#automation-systems" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Automation Systems
                </Link>
              </li>
              <li>
                <Link href="/products#maintenance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Taman Tridaya Indah, Jl. Raflesia 6 C.14 No 5, Tambun Bekasi 17510
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">021 – 89528055</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">emsadaho@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PT. Emsada Cipta Lestari. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}