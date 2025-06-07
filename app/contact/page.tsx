"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Clock, 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  Building,
  Factory
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      stutterChildren: 0.1
    }
  }
}

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus minimal 2 karakter.",
  }),
  email: z.string().email({
    message: "Masukkan alamat email yang valid.",
  }),
  company: z.string().optional(),
  phone: z.string().min(5, {
    message: "Masukkan nomor telepon yang valid.",
  }),
  inquiry: z.string().min(1, {
    message: "Pilih jenis pertanyaan.",
  }),
  message: z.string().min(10, {
    message: "Pesan harus minimal 10 karakter.",
  }),
})

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [inquiryType, setInquiryType] = useState('general');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // React Hook Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiry: "general",
      message: "",
    },
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // In a real application, you would send this data to your server
    setFormSubmitted(true)
  }

  useEffect(() => {
    // Get product or service ID from URL if present
    const product = searchParams.get('product');
    const service = searchParams.get('service');
    
    if (product) {
      setInquiryType('product');
      form.setValue('inquiry', 'product');
      form.setValue('message', `Saya tertarik untuk mengetahui lebih lanjut tentang produk (ID: ${product}).`);
    } else if (service) {
      setInquiryType('service');
      form.setValue('inquiry', 'service');
      form.setValue('message', `Saya tertarik untuk mengetahui lebih lanjut tentang layanan (ID: ${service}).`);
    }
  }, [searchParams, form]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 xs:py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/80 to-background z-0">
          <div className="absolute inset-0 bg-[url('/images/logo_banner.png')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Hubungi <span className="text-primary">Kami</span>
            </h1>
            <p className="mt-4 xs:mt-6 text-base xs:text-lg sm:text-xl text-muted-foreground">
              Hubungi tim kami untuk mendiskusikan kebutuhan engineering Anda atau meminta informasi lebih lanjut.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                icon: <MapPin className="h-8 xs:h-10 w-8 xs:w-10" />,
                title: "Kunjungi Kami",
                details: [
                  "Taman Tridaya Indah",
                  "Jl. Raflesia 6 C.14 No 5",
                  "Tambun Bekasi 17510",
                  "Indonesia"
                ]
              },
              {
                icon: <Phone className="h-8 xs:h-10 w-8 xs:w-10" />,
                title: "Telepon Kami",
                details: [
                  "Kantor: 021-89528055",
                  "Workshop: 021-89535436"
                ]
              },
              {
                icon: <Mail className="h-8 xs:h-10 w-8 xs:w-10" />,
                title: "Email Kami",
                details: [
                  "emsadaho@gmail.com",
                  "emsadaworkshop@gmail.com"
                ]
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-4 xs:p-6 flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/10 p-2 xs:p-3 mb-3 xs:mb-4 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="text-lg xs:text-xl font-semibold">{item.title}</h3>
                    <div className="mt-2 xs:mt-4 space-y-1 text-muted-foreground text-sm xs:text-base">
                      {item.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-8 xs:py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-4 xs:p-6">
                  {!formSubmitted ? (
                    <>
                      <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6">Kirim Pesan</h2>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 xs:space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm xs:text-base">Nama Lengkap</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Nama Anda" className="text-sm xs:text-base" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm xs:text-base">Alamat Email</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="email@contoh.com" className="text-sm xs:text-base" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6">
                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm xs:text-base">Nama Perusahaan</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Perusahaan Anda (opsional)" className="text-sm xs:text-base" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm xs:text-base">Nomor Telepon</FormLabel>
                                  <FormControl>
                                    <Input placeholder="+62 xxx xxx xxx" className="text-sm xs:text-base" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="inquiry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm xs:text-base">Jenis Pertanyaan</FormLabel>
                                <Select 
                                  onValueChange={field.onChange} 
                                  defaultValue={field.value}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="text-sm xs:text-base">
                                      <SelectValue placeholder="Pilih jenis pertanyaan" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="general" className="text-sm xs:text-base">Pertanyaan Umum</SelectItem>
                                    <SelectItem value="product" className="text-sm xs:text-base">Informasi Produk</SelectItem>
                                    <SelectItem value="service" className="text-sm xs:text-base">Informasi Layanan</SelectItem>
                                    <SelectItem value="quote" className="text-sm xs:text-base">Permintaan Penawaran</SelectItem>
                                    <SelectItem value="support" className="text-sm xs:text-base">Dukungan Teknis</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm xs:text-base">Pesan</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Jelaskan pertanyaan Anda secara rinci..."
                                    className="min-h-[100px] xs:min-h-[120px] text-sm xs:text-base"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                              )}
                            />
                          
                          <Button type="submit" className="w-full text-sm xs:text-base">
                            <Send className="mr-2 h-4 w-4" /> 
                            Kirim Pesan
                          </Button>
                        </form>
                      </Form>
                    </>
                  ) : (
                    <div className="text-center py-6 xs:py-8">
                      <div className="rounded-full bg-primary/10 p-3 xs:p-4 w-16 xs:w-20 h-16 xs:h-20 flex items-center justify-center mx-auto mb-4 xs:mb-6">
                        <Send className="h-8 xs:h-10 w-8 xs:w-10 text-primary" />
                      </div>
                      <h2 className="text-xl xs:text-2xl font-bold mb-3 xs:mb-4">Pesan Berhasil Terkirim!</h2>
                      <p className="text-muted-foreground mb-4 xs:mb-6 text-sm xs:text-base">
                        Terima kasih telah menghubungi PT Emsada Cipta Lestari. Tim kami akan meninjau pesan Anda dan segera menghubungi Anda kembali.
                      </p>
                      <Button 
                        onClick={() => {
                          setFormSubmitted(false);
                          form.reset();
                        }}
                        className="text-sm xs:text-base"
                      >
                        Kirim Pesan Lain
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 xs:gap-6"
            >
              <div className="bg-muted rounded-lg p-4 xs:p-6 shadow-sm border">
                <div className="flex gap-3 xs:gap-4 items-start">
                  <div className="rounded-full bg-primary/10 p-2 xs:p-3 text-primary flex-shrink-0">
                    <Clock className="h-5 xs:h-6 w-5 xs:w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg xs:text-xl font-semibold">Jam Operasional</h3>
                    <div className="mt-2 xs:mt-4 space-y-1 xs:space-y-2 text-sm xs:text-base">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Senin - Jumat:</span>
                        <span>08:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sabtu:</span>
                        <span>09:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Minggu:</span>
                        <span>Tutup</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4 xs:p-6 shadow-sm border">
                <div className="flex gap-3 xs:gap-4 items-start">
                  <div className="rounded-full bg-primary/10 p-2 xs:p-3 text-primary flex-shrink-0">
                    <Building className="h-5 xs:h-6 w-5 xs:w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg xs:text-xl font-semibold">Departemen</h3>
                    <div className="mt-2 xs:mt-4 space-y-1 xs:space-y-2 text-sm xs:text-base">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Penjualan & Pemasaran:</span>
                        <span>emsadaho@gmail.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dukungan Pelanggan:</span>
                        <span>emsadaworkshop@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md border h-[250px] xs:h-[300px] relative">
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <div className="text-center p-3 xs:p-4">
                    <Factory className="h-10 xs:h-12 w-10 xs:w-12 text-muted-foreground mx-auto mb-3 xs:mb-4" />
                    <h3 className="text-base xs:text-lg font-medium">Lokasi Kantor</h3>
                    <p className="text-muted-foreground text-sm xs:text-base">
                      Taman Tridaya Indah, Jl. Raflesia 6 C.14 No 5
                    </p>
                    <p className="text-muted-foreground text-sm xs:text-base">
                      Tambun Bekasi 17510, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-8 xs:mb-12"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold">Lokasi Kami</h2>
            <p className="mt-3 xs:mt-4 text-base xs:text-lg sm:text-xl text-muted-foreground">
              Kunjungi kantor dan workshop kami di Tambun, Bekasi
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                title: "Kantor Pusat",
                address: "Taman Tridaya Indah, Jl. Raflesia 6 C.14 No 5, Tambun Bekasi 17510",
                phone: "021-89528055",
                email: "emsadaho@gmail.com",
                image: "/images/img_foto_bersama.png"
              },
              {
                title: "Workshop",
                address: "Jl. Rawa Pisang E412, Rt 003/002 Kp. Buwek, Tambun Bekasi 17510",
                phone: "021-89535436",
                email: "emsadaworkshop@gmail.com",
                image: "/images/logo_banner.png"
              }
            ].map((office, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden h-full">
                  <div className="relative h-40 xs:h-48">
                    <Image 
                      src={office.image} 
                      alt={office.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 xs:p-6">
                    <h3 className="text-lg xs:text-xl font-semibold">{office.title}</h3>
                    <div className="mt-2 xs:mt-4 space-y-2 xs:space-y-3 text-sm xs:text-base">
                      <div className="flex gap-2 xs:gap-3">
                        <MapPin className="h-4 xs:h-5 w-4 xs:w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{office.address}</p>
                      </div>
                      <div className="flex gap-2 xs:gap-3">
                        <Phone className="h-4 xs:h-5 w-4 xs:w-5 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground">{office.phone}</p>
                      </div>
                      <div className="flex gap-2 xs:gap-3">
                        <Mail className="h-4 xs:h-5 w-4 xs:w-5 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground">{office.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold">Siap Bermitra dengan Kami?</h2>
              <p className="mt-3 xs:mt-4 text-base xs:text-lg sm:text-xl opacity-90 max-w-xl xs:max-w-2xl mx-auto">
                Temukan bagaimana PT Emsada Cipta Lestari dapat mengoptimalkan kebutuhan engineering Anda dengan solusi inovatif dan tim profesional.
              </p>
              <div className="mt-6 xs:mt-8 flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-sm xs:text-base">
                  <a href="tel:+622189528055">
                    Hubungi Kami Sekarang
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild className="text-sm xs:text-base">
                  <a href="mailto:emsadaho@gmail.com">
                    Kirim Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}